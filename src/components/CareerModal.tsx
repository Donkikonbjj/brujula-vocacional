'use client';

import React from 'react';
import { Career } from '@/types';
import { X, CheckCircle2, AlertCircle, BookOpen, ExternalLink, Sparkles, TrendingUp, DollarSign, Heart, Compass } from 'lucide-react';

interface CareerModalProps {
  career: Career | null;
  onClose: () => void;
  onAskCoachAboutCareer: (careerTitle: string) => void;
}

export default function CareerModal({ career, onClose, onAskCoachAboutCareer }: CareerModalProps) {
  if (!career) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl glass-card bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur">
              {career.category}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-400/20 text-emerald-100 border border-emerald-300/30">
              Demanda {career.growthOutlook}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black">{career.title}</h2>
          <p className="mt-2 text-brand-100 text-sm sm:text-base leading-relaxed max-w-2xl">
            {career.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {career.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-0.5 rounded-md bg-white/10 text-white/90">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Nivel Salarial</span>
                <span className="text-sm font-bold text-slate-800">{career.salaryLevel}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Proyección Futura</span>
                <span className="text-sm font-bold text-slate-800">Crecimiento {career.growthOutlook}</span>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Visión General</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {career.fullDescription}
            </p>
          </div>

          {/* Daily Routine Tasks */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-600" />
              ¿Cómo es un día típico en esta profesión?
            </h3>
            <ul className="space-y-2">
              {career.dailyTasks.map((task, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 p-2 rounded-lg bg-slate-50">
                  <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pros vs Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Lo que más te encantará (Pros):
              </h4>
              <ul className="space-y-2">
                {career.pros.map((p, idx) => (
                  <li key={idx} className="text-xs text-emerald-950 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2.5 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Los retos a tomar en cuenta:
              </h4>
              <ul className="space-y-2">
                {career.challenges.map((c, idx) => (
                  <li key={idx} className="text-xs text-amber-950 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Skills & Degrees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Habilidades Clave</h4>
              <div className="flex flex-wrap gap-1.5">
                {career.keySkills.map((skill, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-medium border border-indigo-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Carreras Universitarias Típicas</h4>
              <ul className="space-y-1">
                {career.suggestedDegrees.map((deg, idx) => (
                  <li key={idx} className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>{deg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Free learning resources */}
          {career.freeResources && career.freeResources.length > 0 && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-50 to-indigo-50 border border-brand-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-800 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-600" />
                Empieza a explorar gratis hoy mismo:
              </h4>
              <div className="space-y-1.5">
                {career.freeResources.map((res, idx) => (
                  <div key={idx} className="text-xs text-slate-800 flex items-center justify-between">
                    <span className="font-semibold">{res.title}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-white border border-brand-200 text-brand-700 font-bold">
                      {res.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-colors"
          >
            Cerrar Ficha
          </button>

          <button
            onClick={() => {
              onClose();
              onAskCoachAboutCareer(career.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Consultar sobre {career.title} con Sofía</span>
          </button>
        </div>
      </div>
    </div>
  );
}
