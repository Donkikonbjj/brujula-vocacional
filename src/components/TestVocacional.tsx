'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowLeft, ArrowRight, Sparkles, Check, HelpCircle, User } from 'lucide-react';
import { VOCATIONAL_QUESTIONS } from '@/data/questions';
import { CAREERS_DATABASE } from '@/data/careers';
import { calculateHollandResult } from '@/lib/riasec';
import { AssessmentResult } from '@/types';

interface TestVocacionalProps {
  onComplete: (result: AssessmentResult) => void;
}

export default function TestVocacional({ onComplete }: TestVocacionalProps) {
  const [studentName, setStudentName] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const totalQuestions = VOCATIONAL_QUESTIONS.length;
  const currentQuestion = VOCATIONAL_QUESTIONS[currentIndex];
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishTest();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const finishTest = () => {
    // Trigger confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }

    const { scores, topCodes, codeString, primaryTrait, secondaryTrait, tertiaryTrait } =
      calculateHollandResult(answers, VOCATIONAL_QUESTIONS);

    // Match careers that share at least one of top 2 codes
    const matchedCareers = CAREERS_DATABASE.filter((career) => {
      return career.matchHolland.some((c) => topCodes.slice(0, 2).includes(c));
    }).sort((a, b) => {
      // prioritize careers matching top code
      const aHasTop = a.matchHolland.includes(topCodes[0]) ? 1 : 0;
      const bHasTop = b.matchHolland.includes(topCodes[0]) ? 1 : 0;
      return bHasTop - aHasTop;
    });

    const result: AssessmentResult = {
      scores,
      topCodes,
      codeString,
      primaryTrait,
      secondaryTrait,
      tertiaryTrait,
      matchedCareers,
      completedAt: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      studentName: studentName.trim() || undefined
    };

    onComplete(result);
  };

  if (!hasStarted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex items-center justify-center mx-auto mb-6 shadow-md shadow-brand-500/30">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ¡Bienvenida a tu viaje vocacional!
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Este test está diseñado especialmente para descubrir tus motivaciones más auténticas a través de 12 situaciones cotidianas y dilemas de vida.
          </p>

          <div className="mt-6 text-left">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              ¿Cuál es tu nombre? (Opcional)
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Ejemplo: Valentina, Sofía, Camila..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-800 placeholder-slate-400 text-sm"
              />
            </div>
            <p className="text-xs text-slate-400 mt-1.5">
              Personalizaremos tu informe y la conversación con tu coach Sofía.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={() => setHasStarted(true)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold text-base shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              <span>Comenzar Preguntas</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-slate-500">
              ⏱️ Toma aproximadamente 3 minutos • No hay respuestas correctas ni incorrectas.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const selectedAnswerIndex = answers[currentQuestion.id];
  const isAnswered = selectedAnswerIndex !== undefined;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
      {/* Progress Bar & Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600 mb-2">
          <span className="flex items-center gap-1.5 text-brand-700 font-bold">
            <Sparkles className="w-4 h-4 text-brand-600" />
            Pregunta {currentIndex + 1} de {totalQuestions}
          </span>
          <span className="text-slate-400">{progressPercent}% completado</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${Math.max(5, progressPercent)}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg">
        {/* Category Pill */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700 border border-brand-200/60 mb-3">
          {currentQuestion.category}
        </span>

        {/* Scenario description */}
        <p className="text-sm sm:text-base text-slate-500 font-medium italic mb-2">
          {currentQuestion.scenario}
        </p>

        {/* Main Question */}
        <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-snug mb-6">
          {currentQuestion.question}
        </h3>

        {/* Options List */}
        <div className="space-y-3">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = selectedAnswerIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all flex items-start gap-3.5 group ${
                  isSelected
                    ? 'border-brand-600 bg-brand-50/70 shadow-sm ring-2 ring-brand-500/20'
                    : 'border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50/80'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 border text-xs font-bold transition-colors ${
                    isSelected
                      ? 'border-brand-600 bg-brand-600 text-white'
                      : 'border-slate-300 text-slate-400 group-hover:border-brand-400'
                  }`}
                >
                  {isSelected ? <Check className="w-3.5 h-3.5" /> : String.fromCharCode(65 + idx)}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isSelected ? 'font-semibold text-brand-950' : 'text-slate-700'
                    }`}
                  >
                    {opt.text}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-md transition-all ${
              isAnswered
                ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02]'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <span>{currentIndex === totalQuestions - 1 ? 'Ver Mi Perfil Vocacional ✨' : 'Siguiente'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
