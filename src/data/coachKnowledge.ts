export interface SmartFallbackResponse {
  keywords: string[];
  reply: string;
  suggestedFollowUps: string[];
}

export const COACH_FALLBACK_PATTERNS: SmartFallbackResponse[] = [
  {
    keywords: ['papás', 'padres', 'familia', 'presión', 'convencer', 'quieren que estudie'],
    reply: `Es totalmente normal sentir este peso. La conversación con tus padres sobre tu futuro suele nacer de su deseo de protegerte y asegurar tu estabilidad, aunque a veces lo expresen con miedo a lo desconocido o insistiendo en carreras tradicionales.

Aquí tienes una estrategia en 3 pasos que te dará mucha seguridad:

1. **Agradéceles y valida su intención:** Diles algo como: *"Sé que quieren lo mejor para mí y aprecio que se preocupen por mi futuro."* Esto baja las defensas inmediatamente.
2. **Llega con datos e investigación seria:** En lugar de decir *"me gusta esta carrera"*, muéstrales:
   - Dónde trabajan hoy en día las personas de esa área.
   - Qué rango de sueldos y demanda laboral real existe (puedes usar las fichas de nuestro explorador).
   - Cuál es el plan de estudios y qué habilidades prácticas desarrollarás.
3. **Pide una alianza, no permiso infantil:** *"He estado investigando a fondo y me apasiona este camino. Me gustaría que revisáramos juntos estas opciones para que vean lo sólida que es la oportunidad."*

Recuerda: Es tu vida la que vivirás los próximos 40 años. Cuando tus padres ven madurez y preparación fundamentada, el miedo se transforma en orgullo y apoyo.`,
    suggestedFollowUps: [
      '¿Qué hago si me atraen dos carreras muy distintas?',
      '¿Cómo sé si una carrera tiene buen futuro laboral?',
      '¿Cuáles son mis mayores fortalezas según mi test?'
    ]
  },
  {
    keywords: ['dos carreras', 'indecisa', 'elegir', 'ambas', 'confundida', 'no sé cuál', 'duda'],
    reply: `¡Estar entre dos carreras no es un problema, es una señal de que eres una persona multifacética con un gran potencial! Hoy en día las mejores innovaciones ocurren precisamente en la intersección de dos disciplinas.

Te propongo hacer este ejercicio de claridad:

1. **El experimento mental del día a día:** No pienses en el "título" que tendrás colgado en la pared; piensa en el martes a las 11:00 am. ¿Prefieres estar analizando datos/código frente a un monitor, diseñando conceptos visuales, interactuando cara a cara con personas, o en un laboratorio/obra física?
2. **La fórmula "Carrera Principal + Especialidad Cruzada":** ¿Sabías que puedes estudiar una y complementar con la otra?
   - Si te gusta el arte y la tecnología: *Diseño UX/UI* o *Desarrollo Creativo*.
   - Si te gusta la salud y los datos: *Bioinformática* o *Neurociencias*.
   - Si te gusta la comunicación y los negocios: *Marketing Estratégico* o *Relaciones Públicas*.
3. **La regla de reversibilidad:** Ninguna decisión a tus 18 años te encasilla para siempre. Las habilidades que adquieras (pensamiento crítico, comunicación, tecnología) serán transferibles a cualquier ámbito.

¿Cuáles son esas dos opciones que rondan por tu mente? Cuéntame y analizamos cómo conectan.`,
    suggestedFollowUps: [
      '¿Cómo funciona el mercado remoto para trabajar desde casa?',
      '¿Qué habilidades blandas son las más valoradas hoy?',
      'Quiero ver opciones de carreras híbridas'
    ]
  },
  {
    keywords: ['miedo', 'equivocarme', 'fracasar', 'ansiedad', 'no ser buena', 'presión'],
    reply: `Respira hondo un momento. Quiero que sepas algo fundamental: **no estás sola y sentir miedo es completamente humano**. Decidir qué estudiar parece una decisión definitiva de vida, pero la realidad del mundo profesional es mucho más flexible y generosa de lo que nos enseñan.

Tres verdades para darte paz mental:
- **Tu carrera no define quién eres, solo es tu primera caja de herramientas:** Grandes líderes, científicas y creadoras comenzaron en una rama y fueron moldeando su camino conforme se conocían mejor.
- **El talento se entrena:** Nadie nace sabiendo programar, diseñar o diagnosticar. La curiosidad y la constancia superan al "talento innato" el 95% de las veces.
- **Probar es gratis:** Hoy tienes cursos gratuitos en YouTube, Coursera o Khan Academy donde puedes tomar 3 horas de introducción y ver si te entusiasma la materia real antes de inscribirte.

Tener dudas no significa que no seas capaz; significa que te importa. ¡Y eso habla maravilloso de ti!`,
    suggestedFollowUps: [
      '¿Qué cursos gratuitos puedo tomar ahora mismo?',
      '¿Cómo hago un plan de acción paso a paso?',
      'Explícame mi perfil de personalidad vocacional'
    ]
  },
  {
    keywords: ['dinero', 'sueldo', 'pagar', 'ganar bien', 'salario', 'rentable', 'futuro'],
    reply: `Tener en cuenta el aspecto económico no es codicia, es sensatez y madurez financiera. Es ideal buscar un equilibrio entre lo que amas y lo que el mercado remunera con fuerza (el corazón del concepto japonés *Ikigai*).

Las claves de las carreras mejor remuneradas en esta década:
1. **La palanca digital:** Carreras vinculadas a Tecnología (Desarrollo, Ciencia de Datos, UX/UI, Ciberseguridad) permiten ganar en dólares o euros trabajando desde cualquier país con salarios muy superiores al promedio local.
2. **Especialización de alto valor:** En áreas tradicionales como Salud, Derecho o Negocios, quienes dominan una especialidad de vanguardia (ej. Finanzas ESG, Biotecnología, Derecho Tecnológico) destacan y cobran significativamente más.
3. **El factor inglés:** Hablar inglés fluido multiplica tu potencial de ingresos entre un 200% y 400% en prácticamente cualquier profesión.

En nuestro explorador de carreras puedes filtrar por nivel de proyección salarial y demanda a futuro. ¿Te gustaría que profundicemos en alguna en particular?`,
    suggestedFollowUps: [
      '¿Cuáles son las carreras con mayor proyección internacional?',
      '¿Qué carrera combina tecnología y arte?',
      '¿Cómo me preparo para conseguir empleo remoto?'
    ]
  }
];

export function getSmartCoachFallback(userMessage: string, profileContext?: any): string {
  const normalized = userMessage.toLowerCase();
  
  for (const item of COACH_FALLBACK_PATTERNS) {
    if (item.keywords.some((k) => normalized.includes(k))) {
      let response = item.reply;
      if (profileContext?.codeString) {
        response += `\n\n> *Nota personalizada para tu perfil Holland (${profileContext.codeString}): Tus rasgos predominantes (${profileContext.primaryTrait?.name} y ${profileContext.secondaryTrait?.name}) indican que te sentirás más plena cuando tus actividades honren estas fortalezas.*`;
      }
      return response;
    }
  }

  // Generic empathetic response if no keyword pattern directly matched
  let greeting = `¡Hola! Me alegra mucho que me consultes esto. `;
  if (profileContext?.studentName) {
    greeting = `¡Hola, ${profileContext.studentName}! Me alegra que hablemos sobre tu futuro. `;
  }

  return `${greeting}Como tu coach vocacional, mi objetivo es ayudarte a conectar tus pasiones con oportunidades reales.

Para responder con precisión a lo que me preguntas ("*${userMessage}*"), considera estos 3 puntos clave:

1. **Autoconocimiento primero:** Las carreras son vehículos, pero tu motor son tus valores y talentos. Si aún no has completado el test vocacional de esta app, te recomiendo tomarlo (toma solo 3 minutos) para que descubramos tu código Holland exacto.
2. **Investigación vivencial:** La mejor manera de saber si una carrera es para ti es hablar con alguien que ya la ejerza. Busca en LinkedIn o entre conocidos a 2 personas de esa área y pregúntales: *"¿Qué es lo que más te apasiona y qué es lo más difícil de tu día a día?"*
3. **Paso a paso sin abrumarte:** No necesitas tener resuelto todo tu futuro hoy. Solo necesitas definir tu siguiente paso: elegir un área de afinidad, revisar universidades y preparar tus exámenes de ingreso.

¿Te gustaría que analicemos alguna carrera específica del catálogo o tienes alguna inquietud sobre tus materias actuales? ¡Dime y lo exploramos juntas!`;
}
