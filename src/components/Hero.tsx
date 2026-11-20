'use client';

import React from 'react';
import { Sparkles, ArrowRight, BookOpen, MessageCircle, Heart, Star, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartTest: () => void;
  onExploreCareers: () => void;
  onOpenCoach: () => void;
}

export default function Hero({ onStartTest, onExploreCareers, onOpenCoach }: HeroProps) {
  return (
    <div className="relative overflow-hidden pt-8 pb-14 md:pt-16 md:pb-20">
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-brand-600 animate-spin" style={{ animationDuration: '6s' }} />
          Orientación Vocacional, Metodología Ikigai y Holland RIASEC
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Descubre tu vocación y diseña el{' '}
          <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
            futuro profesional
          </span>{' '}
          que te apasiona
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Un espacio cálido, inteligente y empático diseñado para acompañarte a explorar tus talentos, aclarar tus dudas y encontrar las carreras que realmente hacen clic contigo.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onStartTest}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold text-base sm:text-lg shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>Hacer mi Test Vocacional</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenCoach}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-brand-500" />
            <span>Hablar con Sofía (Coach)</span>
          </button>

          <button
            onClick={onExploreCareers}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200 transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5 text-indigo-500" />
            <span>Ver Carreras</span>
          </button>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/80 shadow-sm backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Test de Holland</h4>
            <p className="text-xs text-slate-500 mt-1">Conoce tu código vocacional RIASEC en 3 minutos.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/80 shadow-sm backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mb-2">
              <Heart className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Enfoque Ikigai</h4>
            <p className="text-xs text-slate-500 mt-1">Lo que amas + tu talento + buena remuneración.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/80 shadow-sm backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
              <MessageCircle className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Coach Vocacional</h4>
            <p className="text-xs text-slate-500 mt-1">Resuelve dudas sobre presión familiar, miedos y opciones.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/70 border border-slate-200/80 shadow-sm backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Plan de Acción</h4>
            <p className="text-xs text-slate-500 mt-1">Checklist claro para elegir universidad y prepararte.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
