'use client';

import React, { useState } from 'react';
import { AssessmentResult, Career } from '@/types';
import { Sparkles, ArrowRight, ArrowLeft, Heart, Share2, Printer, MessageCircle, CheckCircle2, Compass, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CareerWrappedProps {
  result: AssessmentResult;
  onOpenCoach: () => void;
  onSelectCareer: (career: Career) => void;
  onExploreMore: () => void;
  onToggleFavorite: (careerId: string) => void;
  favorites: string[];
}

export default function CareerWrapped({
  result,
  onOpenCoach,
  onSelectCareer,
  onExploreMore,
  onToggleFavorite,
  favorites
}: CareerWrappedProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const { studentName, archetype, matchedCareers, primaryTrait, secondaryTrait, tertiaryTrait, codeString } = result;
  const topCareer = matchedCareers[0];

  const triggerMiniConfetti = () => {
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (e) {}
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
      if (currentSlide === 1) triggerMiniConfetti();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Stories-style progress bars */}
      <div className="flex items-center gap-1.5 mb-6 no-print">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="flex-1 h-1.5 rounded-full cursor-pointer overflow-hidden bg-slate-200 transition-all"
          >
            <div
              className={`h-full transition-all duration-300 ${
                idx <= currentSlide
                  ? 'bg-gradient-to-r from-brand-500 to-pink-500'
                  : 'bg-transparent'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Main Slide Card Container */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 border border-slate-200/80">

        {/* SLIDE 0: TU ARQUETIPO */}
        {currentSlide === 0 && (
          <div className="p-8 sm:p-14 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white min-h-[520px] flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold text-pink-300 mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                Tu Career Wrapped 2026 Revelado
              </div>

              <span className="text-4xl sm:text-6xl block mb-3 animate-bounce">
                {archetype.emoji}
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent">
                {studentName ? `${studentName}, tu arquetipo es:` : 'Tu arquetipo vocacional es:'}
              </h1>

              <div className="mt-2 text-2xl sm:text-4xl font-extrabold text-pink-400">
                «{archetype.title}»
              </div>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                {archetype.description}
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur max-w-xl">
                <p className="text-xs sm:text-sm italic text-pink-200 font-medium">
                  {archetype.vibeQuote}
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-8 flex items-center justify-between border-t border-white/10">
              <span className="text-xs text-slate-400 font-medium">Paso 1 de 5 • Conoce tu esencia</span>
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Descubrir mis superpoderes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* SLIDE 1: TUS 3 SUPERPODERES */}
        {currentSlide === 1 && (
          <div className="p-8 sm:p-14 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white min-h-[520px] flex flex-col justify-between relative">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold text-indigo-300 mb-4">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Tus 3 Superpoderes Ocultos
              </div>

              <h2 className="text-2xl sm:text-4xl font-black">
                Lo que te hace única frente al mundo:
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 mb-6">
                Basado en tu combinación Holland ({codeString}: {primaryTrait.name} + {secondaryTrait.name}).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {archetype.superpowers.map((sp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/15 hover:border-pink-400/50 transition-all"
                  >
                    <span className="text-3xl block mb-2">{sp.emoji}</span>
                    <h4 className="font-bold text-base text-white">{sp.name}</h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
                      {sp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-8 flex items-center justify-between border-t border-white/10">
              <button
                onClick={handlePrev}
                className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Atrás
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Ver mi Carrera Soulmate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* SLIDE 2: TU CARRERA SOULMATE */}
        {currentSlide === 2 && (
          <div className="p-8 sm:p-14 bg-gradient-to-br from-purple-950 via-brand-950 to-pink-950 text-white min-h-[520px] flex flex-col justify-between relative">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-extrabold mb-4">
                💖 Match del 98% con tu personalidad
              </div>

              <span className="text-xs uppercase tracking-wider text-pink-300 font-bold block">
                Tu Carrera Soulmate es:
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">
                {topCareer.title}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-pink-300 mt-2">
                ✨ Vibe: {topCareer.vibe}
              </p>

              <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                {topCareer.summary}
              </p>

              {/* Highlights tags */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs text-white">
                  💰 {topCareer.salaryLevel}
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs text-emerald-300">
                  ⚡ Demanda {topCareer.growthOutlook}
                </span>
                {topCareer.remoteFriendly && (
                  <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs text-indigo-300">
                    🌍 100% Trabajo Remoto
                  </span>
                )}
              </div>
            </div>

            <div className="relative z-10 pt-8 flex items-center justify-between border-t border-white/10">
              <button
                onClick={handlePrev}
                className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Atrás
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectCareer(topCareer)}
                  className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs transition-colors"
                >
                  Ver un día en la vida
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>Ver más carreras compatibles</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 3: TOP CARRERAS COMPATIBLES */}
        {currentSlide === 3 && (
          <div className="p-8 sm:p-12 bg-slate-900 text-white min-h-[520px] flex flex-col justify-between relative">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-indigo-300 mb-3">
                🎯 Tu Top 4 de Carreras Finalistas
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-2">
                Opciones donde brillarás con fuerza:
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Toca cualquier carrera para explorar su rutina diaria o dale al corazón para guardarla en tus favoritas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {matchedCareers.slice(0, 4).map((c) => {
                  const isFav = favorites.includes(c.id);
                  return (
                    <div
                      key={c.id}
                      onClick={() => onSelectCareer(c)}
                      className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-400 transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{c.emoji}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm text-white group-hover:text-pink-300 transition-colors">
                              {c.title}
                            </h4>
                          </div>
                          <span className="text-[11px] text-pink-400 font-semibold block">
                            {c.matchPercent}% Compatibilidad
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(c.id);
                        }}
                        className={`p-2 rounded-full transition-colors ${
                          isFav ? 'text-pink-500' : 'text-slate-500 hover:text-pink-400'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-pink-500' : ''}`} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 pt-6 flex items-center justify-between border-t border-white/10">
              <button
                onClick={handlePrev}
                className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Atrás
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-500 to-pink-500 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Ver Tarjeta Resumen Final</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* SLIDE 4: RESUMEN FINAL / COMPARTIR / ACCIONES */}
        {currentSlide === 4 && (
          <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white min-h-[520px] flex flex-col justify-between relative">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <span className="text-5xl block mb-2">{archetype.emoji}</span>
              <h2 className="text-2xl sm:text-4xl font-black">
                {studentName ? `${studentName}` : 'Tu Vocación'}: «{archetype.title}»
              </h2>
              <p className="text-xs sm:text-sm text-pink-300 font-semibold mt-1">
                Código RIASEC: {codeString} ({primaryTrait.name} • {secondaryTrait.name} • {tertiaryTrait.name})
              </p>

              {/* Mini Summary Card for Parents */}
              <div className="my-6 p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-left text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Carrera Soulmate:</span>
                  <span className="font-bold text-white">{topCareer.title} (98% Match)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Mayor Fortaleza:</span>
                  <span className="font-bold text-pink-300">{primaryTrait.name} ({primaryTrait.badge})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Ambiente Óptimo:</span>
                  <span className="font-bold text-emerald-300">Entornos flexibles, creativos y de impacto</span>
                </div>
              </div>

              {/* Action Buttons Trio */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4 text-slate-300" />
                  <span>Guardar PDF para mis papás</span>
                </button>

                <button
                  onClick={onOpenCoach}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Platicar con Sofía (Coach)</span>
                </button>

                <button
                  onClick={onExploreMore}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explorar todas las carreras</span>
                </button>
              </div>
            </div>

            <div className="relative z-10 pt-6 flex items-center justify-between border-t border-white/10 text-xs text-slate-400">
              <button onClick={() => setCurrentSlide(0)} className="hover:text-white">
                ↺ Repetir Wrapped
              </button>
              <span>✨ Generado el {result.completedAt}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
