import { GoogleGenerativeAI } from '@google/generative-ai';
import { getSmartCoachFallback } from '@/data/coachKnowledge';

const apiKey = process.env.GEMINI_API_KEY || '';

export async function askGeminiCoach(
  userMessage: string,
  history: { role: string; content: string }[],
  profileContext?: any
): Promise<string> {
  // If no API key is provided, use our rich smart fallback engine immediately
  if (!apiKey || apiKey.trim() === '' || apiKey === 'tu_api_key_aqui') {
    return getSmartCoachFallback(userMessage, profileContext);
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: `Eres "Sofía", una mentora y coach vocacional empática, cálida, entusiasta y profundamente sabia, especializada en guiar a mujeres jóvenes y adolescentes que están eligiendo su carrera profesional o universitaria.

Tu estilo:
- Hablas con calidez de tú a tú, como una hermana mayor inspiradora o una mentora querida.
- Validas sus emociones y miedos (el miedo a equivocarse, la presión de los padres o el balance entre lo que le gusta y el dinero).
- Ofreces consejos accionables, estructurados y basados en evidencia (método Ikigai y Holland RIASEC).
- Usas formato Markdown limpio con negritas, listas ordenadas o viñetas para que sea muy fácil de leer.
- Respuestas enfocadas, enriquecedoras (alrededor de 2 a 4 párrafos concisos y bien estructurados).
- Si la usuaria comparte su perfil vocacional (Código Holland, intereses o nombre), úsalo activamente para personalizar tu respuesta.
- Si te pregunta por carreras, menciona opciones modernas y con futuro (ej. UX/UI, Biotecnología, Ciencia de Datos, Finanzas Verdes, Psicología, etc.).`
    });

    let contextPrompt = '';
    if (profileContext?.codeString) {
      contextPrompt = `[Contexto de la estudiante: Nombre: ${profileContext.studentName || 'Joven estudiante'}, Código Holland: ${profileContext.codeString}, Rasgo Principal: ${profileContext.primaryTrait?.name} (${profileContext.primaryTrait?.badge}), Rasgo Secundario: ${profileContext.secondaryTrait?.name}]\n\n`;
    }

    const conversationHistory = history.map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({
      history: conversationHistory
    });

    const result = await chat.sendMessage(contextPrompt + userMessage);
    const responseText = result.response.text();
    return responseText;
  } catch (error) {
    console.warn('Gemini API call fell back to local expert engine:', error);
    // Graceful fallback to guaranteed free smart engine
    return getSmartCoachFallback(userMessage, profileContext);
  }
}
