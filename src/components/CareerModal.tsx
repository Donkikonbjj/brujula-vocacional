'use client';

import React, { useState } from 'react';
import { Career } from '@/types';
import { X, Heart, Sparkles, TrendingUp, DollarSign, BookOpen, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface CareerModalProps {
  career: Career | null;
  onClose: () => void;
  onAskCoachAboutCareer: (careerTitle: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (careerId: string) => void;
}

export default function CareerModal({
  career,
  onClose,
  onAskCoachAboutCareer,
  isFavorite,
  onToggleFavorite
}: CareerModalProps) {
  const [activeTab, setActiveTab] = useState<'timeline' | 'skills' | 'money' | 'try'>('timeline');

  if (!career) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white relative">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{career.emoji}</span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 backdrop-blur text-pink-300">
                {career.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleFavorite(career.id)}
                className={`p-2.5 rounded-full transition-all ${
                  isFavorite
                    ? 'bg-pink-500 text-white shadow-md shadow-pink-500/30 scale-110'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
                title={isFavorite ? 'En tus favoritos' : 'Guardar en favoritas'}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black">{career.title}</h2>
          <p className="mt-1 text-xs sm:text-sm text-pink-300 font-semibold">
            ✨ {career.vibe}
          </p>

          {/* Modal Tab Navigation */}
          <div className="mt-6 flex items-center gap-1.5 border-b border-white/10 pb-1 overflow-x-auto scrollbar-none">
            {[
              { id: 'timeline', label: 'Un Día en la Vida', icon: Clock },
              { id: 'skills', label: 'Habilidades & Pros', icon: CheckCircle2 },
              { id: 'money', label: 'Sueldos & Futuro', icon: DollarSign },
              { id: 'try', label: 'Probar Gratis Hoy', icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: UN DÍA EN LA VIDA */}
          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-brand-50 border border-brand-100 text-xs text-brand-900 font-medium">
                ⏱️ <strong>Así luce una jornada típica:</strong> Ni aburrida ni estresante; conoce el ritmo de trabajo real:
              </div>

              <div className="space-y-3 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-200">
                {career.dayTimeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-3.5 pl-1">
                    <span className="w-7 h-7 rounded-full bg-white border-2 border-brand-500 shadow-sm flex items-center justify-center text-sm flex-shrink-0 z-10">
                      {item.emoji}
                    </span>
                    <div className="flex-1 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900">{item.activity}</h4>
                        <span className="text-[11px] font-mono text-brand-600 font-bold">{item.time}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: HABILIDADES & PROS */}
          {activeTab === 'skills' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                  Tus Superpoderes Clave para esta Carrera:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {career.keySkills.map((s, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 font-semibold border border-purple-200">
                      ✨ {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Lo que más amarás (Pros):
                </h4>
                <ul className="space-y-1.5">
                  {career.pros.map((p, idx) => (
                    <li key={idx} className="text-xs text-emerald-950 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Los retos a considerar:
                </h4>
                <ul className="space-y-1.5">
                  {career.challenges.map((c, idx) => (
                    <li key={idx} className="text-xs text-amber-950 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: SUELDOS & FUTURO */}
          {activeTab === 'money' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Nivel Salarial Estimado
                  </span>
                  <span className="text-base font-black text-slate-900 mt-1 block">
                    {career.salaryLevel}
                  </span>
                  <span className="text-xs text-emerald-600 font-medium mt-1 block">
                    {career.remoteFriendly ? '🌍 Con opciones remotas en USD' : '🏥 En hospitales/clínicas/estudios'}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Demanda a Futuro (2026+)
                  </span>
                  <span className="text-base font-black text-slate-900 mt-1 block">
                    {career.growthOutlook}
                  </span>
                  <span className="text-xs text-indigo-600 font-medium mt-1 block">
                    Alta prioridad global
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                  Carreras universitarias sugeridas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {career.suggestedDegrees.map((deg, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold">
                      🎓 {deg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PROBAR GRATIS HOY */}
          {activeTab === 'try' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200">
                <h4 className="text-xs font-bold text-pink-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  Prueba la materia antes de inscribirte a la carrera:
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Toma 2 o 3 horas este fin de semana en uno de estos cursos gratuitos. Si te diviertes y te entusiasma, ¡sabrás con total seguridad que es para ti!
                </p>

                <div className="space-y-2">
                  {career.freeResources.map((res, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-pink-200/80 flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">{res.title}</span>
                      <span className="px-2 py-0.5 rounded bg-pink-100 text-pink-700 font-bold text-[10px]">
                        {res.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onToggleFavorite(career.id)}
            className={`w-full sm:w-auto px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
              isFavorite
                ? 'border-pink-300 bg-pink-50 text-pink-700'
                : 'border-slate-300 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-pink-500 text-pink-500' : ''}`} />
            <span>{isFavorite ? 'En tus Favoritas' : 'Guardar en Favoritas'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onAskCoachAboutCareer(career.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Preguntarle a Sofía sobre {career.title}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
