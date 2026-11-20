import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BrújulaPro | Tu Guía y Coach Vocacional',
  description: 'Descubre tu verdadera vocación con el test Holland RIASEC, metodología Ikigai y el acompañamiento personalizado de Sofía, tu coach de orientación profesional.',
  keywords: ['orientación vocacional', 'carreras universitarias', 'coach de carrera', 'test vocacional', 'ikigai', 'holland riasec'],
  authors: [{ name: 'BrújulaPro' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-800 min-h-screen selection:bg-brand-100 selection:text-brand-900">
        {children}
      </body>
    </html>
  );
}
