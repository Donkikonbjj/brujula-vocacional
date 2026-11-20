'use client';

import React from 'react';
import { Sparkles, ArrowRight, BookOpen, MessageCircle, Heart, Compass } from 'lucide-react';

interface HeroProps {
  onStartTest: () => void;
  onExploreCareers: () => void;
  onOpenCoach: () => void;
}

export default function Hero({ onStartTest, onExploreCareers, onOpenCoach }: HeroProps) {
  return (
    <div className="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-16 text-center">
      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs sm:text-sm font-extrabold mb-5 shadow-sm">
          <span>✨</span>
          <span>Descubre tu Arquetipo & Tu Career Wrapped 2026</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
          Elige una carrera que{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            ames de verdad
          </span>{' '}
          y donde ganes bien
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Un espacio interactivo, visual y sin estrés para descubrir tus mayores talentos, ver cómo es un día real de trabajo y hablar con tu mentora virtual.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onStartTest}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-black text-base shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>Hacer mi Quiz (2 min)</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreCareers}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-sm sm:text-base hover:bg-slate-50 hover:border-pink-300 transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span>Explorar Carreras</span>
          </button>

          <button
            onClick={onOpenCoach}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-sm sm:text-base hover:bg-slate-50 hover:border-pink-300 transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-pink-500" />
            <span>Hablar con Sofía</span>
          </button>
        </div>

        {/* Quick Vibe Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur">
            <span className="text-2xl block mb-1.5">📱</span>
            <h4 className="font-extrabold text-xs text-slate-900">Career Wrapped</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Estilo Spotify para descubrir tu arquetipo único.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur">
            <span className="text-2xl block mb-1.5">☕</span>
            <h4 className="font-extrabold text-xs text-slate-900">Un Día en la Vida</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Rutina real hora por hora de cada profesión.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur">
            <span className="text-2xl block mb-1.5">💬</span>
            <h4 className="font-extrabold text-xs text-slate-900">Coach Cercana</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Consejos sobre papás, miedos y sueldos reales.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur">
            <span className="text-2xl block mb-1.5">🎓</span>
            <h4 className="font-extrabold text-xs text-slate-900">Probar Gratis Hoy</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Cursos libres para probar la materia antes de elegir.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
