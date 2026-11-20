'use client';

import React, { useState, useMemo } from 'react';
import { CAREERS_DATABASE } from '@/data/careers';
import { Career, RIASECCode } from '@/types';
import { Search, Filter, BookOpen, ArrowRight, Sparkles, TrendingUp, DollarSign } from 'lucide-react';

interface CareerExplorerProps {
  onSelectCareer: (career: Career) => void;
  recommendedCode?: string;
}

export default function CareerExplorer({ onSelectCareer, recommendedCode }: CareerExplorerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedCode, setSelectedCode] = useState<string>('Todos');

  const categories = useMemo(() => {
    const cats = new Set(CAREERS_DATABASE.map((c) => c.category));
    return ['Todas', ...Array.from(cats)];
  }, []);

  const filteredCareers = useMemo(() => {
    return CAREERS_DATABASE.filter((career) => {
      const matchesSearch =
        searchTerm.trim() === '' ||
        career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat =
        selectedCategory === 'Todas' || career.category === selectedCategory;

      const matchesCode =
        selectedCode === 'Todos' ||
        career.matchHolland.includes(selectedCode as RIASECCode);

      return matchesSearch && matchesCat && matchesCode;
    });
  }, [searchTerm, selectedCategory, selectedCode]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Title & Description */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Catálogo Vocacional 2026+
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          Explora Carreras con Futuro
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Descubre qué hace un profesional en su día a día, salarios reales, proyección de crecimiento y cursos gratuitos para empezar a probar hoy.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-card rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-md mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por carrera, palabra clave (ej. diseño, salud, tecnología, arte)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-slate-50/50"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 flex-shrink-0">
            <Filter className="w-3.5 h-3.5" /> Área:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RIASEC Code Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">
            Holland RIASEC:
          </span>
          {['Todos', 'R', 'I', 'A', 'S', 'E', 'C'].map((code) => {
            const labels: Record<string, string> = {
              R: 'Realista (R)',
              I: 'Investigador (I)',
              A: 'Artístico (A)',
              S: 'Social (S)',
              E: 'Emprendedor (E)',
              C: 'Convencional (C)'
            };
            return (
              <button
                key={code}
                onClick={() => setSelectedCode(code)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCode === code
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {code === 'Todos' ? 'Todos los códigos' : labels[code] || code}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-6 font-medium">
        <span>Mostrando {filteredCareers.length} carreras encontradas</span>
        {recommendedCode && (
          <span className="text-brand-600 font-bold">
            Tu código recomendado: {recommendedCode}
          </span>
        )}
      </div>

      {/* Careers Grid */}
      {filteredCareers.length === 0 ? (
        <div className="glass-card rounded-3xl p-12 text-center border border-slate-200">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-bold text-slate-700 text-lg">No encontramos carreras con esos filtros</h3>
          <p className="text-sm text-slate-400 mt-1">Prueba cambiando tu búsqueda o seleccionando "Todas".</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Todas');
              setSelectedCode('Todos');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              onClick={() => onSelectCareer(career)}
              className="glass-card rounded-3xl p-6 border border-slate-200/80 hover:border-brand-400 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700">
                    {career.category}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {career.growthOutlook}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-black text-lg text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                  {career.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {career.summary}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {career.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {career.matchHolland.map((c) => (
                    <span key={c} className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {c}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-brand-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Ver Ficha <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
