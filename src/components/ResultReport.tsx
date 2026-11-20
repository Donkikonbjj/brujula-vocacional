'use client';

import React from 'react';
import { AssessmentResult, Career } from '@/types';
import { RIASEC_TRAITS } from '@/lib/riasec';
import { Sparkles, Printer, MessageCircle, ArrowRight, Award, Compass, Heart, CheckCircle2, BookOpen } from 'lucide-react';

interface ResultReportProps {
  result: AssessmentResult;
  onOpenCoach: () => void;
  onSelectCareer: (career: Career) => void;
  onExploreMore: () => void;
}

export default function ResultReport({
  result,
  onOpenCoach,
  onSelectCareer,
  onExploreMore
}: ResultReportProps) {
  const { studentName, codeString, primaryTrait, secondaryTrait, tertiaryTrait, scores, matchedCareers, completedAt } = result;

  const handlePrint = () => {
    window.print();
  };

  // Find max score for relative percentage bars
  const maxScore = Math.max(...Object.values(scores), 1);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      {/* Action Bar (Top) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 no-print">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Informe Oficial de Orientación
          </span>
          <p className="text-xs text-slate-400 mt-1">Evaluado el {completedAt}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Guardar / Imprimir PDF</span>
          </button>

          <button
            onClick={onOpenCoach}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-sm font-bold shadow-md shadow-brand-500/20 hover:shadow-brand-500/35 hover:scale-[1.02] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar con Sofía (Coach)</span>
          </button>
        </div>
      </div>

      {/* Main Header Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-brand-200/40 via-purple-100/30 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Test Vocacional Completado Exitosamente
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {studentName ? `${studentName}, este` : 'Este'} es tu mapa de vocación y fortalezas únicas
          </h1>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Tu patrón de respuestas revela una combinación muy especial. Tu Código Holland principal es:
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-700 to-indigo-700 text-white shadow-lg shadow-brand-600/30 flex items-center gap-3">
              <Compass className="w-6 h-6 animate-pulse" />
              <div>
                <span className="text-xs uppercase tracking-wider text-brand-200 font-semibold block">Código RIASEC</span>
                <span className="text-2xl sm:text-3xl font-black tracking-widest">{codeString}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 font-bold text-xs sm:text-sm text-slate-800 shadow-sm flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                1° {primaryTrait.name} ({primaryTrait.badge})
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 font-bold text-xs sm:text-sm text-slate-800 shadow-sm flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                2° {secondaryTrait.name} ({secondaryTrait.badge})
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 font-bold text-xs sm:text-sm text-slate-800 shadow-sm flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                3° {tertiaryTrait.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trait Cards Trio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Primary Trait */}
        <div className="glass-card rounded-3xl p-6 border-2 border-brand-200 bg-gradient-to-b from-brand-50/40 to-white shadow-md relative">
          <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-brand-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
            Tu Mayor Fortaleza
          </span>
          <div className="mt-2">
            <h3 className="text-xl font-black text-slate-900">{primaryTrait.name} ({primaryTrait.code})</h3>
            <p className="text-xs font-bold text-brand-600 mt-0.5">{primaryTrait.badge}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {primaryTrait.description}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Tus Superpoderes:</h4>
            <ul className="space-y-1.5">
              {primaryTrait.strengths.map((s, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary Trait */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200 bg-white shadow-sm">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
            Segunda Fuerza
          </span>
          <div className="mt-2">
            <h3 className="text-xl font-black text-slate-900">{secondaryTrait.name} ({secondaryTrait.code})</h3>
            <p className="text-xs font-bold text-indigo-600 mt-0.5">{secondaryTrait.badge}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {secondaryTrait.description}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Habilidades Clave:</h4>
            <ul className="space-y-1.5">
              {secondaryTrait.strengths.map((s, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ambientes Ideales */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200 bg-white shadow-sm">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Tu Entorno Óptimo
          </span>
          <div className="mt-2">
            <h3 className="text-xl font-black text-slate-900">Dónde Florecerás</h3>
            <p className="text-xs font-bold text-emerald-600 mt-0.5">Espacios de Trabajo Ideales</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              Trabajarás con mayor alegría y motivación en ambientes que respeten tu ritmo natural:
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <ul className="space-y-2">
              {primaryTrait.workEnvironments.map((env, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span>{env}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scores Breakdown Bar Chart */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md mb-12">
        <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
          <Award className="w-5 h-5 text-brand-600" />
          Desglose Completo de tu Perfil RIASEC
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          Puntaje acumulado en cada una de las 6 dimensiones vocacionales del modelo de John Holland.
        </p>

        <div className="space-y-3.5">
          {Object.entries(RIASEC_TRAITS).map(([code, trait]) => {
            const score = scores[code as keyof typeof scores] || 0;
            const pct = Math.round((score / maxScore) * 100);
            const isTop = result.topCodes.includes(code as any);

            return (
              <div key={code} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-2 text-slate-700">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-white text-[10px] ${
                      isTop ? 'bg-brand-600' : 'bg-slate-400'
                    }`}>
                      {code}
                    </span>
                    <span className={isTop ? 'font-bold text-slate-900' : 'text-slate-600'}>
                      {trait.name} ({trait.badge})
                    </span>
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">{score} pts</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isTop
                        ? 'bg-gradient-to-r from-brand-500 to-indigo-600'
                        : 'bg-slate-300'
                    }`}
                    style={{ width: `${Math.max(4, pct)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Matched Careers Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-brand-600" />
              Carreras con Mayor Afinidad Contigo
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Seleccionadas automáticamente por coincidir con tus códigos predominantes ({codeString}).
            </p>
          </div>
          <button
            onClick={onExploreMore}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 no-print"
          >
            <span>Ver todas las carreras</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {matchedCareers.slice(0, 6).map((career) => (
            <div
              key={career.id}
              onClick={() => onSelectCareer(career)}
              className="glass-card rounded-2xl p-5 border border-slate-200/80 hover:border-brand-400 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {career.category}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Demanda: {career.growthOutlook}
                  </span>
                </div>

                <h4 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-brand-600 transition-colors">
                  {career.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {career.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {career.matchHolland.map((c) => (
                    <span
                      key={c}
                      className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                        result.topCodes.includes(c)
                          ? 'bg-brand-100 text-brand-700'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-brand-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Ver ficha completa <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden no-print">
          <button
            onClick={onExploreMore}
            className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50"
          >
            Explorar todas las carreras del catálogo
          </button>
        </div>
      </div>

      {/* Coach Sofía Callout Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-900 via-brand-900 to-indigo-900 text-white shadow-xl relative overflow-hidden no-print">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-200 bg-white/10 px-3 py-1 rounded-full backdrop-blur">
              Coach Vocacional Inteligente
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-2">
              ¿Dudas sobre cómo elegir o cómo hablar con tu familia?
            </h3>
            <p className="text-sm text-brand-100 mt-2 leading-relaxed">
              Sofía conoce tus resultados ({codeString}) y está lista para responder tus preguntas más difíciles: balance entre pasión y dinero, miedos a equivocarte y pasos concretos.
            </p>
          </div>

          <button
            onClick={onOpenCoach}
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-white text-brand-900 font-extrabold text-sm hover:bg-brand-50 shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-brand-600" />
            <span>Hablar con Sofía Ahora</span>
          </button>
        </div>
      </div>
    </div>
  );
}
