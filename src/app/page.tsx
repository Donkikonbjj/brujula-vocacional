'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TestVocacional from '@/components/TestVocacional';
import CareerWrapped from '@/components/CareerWrapped';
import CareerExplorer from '@/components/CareerExplorer';
import CareerModal from '@/components/CareerModal';
import AICoach from '@/components/AICoach';
import ActionPlan from '@/components/ActionPlan';
import IkigaiVisualizer from '@/components/IkigaiVisualizer';
import { AssessmentResult, Career } from '@/types';
import { Sparkles, Heart } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('test');
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [coachTopic, setCoachTopic] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>(['ux-ui-design']);

  const handleTestComplete = (res: AssessmentResult) => {
    setResult(res);
    setActiveTab('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetTest = () => {
    if (window.confirm('¿Quieres repetir tu quiz y generar un nuevo Wrapped?')) {
      setResult(null);
      setActiveTab('test');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleFavorite = (careerId: string) => {
    setFavorites((prev) =>
      prev.includes(careerId)
        ? prev.filter((id) => id !== careerId)
        : [...prev, careerId]
    );
  };

  const handleAskCoachAboutCareer = (careerTitle: string) => {
    setCoachTopic(careerTitle);
    setActiveTab('coach');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-pink-100 selection:text-pink-900 bg-slate-50">
      <div>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          result={result}
          onResetTest={handleResetTest}
          favoritesCount={favorites.length}
        />

        <main className="pb-16">
          {activeTab === 'test' && (
            <>
              {!result && (
                <Hero
                  onStartTest={() => {
                    const el = document.getElementById('quiz-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onExploreCareers={() => setActiveTab('careers')}
                  onOpenCoach={() => setActiveTab('coach')}
                />
              )}

              <div id="quiz-section">
                {result ? (
                  <CareerWrapped
                    result={result}
                    onOpenCoach={() => setActiveTab('coach')}
                    onSelectCareer={(career) => setSelectedCareer(career)}
                    onExploreMore={() => setActiveTab('careers')}
                    onToggleFavorite={handleToggleFavorite}
                    favorites={favorites}
                  />
                ) : (
                  <>
                    <TestVocacional onComplete={handleTestComplete} />
                    <IkigaiVisualizer />
                  </>
                )}
              </div>
            </>
          )}

          {activeTab === 'result' && result && (
            <div>
              <CareerWrapped
                result={result}
                onOpenCoach={() => setActiveTab('coach')}
                onSelectCareer={(career) => setSelectedCareer(career)}
                onExploreMore={() => setActiveTab('careers')}
                onToggleFavorite={handleToggleFavorite}
                favorites={favorites}
              />
              <IkigaiVisualizer />
            </div>
          )}

          {activeTab === 'careers' && (
            <CareerExplorer
              onSelectCareer={(career) => setSelectedCareer(career)}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              matchedCareers={result?.matchedCareers}
            />
          )}

          {activeTab === 'coach' && (
            <AICoach
              result={result}
              initialQuestion={coachTopic}
            />
          )}

          {activeTab === 'action-plan' && (
            <ActionPlan
              result={result}
              onGoToTest={() => setActiveTab('test')}
              onExploreCareers={() => setActiveTab('careers')}
            />
          )}
        </main>
      </div>

      {/* Career Details Modal with 'Un Día en la Vida' */}
      <CareerModal
        career={selectedCareer}
        onClose={() => setSelectedCareer(null)}
        onAskCoachAboutCareer={handleAskCoachAboutCareer}
        isFavorite={selectedCareer ? favorites.includes(selectedCareer.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Aesthetic Footer */}
      <footer className="w-full border-t border-slate-200/80 bg-white/70 py-6 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-black text-slate-700">
            <span>✨</span>
            <span>BrújulaPro • Orientación Vocacional 2026</span>
          </div>

          <p className="text-slate-400">
            Hecho con mucho cariño para inspirar con calidez el camino universitario.
          </p>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 font-bold border border-pink-200">
              Gen-Z Edition 🚀
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
              100% Gratis
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
