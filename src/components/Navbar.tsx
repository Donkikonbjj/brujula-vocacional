'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, BookOpen, MessageCircle, CheckCircle2, RotateCcw, Menu, X, Heart } from 'lucide-react';
import { AssessmentResult } from '@/types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  result: AssessmentResult | null;
  onResetTest: () => void;
  favoritesCount: number;
}

export default function Navbar({ activeTab, setActiveTab, result, onResetTest, favoritesCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'test', label: 'Quiz Vocacional', icon: Sparkles },
    ...(result ? [{ id: 'result', label: 'Tu Wrapped ✨', icon: CheckCircle2 }] : []),
    { id: 'careers', label: 'Explorador de Carreras', icon: BookOpen },
    { id: 'coach', label: 'Coach Sofía (IA)', icon: MessageCircle },
    { id: 'action-plan', label: 'Plan de Acción', icon: Compass },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 transition-all duration-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => setActiveTab(result ? 'result' : 'test')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-pink-500/25 group-hover:scale-105 transition-transform text-lg">
              ✨
            </div>
            <div>
              <span className="font-black text-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                BrújulaPro
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 uppercase tracking-wider">
                Coach 2026
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-pink-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Badge / Favorites & Reset */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick('careers')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-bold border border-pink-200 transition-colors"
              title="Ver mis carreras favoritas"
            >
              <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
              <span>{favoritesCount}</span>
            </button>

            {result && (
              <button
                onClick={onResetTest}
                title="Repetir quiz"
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-bold ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4 text-pink-400" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
