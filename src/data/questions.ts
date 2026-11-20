import { Question } from '@/types';

export const VOCATIONAL_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Intereses & Actividades',
    scenario: 'Imagina que tu escuela o comunidad organiza un gran evento de innovación y debes elegir en qué equipo involucrarte durante todo un mes:',
    question: '¿Qué rol asumirías con mayor entusiasmo natural?',
    options: [
      {
        text: 'Diseñar la identidad visual, la escenografía, los videos promocionales y la experiencia estética.',
        scores: { A: 3, E: 1 }
      },
      {
        text: 'Liderar el equipo, negociar patrocinios, coordinar a los líderes y presentar en el escenario principal.',
        scores: { E: 3, S: 1 }
      },
      {
        text: 'Investigar los temas científicos o técnicos, analizar datos de encuestas y estructurar el contenido de valor.',
        scores: { I: 3, C: 1 }
      },
      {
        text: 'Construir los módulos físicos, armar el equipo de sonido, la iluminación técnica y la red de internet.',
        scores: { R: 3, C: 1 }
      },
      {
        text: 'Coordinar la atención a los asistentes, asegurar el bienestar de los invitados y liderar a los voluntarios.',
        scores: { S: 3, E: 1 }
      },
      {
        text: 'Elaborar el presupuesto al detalle, el cronograma de actividades y el control logístico sin errores.',
        scores: { C: 3, I: 1 }
      }
    ]
  },
  {
    id: 2,
    category: 'Resolución de Problemas',
    scenario: 'Un amigo tiene una idea para una nueva aplicación o emprendimiento y te pide ayuda con el mayor reto que enfrenta:',
    question: '¿Qué parte del desafío te llamaría más la atención resolver?',
    options: [
      {
        text: 'Entender a los usuarios: entrevistar personas, descubrir sus emociones y necesidades reales.',
        scores: { S: 3, I: 1 }
      },
      {
        text: 'Diseñar la interfaz de usuario: colores, tipografías, ilustraciones y cómo se siente usar la app.',
        scores: { A: 3, R: 1 }
      },
      {
        text: 'Descubrir el modelo de negocio: cómo monetizar, competir en el mercado y conseguir financiamiento.',
        scores: { E: 3, C: 1 }
      },
      {
        text: 'Analizar los algoritmos: programar la lógica del sistema o analizar la base de datos de información.',
        scores: { I: 3, R: 1 }
      },
      {
        text: 'Construir la infraestructura técnica o integrar sensores y hardware con el mundo real.',
        scores: { R: 3, I: 1 }
      },
      {
        text: 'Diseñar los manuales de proceso, los términos de servicio, las políticas de seguridad y la estructura de costos.',
        scores: { C: 3, E: 1 }
      }
    ]
  },
  {
    id: 3,
    category: 'Estilo de Trabajo',
    scenario: 'Cuando imaginas tu día de trabajo ideal dentro de 5 a 8 años:',
    question: '¿En qué tipo de ambiente te visualizas con mayor energía y satisfacción?',
    options: [
      {
        text: 'Un espacio flexible y creativo donde cada proyecto es diferente y puedo plasmar mi sello personal.',
        scores: { A: 3 }
      },
      {
        text: 'Un laboratorio, consultorio de datos o biblioteca donde pueda concentrarme profundamente en resolver dilemas.',
        scores: { I: 3 }
      },
      {
        text: 'Rodeada de personas: en aulas, hospitales, fundaciones o comunidades, ayudando y guiando vidas.',
        scores: { S: 3 }
      },
      {
        text: 'En un entorno dinámico de negocios: cerrando tratos, tomando decisiones estratégicas y viajando.',
        scores: { E: 3 }
      },
      {
        text: 'Un ambiente de orden y estructura clara, donde los procedimientos son eficientes, claros y predecibles.',
        scores: { C: 3 }
      },
      {
        text: 'Al aire libre, en un taller de ingeniería, clínica de campo o interactuando con materiales y equipos tangibles.',
        scores: { R: 3 }
      }
    ]
  },
  {
    id: 4,
    category: 'Curiosidad Intelectual',
    scenario: 'Estás en YouTube, TikTok o un podcast con tiempo libre ilimitado:',
    question: '¿Qué tipo de documentales o contenidos te atrapan por horas sin darte cuenta?',
    options: [
      {
        text: 'Cómo funciona la mente humana, relaciones interpersonales, salud mental y desarrollo personal.',
        scores: { S: 3, I: 1 }
      },
      {
        text: 'Misterios del universo, física cuántica, biotecnología, inteligencia artificial o historia profunda.',
        scores: { I: 3, R: 1 }
      },
      {
        text: 'Análisis de cine, diseño gráfico, moda, composición musical, arquitectura o procesos de artistas.',
        scores: { A: 3 }
      },
      {
        text: 'Historias de grandes fundadores de empresas, estrategias de marketing viral o negociaciones históricas.',
        scores: { E: 3, C: 1 }
      },
      {
        text: 'Construcción de megaobras, ingeniería mecánica, restauración de objetos antiguos o robótica.',
        scores: { R: 3, I: 1 }
      },
      {
        text: 'Organización de finanzas personales, criptomonedas, productividad extrema y sistemas de gestión.',
        scores: { C: 3, E: 1 }
      }
    ]
  },
  {
    id: 5,
    category: 'Impacto Social & Propósito (Ikigai)',
    scenario: 'Si pudieras dedicar un año sabático financiado para contribuir con una causa mundial:',
    question: '¿Qué misión te haría sentir que tu esfuerzo realmente valió la pena?',
    options: [
      {
        text: 'Mejorar la educación de niñas y jóvenes o brindar apoyo psicológico a comunidades vulnerables.',
        scores: { S: 3 }
      },
      {
        text: 'Encontrar curas médicas mediante biociencias o crear algoritmos que reduzcan la huella de carbono.',
        scores: { I: 3, R: 1 }
      },
      {
        text: 'Crear campañas culturales o producciones artísticas que conmuevan y cambien la perspectiva de la sociedad.',
        scores: { A: 3, S: 1 }
      },
      {
        text: 'Fundar una empresa con impacto social sustentable que genere cientos de empleos dignos.',
        scores: { E: 3, S: 1 }
      },
      {
        text: 'Desarrollar infraestructura de agua limpia, energías renovables o tecnologías agrícolas en zonas remotas.',
        scores: { R: 3, I: 1 }
      },
      {
        text: 'Optimizar la distribución de recursos y presupuestos de ayuda humanitaria para evitar pérdidas y corrupción.',
        scores: { C: 3, E: 1 }
      }
    ]
  },
  {
    id: 6,
    category: 'Habilidades Naturales',
    scenario: 'Tus profesores, amigos y familiares suelen pedirte ayuda o reconocerte por una cualidad especial:',
    question: '¿Cuál de estos halagos resuena más con tu manera natural de ser?',
    options: [
      {
        text: '"Siempre sabes escuchar sin juzgar; das los mejores consejos y tienes muchísima paciencia con la gente."',
        scores: { S: 3 }
      },
      {
        text: '"Tienes un ojo increíble para la estética; todo lo que haces tiene un estilo visual único y original."',
        scores: { A: 3 }
      },
      {
        text: '"Eres súper analítica; cuando algo te da curiosidad vas al fondo y encuentras la respuesta que nadie más vio."',
        scores: { I: 3 }
      },
      {
        text: '"Tienes una seguridad nata al hablar y convencer a los demás; tienes madera de líder."',
        scores: { E: 3 }
      },
      {
        text: '"Eres muy ordenada, puntual y confiable; tus apuntes y calendarios son la envidia de todos."',
        scores: { C: 3 }
      },
      {
        text: '"Eres muy hábil con las manos y lo práctico; armas, reparas o resuelves cosas con lógica tangible."',
        scores: { R: 3 }
      }
    ]
  },
  {
    id: 7,
    category: 'Tolerancia a Situaciones',
    scenario: 'En tu trabajo del futuro, ¿cuál de estas situaciones te resultaría MÁS agobiante o desmotivadora?',
    question: 'Elige la situación que MENOS tolerarías (nos ayudará a filtrar áreas incompatibles):',
    options: [
      {
        text: 'Pasar todo el día aislada en una oficina sin contacto humano ni interacción con personas.',
        scores: { S: 2, E: 1 }
      },
      {
        text: 'Tener que seguir reglas rígidas y repetitivas donde no haya espacio para la creatividad o la innovación.',
        scores: { A: 2, I: 1 }
      },
      {
        text: 'Tener que hacer tareas superficiales sin tiempo para investigar o entender a fondo las cosas.',
        scores: { I: 2, R: 1 }
      },
      {
        text: 'Tener un trabajo completamente pasivo y teórico sin poder ver resultados tangibles o físicos.',
        scores: { R: 2, A: 1 }
      },
      {
        text: 'Un ambiente caótico, desorganizado y sin directrices claras donde nada se planifica con rigor.',
        scores: { C: 2, E: 1 }
      },
      {
        text: 'No tener posibilidad de influir, tomar decisiones o liderar iniciativas hacia metas mayores.',
        scores: { E: 2, S: 1 }
      }
    ]
  },
  {
    id: 8,
    category: 'Materias y Temas Favoritos',
    scenario: 'Pensando en las asignaturas y áreas de estudio que más has disfrutado (o que más te intrigan para el futuro):',
    question: '¿Qué combinación de temas te despierta más entusiasmo genuino?',
    options: [
      {
        text: 'Biología, Química, Ciencias de la Salud o Neurociencias.',
        scores: { I: 2, S: 1, R: 1 }
      },
      {
        text: 'Literatura, Arte, Diseño, Comunicación, Idiomas o Filosofía.',
        scores: { A: 2, S: 1 }
      },
      {
        text: 'Matemáticas aplicadas, Programación, Algoritmos o Física.',
        scores: { I: 2, R: 1, C: 1 }
      },
      {
        text: 'Economía, Emprendimiento, Negocios, Derecho o Relaciones Internacionales.',
        scores: { E: 2, C: 1, S: 1 }
      },
      {
        text: 'Psicología, Sociología, Pedagogía o Trabajo Social.',
        scores: { S: 3, I: 1 }
      },
      {
        text: 'Robótica, Arquitectura, Diseño de Maquinaria o Agronomía.',
        scores: { R: 2, I: 1, A: 1 }
      }
    ]
  },
  {
    id: 9,
    category: 'Manejo de Proyectos',
    scenario: 'Cuando estás preparando un proyecto importante en equipo:',
    question: '¿Qué etapa del proceso disfrutas más personalmente?',
    options: [
      {
        text: 'La lluvia de ideas inicial: soñar el concepto, los bocetos y definir el estilo único.',
        scores: { A: 3 }
      },
      {
        text: 'La investigación previa: leer artículos, contrastar fuentes y asegurarnos de que la base teórica es sólida.',
        scores: { I: 3 }
      },
      {
        text: 'La integración del equipo: asegurar que todos se sientan escuchados, motivados y coordinados.',
        scores: { S: 3 }
      },
      {
        text: 'La defensa del proyecto: preparar el discurso, convencer a los jueces o al profesor y responder preguntas.',
        scores: { E: 3 }
      },
      {
        text: 'El ensamblado o programación práctica: construir el prototipo o material físico final.',
        scores: { R: 3 }
      },
      {
        text: 'La revisión final de calidad: ortografía, formato, referencias, tablas y entrega puntual perfecta.',
        scores: { C: 3 }
      }
    ]
  },
  {
    id: 10,
    category: 'Visión de Éxito',
    scenario: 'Para ti, ¿qué significaría sentirte verdaderamente exitosa en tu vida profesional?',
    question: '¿Cuál de estas frases describe mejor tu mayor aspiración?',
    options: [
      {
        text: 'Haber transformado vidas positivamente y ser recordada con cariño y gratitud por quienes ayudé.',
        scores: { S: 3 }
      },
      {
        text: 'Haber descubierto o creado algo nuevo para el conocimiento humano (una patente, un estudio o avance).',
        scores: { I: 3 }
      },
      {
        text: 'Haber creado obras, marcas o diseños icónicos que inspiren a miles de personas.',
        scores: { A: 3 }
      },
      {
        text: 'Haber construido una organización líder o empresa que me otorgue independencia financiera e influencia.',
        scores: { E: 3 }
      },
      {
        text: 'Tener una carrera con estabilidad intachable, dominio técnico excepcional y alta reputación de precisión.',
        scores: { C: 3 }
      },
      {
        text: 'Ver en el mundo real cosas que yo construí, diseñé o hice funcionar con mis propias manos y conocimientos.',
        scores: { R: 3 }
      }
    ]
  },
  {
    id: 11,
    category: 'Tecnología e Innovación',
    scenario: 'Hoy en día la Inteligencia Artificial y la tecnología están cambiando el mundo rápidamente:',
    question: '¿Cómo te gustaría interactuar con este futuro tecnológico?',
    options: [
      {
        text: 'Asegurando que la tecnología sea ética, humana y beneficie el bienestar mental de las personas.',
        scores: { S: 3, I: 1 }
      },
      {
        text: 'Usando herramientas digitales avanzadas para crear arte, animaciones y experiencias sensoriales nunca antes vistas.',
        scores: { A: 3, R: 1 }
      },
      {
        text: 'Entendiendo cómo funcionan los modelos matemáticos y creando nuevos avances científicos con ellos.',
        scores: { I: 3, C: 1 }
      },
      {
        text: 'Detectando oportunidades para lanzar startups tecnológicas y transformar industrias completas.',
        scores: { E: 3, I: 1 }
      },
      {
        text: 'Construyendo el hardware, robots, drones y dispositivos mecánicos que interactúan con el mundo físico.',
        scores: { R: 3, I: 1 }
      },
      {
        text: 'Administrando las bases de datos de información, ciberseguridad, auditoría y reglas de privacidad.',
        scores: { C: 3, I: 1 }
      }
    ]
  },
  {
    id: 12,
    category: 'Toma de Decisiones',
    scenario: 'Imagina que debes tomar una decisión importante y tienes información contradictoria:',
    question: '¿Cuál es tu método predilecto para llegar a una conclusión certera?',
    options: [
      {
        text: 'Confiar en mi intuición creativa y en lo que me hace sentir auténtica e inspirada.',
        scores: { A: 3 }
      },
      {
        text: 'Recopilar todos los datos posibles, leer estudios y formular un razonamiento lógico paso a paso.',
        scores: { I: 3 }
      },
      {
        text: 'Conversar con personas de confianza, escuchar sus vivencias y considerar el impacto emocional en todos.',
        scores: { S: 3 }
      },
      {
        text: 'Evaluar las oportunidades de ganancia frente a los riesgos y tomar la iniciativa con valentía.',
        scores: { E: 3 }
      },
      {
        text: 'Hacer una tabla comparativa detallada con pros, contras, costos y criterios ponderados.',
        scores: { C: 3 }
      },
      {
        text: 'Hacer una prueba práctica a pequeña escala y ver directamente qué funciona mejor en la realidad.',
        scores: { R: 3 }
      }
    ]
  }
];
