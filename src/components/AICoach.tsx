'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AssessmentResult, ChatMessage } from '@/types';
import { MessageCircle, Send, Sparkles, User, RefreshCw, Compass, Heart, Shield, HelpCircle } from 'lucide-react';

interface AICoachProps {
  result: AssessmentResult | null;
  initialQuestion?: string;
}

export default function AICoach({ result, initialQuestion }: AICoachProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const defaultGreeting = result?.studentName
      ? `¡Hola, ${result.studentName}! Soy Sofía, tu coach y mentora vocacional. Ya tengo aquí tu perfil Holland (${result.codeString}: ${result.primaryTrait.name}). ¿En qué puedo orientarte hoy? Puedes preguntarme sobre carreras específicas, cómo hablar con tu familia, o cómo balancear tus gustos con el mercado laboral.`
      : `¡Hola! Soy Sofía, tu coach y guía de orientación profesional. Estoy aquí para escucharte, resolver tus dudas sobre tu futuro universitario y ayudarte a descubrir la carrera que encaje con tus pasiones y metas. ¿Qué es lo que más te preocupa o te emociona en este momento?`;

    return [
      {
        id: '1',
        role: 'assistant',
        content: defaultGreeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialQuestion && initialQuestion.trim() !== '') {
      handleSendMessage(`Quiero que me platiques a fondo sobre la carrera de ${initialQuestion}: cómo es el campo laboral, qué materias son clave y cómo saber si es para mí.`);
    }
  }, [initialQuestion]);

  const quickPrompts = [
    '¿Cómo le hablo a mis papás sobre la carrera que me gusta?',
    'Estoy indecisa entre dos carreras, ¿cómo elijo?',
    'Tengo miedo de equivocarme y arrepentirme',
    '¿Qué carreras permiten trabajar remoto y ganar bien?',
    '¿Qué habilidades debería empezar a aprender desde hoy?'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const historyForApi = messages.map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyForApi,
          profileContext: result || undefined
        })
      });

      if (!res.ok) throw new Error('Error al conectar con el coach');

      const data = await res.json();

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Hubo un pequeño contratiempo al conectar. No te preocupes, aquí sigo contigo. ¿Podrías intentar enviar tu mensaje nuevamente?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Info Banner */}
      <div className="glass-card rounded-3xl p-5 border border-slate-200/80 shadow-md mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-pink-500 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-brand-500/25">
            S
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-extrabold text-slate-900 text-base sm:text-lg">Sofía • Tu Coach Vocacional</h2>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-emerald-700 font-semibold hidden sm:inline-block">En línea</span>
            </div>
            <p className="text-xs text-slate-500">
              Guía empática basada en tus intereses, Ikigai y el mercado profesional real
            </p>
          </div>
        </div>

        {result && (
          <div className="px-3 py-1.5 rounded-xl bg-brand-50 border border-brand-200 text-xs text-brand-700 font-bold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-brand-600" />
            Perfil: {result.codeString} ({result.primaryTrait.name})
          </div>
        )}
      </div>

      {/* Chat Messages Container */}
      <div className="glass-card rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden flex flex-col h-[580px]">
        {/* Messages List */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1 shadow-sm ${
                    isUser
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gradient-to-tr from-brand-600 to-pink-500 text-white'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : 'S'}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4.5 py-3.5 text-sm sm:text-base leading-relaxed ${
                    isUser
                      ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white rounded-tr-none shadow-sm'
                      : 'bg-slate-100/90 text-slate-800 rounded-tl-none border border-slate-200/60 shadow-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap space-y-2">
                    {msg.content}
                  </div>
                  <div
                    className={`text-[10px] mt-2 text-right ${
                      isUser ? 'text-brand-200' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-pink-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                S
              </div>
              <div className="bg-slate-100 rounded-2xl px-4 py-3 border border-slate-200/60 rounded-tl-none flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                <span className="text-xs text-slate-400 ml-1">Sofía está reflexionando...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompts Pills */}
        <div className="px-4 py-2 bg-slate-50/80 border-t border-slate-200/60 overflow-x-auto flex items-center gap-2 scrollbar-none">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex-shrink-0">
            Preguntas Frecuentes:
          </span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              disabled={isLoading}
              className="text-xs px-3 py-1.5 rounded-full bg-white hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 border border-slate-200 text-slate-600 font-medium whitespace-nowrap transition-all shadow-2xs"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu duda, miedo o pregunta a Sofía..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-slate-50/60"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className={`p-3 rounded-2xl text-white font-bold transition-all shadow-md ${
                inputMessage.trim() && !isLoading
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 shadow-brand-500/25 hover:scale-105'
                  : 'bg-slate-300 cursor-not-allowed shadow-none'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
