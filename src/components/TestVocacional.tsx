'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowLeft, ArrowRight, Sparkles, Check, Heart, User } from 'lucide-react';
import { VOCATIONAL_QUESTIONS } from '@/data/questions';
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
    try {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    const result = calculateHollandResult(answers, VOCATIONAL_QUESTIONS, studentName);
    onComplete(result);
  };

  if (!hasStarted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-8 sm:py-12">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-5xl block mb-4 animate-bounce">✨🧭</span>

            <span className="inline-block px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-xs font-bold uppercase tracking-wider mb-3">
              Quiz Interactivo 2026
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Descubre tu Carrera Ideal sin Estrés
            </h2>

            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Cero preguntas aburridas de escuela. 10 dilemas rápidos para descubrir tu arquetipo y las carreras con mejor futuro para ti.
            </p>

            <div className="mt-6 text-left">
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                ¿Cómo te llamas? (Para personalizar tu Wrapped)
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Tu nombre (ej. Valentina, Camila, Sofi...)"
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-800 text-sm sm:text-base shadow-sm"
                />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => setHasStarted(true)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-black text-base sm:text-lg shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Comenzar Quiz (2 min)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-slate-400 font-medium">
                ⚡ Rápido, visual y 100% gratuito.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const selectedAnswerIndex = answers[currentQuestion.id];
  const isAnswered = selectedAnswerIndex !== undefined;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10">
      {/* Question Tracker Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 mb-2">
          <span className="flex items-center gap-1.5 text-pink-600 font-extrabold">
            <span>{currentQuestion.emoji}</span>
            Pregunta {currentIndex + 1} de {totalQuestions}
          </span>
          <span className="text-slate-400">{progressPercent}% completado</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${Math.max(10, progressPercent)}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-pink-50 text-pink-700 border border-pink-200/60 mb-2">
          {currentQuestion.category}
        </span>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-1">
          {currentQuestion.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-500 font-medium italic mb-6">
          {currentQuestion.subtitle}
        </p>

        {/* Options Cards */}
        <div className="space-y-3">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = selectedAnswerIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 group ${
                  isSelected
                    ? 'border-pink-500 bg-pink-50/80 shadow-md ring-2 ring-pink-500/20 scale-[1.01]'
                    : 'border-slate-200 bg-white hover:border-pink-300 hover:bg-slate-50/70 hover:scale-[1.005]'
                }`}
              >
                <span className="text-2xl flex-shrink-0">{opt.emoji}</span>

                <div className="flex-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-pink-200 text-pink-800' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {opt.tag}
                  </span>
                  <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                    isSelected ? 'font-bold text-slate-900' : 'text-slate-700 font-medium'
                  }`}>
                    {opt.text}
                  </p>
                </div>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                  isSelected ? 'border-pink-500 bg-pink-500 text-white' : 'border-slate-300'
                }`}>
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed text-slate-400'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Atrás</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-black shadow-md transition-all ${
              isAnswered
                ? 'bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <span>{currentIndex === totalQuestions - 1 ? '✨ Revelar Mi Career Wrapped' : 'Siguiente'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
