'use client';

import React, { useState, useMemo } from 'react';
import { CAREERS_DATABASE } from '@/data/careers';
import { Career } from '@/types';
import { Search, Filter, Heart, ArrowRight, Sparkles, TrendingUp, Clock } from 'lucide-react';

interface CareerExplorerProps {
  onSelectCareer: (career: Career) => void;
  favorites: string[];
  onToggleFavorite: (careerId: string) => void;
  matchedCareers?: (Career & { matchPercent: number })[];
}

export default function CareerExplorer({
  onSelectCareer,
  favorites,
  onToggleFavorite,
  matchedCareers
}: CareerExplorerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Map careers with matchPercent if available
  const careersList = useMemo(() => {
    return CAREERS_DATABASE.map((base) => {
      const match = matchedCareers?.find((m) => m.id === base.id);
      return {
        ...base,
        matchPercent: match ? match.matchPercent : undefined
      };
    });
  }, [matchedCareers]);

  const categories = useMemo(() => {
    const cats = new Set(CAREERS_DATABASE.map((c) => c.category));
    return ['Todas', ...Array.from(cats)];
  }, []);

  const filteredCareers = useMemo(() => {
    return careersList.filter((career) => {
      const matchesSearch =
        searchTerm.trim() === '' ||
        career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.vibe.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat =
        selectedCategory === 'Todas' || career.category === selectedCategory;

      const matchesFav = !onlyFavorites || favorites.includes(career.id);

      return matchesSearch && matchesCat && matchesFav;
    });
  }, [careersList, searchTerm, selectedCategory, onlyFavorites, favorites]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-black uppercase tracking-wider text-pink-600 bg-pink-50 px-3.5 py-1 rounded-full border border-pink-200">
          Explorador de Vocaciones 2026+
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">
          Encuentra tu Carrera Ideal
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Toca cualquier tarjeta para ver su rutina diaria («Un día en la vida»), salarios reales y cursos gratuitos para probarla hoy.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="glass-card rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-md mb-6 space-y-3">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por carrera o intereses (ej. diseño, salud, tecnología, arte, remoto)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-slate-50/60"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              onlyFavorites
                ? 'bg-pink-500 text-white shadow-sm'
                : 'bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-white' : 'fill-pink-500'}`} />
            <span>Mis Favoritas ({favorites.length})</span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-slate-500 mb-6 font-semibold flex items-center justify-between">
        <span>Mostrando {filteredCareers.length} carreras</span>
        {onlyFavorites && favorites.length === 0 && (
          <span className="text-pink-600">Aún no has guardado carreras en tus favoritas. Dale al corazón ❤️ para guardarlas.</span>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCareers.map((career) => {
          const isFav = favorites.includes(career.id);
          return (
            <div
              key={career.id}
              onClick={() => onSelectCareer(career)}
              className="glass-card rounded-3xl p-5 border border-slate-200/80 hover:border-pink-300 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{career.emoji}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {career.category}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(career.id);
                    }}
                    className={`p-2 rounded-full transition-colors ${
                      isFav ? 'text-pink-500' : 'text-slate-300 hover:text-pink-400'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-pink-500' : ''}`} />
                  </button>
                </div>

                {career.matchPercent && (
                  <span className="inline-block text-[11px] font-extrabold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md border border-pink-200 mb-2">
                    🎯 {career.matchPercent}% Match con tu Wrapped
                  </span>
                )}

                <h3 className="font-black text-base sm:text-lg text-slate-900 group-hover:text-pink-600 transition-colors leading-snug">
                  {career.title}
                </h3>

                <p className="text-xs text-pink-500 font-semibold mt-1">
                  ✨ {career.vibe}
                </p>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {career.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-500" />
                  Ver rutina
                </span>

                <span className="font-bold text-pink-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Ficha Completa <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
