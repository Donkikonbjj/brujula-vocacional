import { RIASECCode, RIASECTrait } from '@/types';

export const RIASEC_TRAITS: Record<RIASECCode, RIASECTrait> = {
  R: {
    code: 'R',
    name: 'Realista',
    badge: 'Práctica & Constructora',
    color: 'from-amber-500 to-orange-600',
    description: 'Prefieres actividades prácticas, tangibles y directas. Te gusta entender cómo funcionan los objetos, herramientas, tecnología física, maquinaria o la naturaleza.',
    strengths: ['Pensamiento práctico', 'Habilidad manual y espacial', 'Orientación a resultados concretos', 'Resolución directa de problemas'],
    workEnvironments: ['Laboratorios de prototipado', 'Campos de diseño físico o arquitectura', 'Robótica y automatización', 'Espacios al aire libre o de ingeniería aplicada']
  },
  I: {
    code: 'I',
    name: 'Investigador',
    badge: 'Analítica & Científica',
    color: 'from-blue-500 to-cyan-600',
    description: 'Tienes una curiosidad insaciable por comprender el porqué de las cosas. Te apasiona la investigación, el análisis de datos, formular hipótesis y resolver enigmas complejos.',
    strengths: ['Pensamiento crítico y abstracto', 'Curiosidad intelectual', 'Rigor analítico', 'Capacidad para aprender conceptos complejos'],
    workEnvironments: ['Centros de investigación', 'Empresas de tecnología y datos', 'Laboratorios biomédicos', 'Consultorías de estrategia y ciencia']
  },
  A: {
    code: 'A',
    name: 'Artístico',
    badge: 'Creativa & Visionaria',
    color: 'from-purple-500 to-pink-600',
    description: 'Posees una gran sensibilidad estética, imaginación y necesidad de autoexpresión. Disfrutas innovar, diseñar conceptos nuevos, contar historias y romper moldes convencionales.',
    strengths: ['Originalidad e inventiva', 'Sensibilidad estética y visual', 'Pensamiento lateral y narrativo', 'Capacidad de conectar ideas dispares'],
    workEnvironments: ['Estudios de diseño y multimedia', 'Agencias creativas y de contenido', 'Startups de innovación de producto', 'Espacios culturales, editoriales o de moda digital']
  },
  S: {
    code: 'S',
    name: 'Social',
    badge: 'Empática & Conectora',
    color: 'from-emerald-500 to-teal-600',
    description: 'Tu motivación principal es ayudar, enseñar, conectar y colaborar con las personas. Tienes una alta inteligencia interpersonal y vocación por generar un impacto positivo en la vida de los demás.',
    strengths: ['Escucha activa y empatía', 'Comunicación asertiva', 'Habilidad para enseñar y mentorizar', 'Trabajo en equipo y resolución de conflictos'],
    workEnvironments: ['Organizaciones de salud y bienestar', 'Instituciones educativas e innovadoras', 'Fundaciones y proyectos sociales', 'Recursos humanos y desarrollo de talento']
  },
  E: {
    code: 'E',
    name: 'Emprendedor',
    badge: 'Líder & Estratega',
    color: 'from-rose-500 to-red-600',
    description: 'Te energiza liderar iniciativas, proponer ideas audaces, convencer y motivar a otros hacia un objetivo común. Te atrae el mundo de los proyectos, la toma de decisiones y el crecimiento.',
    strengths: ['Liderazgo inspirador', 'Persuasión y negociación', 'Iniciativa y proactividad', 'Tolerancia al riesgo calculado y visión estratégica'],
    workEnvironments: ['Startups y empresas en crecimiento', 'Dirección de proyectos y nuevos negocios', 'Marketing estratégico y ventas B2B', 'Organizaciones de liderazgo juvenil y foros globales']
  },
  C: {
    code: 'C',
    name: 'Convencional',
    badge: 'Organizada & Metódica',
    color: 'from-indigo-500 to-violet-700',
    description: 'Destacas por tu orden, precisión, eficiencia y respeto por los sistemas bien estructurados. Disfrutas optimizar procesos, gestionar recursos con exactitud y garantizar la excelencia operativa.',
    strengths: ['Organización impecable', 'Atención al detalle y precisión', 'Gestión de datos, calendarios y presupuestos', 'Fiabilidad y sistematicidad'],
    workEnvironments: ['Finanzas, banca y auditoría', 'Gestión de operaciones y logística', 'Cumplimiento normativo y gobernanza de datos', 'Administración de proyectos de gran escala']
  }
};

export function calculateHollandResult(answers: Record<number, number>, questionsList: any[]) {
  const scores: Record<RIASECCode, number> = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0
  };

  questionsList.forEach((q) => {
    const selectedOptionIndex = answers[q.id];
    if (selectedOptionIndex !== undefined && q.options[selectedOptionIndex]) {
      const optionScores = q.options[selectedOptionIndex].scores;
      Object.entries(optionScores).forEach(([code, val]) => {
        scores[code as RIASECCode] += (val as number) || 0;
      });
    }
  });

  const sortedCodes = (Object.keys(scores) as RIASECCode[]).sort((a, b) => scores[b] - scores[a]);
  const codeString = sortedCodes.slice(0, 3).join('');

  return {
    scores,
    topCodes: sortedCodes.slice(0, 3),
    codeString,
    primaryTrait: RIASEC_TRAITS[sortedCodes[0]],
    secondaryTrait: RIASEC_TRAITS[sortedCodes[1]],
    tertiaryTrait: RIASEC_TRAITS[sortedCodes[2]],
  };
}
