'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Sparkles, BookOpen, Calendar, HelpCircle, Trophy, ArrowRight } from 'lucide-react';
import { AssessmentResult } from '@/types';

interface ActionPlanProps {
  result: AssessmentResult | null;
  onGoToTest: () => void;
  onExploreCareers: () => void;
}

interface StepItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  tip: string;
  resourceText?: string;
}

const INITIAL_STEPS: StepItem[] = [
  {
    id: 's1',
    phase: 'Fase 1: Autodescubrimiento',
    title: 'Completar el Test Vocacional Holland y analizar tu código',
    description: 'Descubre tus 3 rasgos dominantes (RIASEC) y comprueba qué actividades te energizan de forma natural.',
    tip: 'No intentes responder lo que "deberías" responder, sino lo que de verdad disfrutas hacer un sábado por la tarde.'
  },
  {
    id: 's2',
    phase: 'Fase 1: Autodescubrimiento',
    title: 'Definir tus 3 valores no negociables',
    description: '¿Qué es lo más importante para ti? (Ejemplo: libertad de tiempo, trabajo remoto, impacto social, estabilidad económica o creatividad).',
    tip: 'Tus valores guían tus decisiones mejor que cualquier moda pasajera.'
  },
  {
    id: 's3',
    phase: 'Fase 2: Exploración & Validación',
    title: 'Elegir 3 carreras finalistas del catálogo',
    description: 'Selecciona 3 opciones que hayan llamado tu atención para investigar a fondo durante las próximas dos semanas.',
    tip: 'Guarda o imprime sus fichas técnicas para revisarlas con calma.'
  },
  {
    id: 's4',
    phase: 'Fase 2: Exploración & Validación',
    title: 'Hacer una "Entrevista de Café" con 2 profesionales en activo',
    description: 'Busca a dos personas que trabajen en esas áreas (amigos de la familia, LinkedIn o exalumnos) y hazles 3 preguntas clave.',
    tip: 'Pregúntales: "¿Qué es lo que más te apasiona y qué es lo más difícil o frustrante de tu semana típica?"'
  },
  {
    id: 's5',
    phase: 'Fase 3: Prueba Práctica Gratuita',
    title: 'Tomar un minicurso introductorio gratuito de 2 a 5 horas',
    description: 'Antes de matricularte en 5 años de carrera, prueba la materia real en Coursera, edX o YouTube.',
    tip: 'Si disfrutas las primeras 3 horas de práctica básica, es una señal magnífica de afinidad real.'
  },
  {
    id: 's6',
    phase: 'Fase 4: Comparativa de Universidades & Becas',
    title: 'Descargar los planes de estudio (pénsums) de 2 a 3 universidades',
    description: 'Compara semestre a semestre qué materias llevarás. ¿La carrera está actualizada con herramientas modernas?',
    tip: 'Verifica los programas de intercambio al extranjero y las opciones de becas por promedio o talento.'
  },
  {
    id: 's7',
    phase: 'Fase 4: Conversación en Familia',
    title: 'Tener una charla fundamentada con tus padres',
    description: 'Presenta tu informe de resultados, el campo laboral de tu carrera preferida y tu entusiasmo con madurez.',
    tip: 'Usa las recomendaciones de Sofía para que vean que es una decisión meditada y con visión de futuro.'
  },
  {
    id: 's8',
    phase: 'Fase 5: Postulación & Fechas Límite',
    title: 'Crear un calendario con fechas de admisión y exámenes',
    description: 'Anota en tu celular o libreta las fechas clave de convocatorias, registro de aspirantes y entrega de documentos.',
    tip: 'Comienza a repasar las guías de estudio al menos 2 meses antes del examen.'
  }
];

export default function ActionPlan({ result, onGoToTest, onExploreCareers }: ActionPlanProps) {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    if (result) {
      initial['s1'] = true;
    }
    return initial;
  });

  useEffect(() => {
    if (result) {
      setCompletedSteps((prev) => ({ ...prev, s1: true }));
    }
  }, [result]);

  const toggleStep = (id: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalCount = INITIAL_STEPS.length;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Tu Hoja de Ruta Práctica
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          Plan de Acción Paso a Paso
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Elegir carrera no se hace en un solo día: es un proceso claro y estructurado para pasar de la duda a la certeza sin estrés.
        </p>
      </div>

      {/* Progress Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div>
            <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Tu Progreso de Preparación
            </h3>
            <p className="text-xs text-slate-500">
              {completedCount} de {totalCount} pasos completados
            </p>
          </div>
          <span className="text-2xl font-black text-brand-600">{progressPercent}%</span>
        </div>

        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {progressPercent === 100 && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            ¡Felicidades! Has completado todas las etapas para tomar una decisión vocacional brillante.
          </div>
        )}
      </div>

      {/* Checklist items */}
      <div className="space-y-4">
        {INITIAL_STEPS.map((step, idx) => {
          const isDone = !!completedSteps[step.id];

          return (
            <div
              key={step.id}
              onClick={() => toggleStep(step.id)}
              className={`glass-card rounded-2xl p-5 border transition-all cursor-pointer flex items-start gap-4 ${
                isDone
                  ? 'border-emerald-300 bg-emerald-50/30'
                  : 'border-slate-200 hover:border-brand-300 hover:shadow-md'
              }`}
            >
              <button
                type="button"
                className={`mt-1 flex-shrink-0 transition-colors ${
                  isDone ? 'text-emerald-600' : 'text-slate-300 hover:text-slate-400'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-6 h-6 fill-emerald-100" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>

              <div className="flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {step.phase}
                </span>

                <h4
                  className={`text-base font-bold transition-all ${
                    isDone ? 'text-slate-500 line-through' : 'text-slate-900'
                  }`}
                >
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
                  <span className="text-amber-500 font-bold">💡 Consejo:</span>
                  <span>{step.tip}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
