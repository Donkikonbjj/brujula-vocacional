'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, BookOpen, MessageCircle, CheckCircle2, RotateCcw, Menu, X } from 'lucide-react';
import { AssessmentResult } from '@/types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  result: AssessmentResult | null;
  onResetTest: () => void;
}

export default function Navbar({ activeTab, setActiveTab, result, onResetTest }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'test', label: 'Test Vocacional', icon: Sparkles },
    ...(result ? [{ id: 'result', label: 'Tu Perfil', icon: CheckCircle2 }] : []),
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="font-extrabold text-xl bg-gradient-to-r from-brand-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                BrújulaPro
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                Tu Guía de Carrera
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-sm shadow-brand-600/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Badge / Reset */}
          <div className="hidden sm:flex items-center gap-3">
            {result ? (
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Código: {result.codeString}
                </span>
                <button
                  onClick={onResetTest}
                  title="Reiniciar y repetir test"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                ✨ 100% Gratuito
              </span>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {result && (
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                {result.codeString}
              </span>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
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
                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-base font-medium ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
          {result && (
            <button
              onClick={() => {
                onResetTest();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-base font-medium text-rose-600 hover:bg-rose-50"
            >
              <RotateCcw className="w-5 h-5" />
              Reiniciar Test Vocacional
            </button>
          )}
        </div>
      )}
    </header>
  );
}
