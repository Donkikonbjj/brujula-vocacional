'use client';

import React from 'react';
import { Heart, Sparkles, Compass, DollarSign, Globe, Award } from 'lucide-react';

export default function IkigaiVisualizer() {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md my-10 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
          Filosofía de Vida
        </span>
        <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-2">
          La Brújula del Ikigai
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          En Japón, <em>Ikigai</em> significa «la razón de levantarse cada mañana». Una carrera exitosa no se elige solo por dinero ni solo por gusto pasajero, sino en el centro de cuatro fuerzas:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 1. Pasión */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-pink-600 uppercase tracking-wider block">Círculo 1</span>
              <h4 className="font-bold text-base text-slate-900">Lo que amas hacer</h4>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Las actividades donde pierdes la noción del tiempo. Temas que investigas por gusto propio y que despiertan tu curiosidad sin que nadie te obligue.
          </p>
        </div>

        {/* 2. Profesión */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">Círculo 2</span>
              <h4 className="font-bold text-base text-slate-900">En lo que eres buena</h4>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Tus talentos naturales y habilidades que se te facilitan más que al promedio. Aquello por lo que tus amigos y maestros te felicitan o piden tu ayuda.
          </p>
        </div>

        {/* 3. Misión */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Círculo 3</span>
              <h4 className="font-bold text-base text-slate-900">Lo que el mundo necesita</h4>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Problemas reales que te duele ver en la sociedad: salud mental, crisis climática, educación infantil, desorden tecnológico o desigualdad.
          </p>
        </div>

        {/* 4. Vocación / Retribución */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Círculo 4</span>
              <h4 className="font-bold text-base text-slate-900">Por lo que te pueden pagar</h4>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Servicios y conocimientos que tienen alta demanda en el mercado actual y que te garantizarán independencia económica y tranquilidad.
          </p>
        </div>
      </div>

      {/* Central Banner */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-center shadow-md">
        <p className="text-xs sm:text-sm font-semibold">
          ✨ <strong>Tu Punto Dulce:</strong> Cuando una carrera reúne estos 4 círculos, encuentras tu verdadero Ikigai: plenitud, sentido de vida y seguridad financiera.
        </p>
      </div>
    </div>
  );
}
