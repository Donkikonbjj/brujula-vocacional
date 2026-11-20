import { NextRequest, NextResponse } from 'next/server';
import { askGeminiCoach } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history = [], profileContext } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'El mensaje es requerido y debe ser texto.' },
        { status: 400 }
      );
    }

    const reply = await askGeminiCoach(message, history, profileContext);

    return NextResponse.json({
      reply,
      isAI: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== ''),
    });
  } catch (error: any) {
    console.error('API Chat Route error:', error);
    return NextResponse.json(
      { error: 'Error procesando la consulta', details: error.message },
      { status: 500 }
    );
  }
}
