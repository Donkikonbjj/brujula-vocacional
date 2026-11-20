'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TestVocacional from '@/components/TestVocacional';
import ResultReport from '@/components/ResultReport';
import CareerExplorer from '@/components/CareerExplorer';
import CareerModal from '@/components/CareerModal';
import AICoach from '@/components/AICoach';
import ActionPlan from '@/components/ActionPlan';
import IkigaiVisualizer from '@/components/IkigaiVisualizer';
import { AssessmentResult, Career } from '@/types';
import { Compass, Heart, Sparkles, Github } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('test');
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [coachTopic, setCoachTopic] = useState<string>('');

  const handleTestComplete = (res: AssessmentResult) => {
    setResult(res);
    setActiveTab('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetTest = () => {
    if (window.confirm('¿Deseas reiniciar el test vocacional y comenzar desde cero?')) {
      setResult(null);
      setActiveTab('test');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCareerFromReport = (career: Career) => {
    setSelectedCareer(career);
  };

  const handleAskCoachAboutCareer = (careerTitle: string) => {
    setCoachTopic(careerTitle);
    setActiveTab('coach');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-100 selection:text-brand-900">
      <div>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          result={result}
          onResetTest={handleResetTest}
        />

        <main className="pb-16">
          {activeTab === 'test' && (
            <>
              {!result && (
                <Hero
                  onStartTest={() => {
                    const el = document.getElementById('test-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onExploreCareers={() => setActiveTab('careers')}
                  onOpenCoach={() => setActiveTab('coach')}
                />
              )}

              <div id="test-section">
                {result ? (
                  <ResultReport
                    result={result}
                    onOpenCoach={() => setActiveTab('coach')}
                    onSelectCareer={handleSelectCareerFromReport}
                    onExploreMore={() => setActiveTab('careers')}
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
              <ResultReport
                result={result}
                onOpenCoach={() => setActiveTab('coach')}
                onSelectCareer={handleSelectCareerFromReport}
                onExploreMore={() => setActiveTab('careers')}
              />
              <IkigaiVisualizer />
            </div>
          )}

          {activeTab === 'careers' && (
            <CareerExplorer
              onSelectCareer={(career) => setSelectedCareer(career)}
              recommendedCode={result?.codeString}
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

      {/* Career Details Modal */}
      <CareerModal
        career={selectedCareer}
        onClose={() => setSelectedCareer(null)}
        onAskCoachAboutCareer={handleAskCoachAboutCareer}
      />

      {/* Global Footer */}
      <footer className="w-full border-t border-slate-200/80 bg-white/70 py-8 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <Compass className="w-4 h-4 text-brand-600" />
            <span>BrújulaPro • Orientación Vocacional</span>
          </div>

          <p className="text-slate-400">
            Hecho con mucho cariño para guiar e inspirar en cada paso hacia la universidad.
          </p>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
              Vercel Ready ⚡
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
              100% Gratis
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
