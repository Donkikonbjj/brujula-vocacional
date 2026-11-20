import { RIASECCode, RIASECTrait, Career, AssessmentResult } from '@/types';
import { getArchetypeForProfile } from '@/data/archetypes';
import { CAREERS_DATABASE } from '@/data/careers';

export const RIASEC_TRAITS: Record<RIASECCode, RIASECTrait> = {
  R: {
    code: 'R',
    name: 'Realista',
    badge: 'Práctica & Constructora',
    emoji: '🛠️',
    color: 'from-amber-500 to-orange-600',
    gradient: 'from-amber-500/20 to-orange-500/10',
    description: 'Prefieres actividades prácticas, tangibles y directas. Te gusta entender cómo funcionan los objetos, la tecnología física, la naturaleza o el diseño espacial.',
    strengths: ['Pensamiento práctico', 'Habilidad espacial', 'Resolución directa', 'Creación tangible'],
    workEnvironments: ['Laboratorios de prototipado', 'Arquitectura y obra sustentable', 'Robótica y automatización']
  },
  I: {
    code: 'I',
    name: 'Investigador',
    badge: 'Analítica & Científica',
    emoji: '🔬',
    color: 'from-blue-500 to-cyan-600',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    description: 'Tienes una curiosidad insaciable por comprender el porqué de las cosas. Te apasiona la investigación, el análisis de datos, formular hipótesis y resolver enigmas.',
    strengths: ['Pensamiento crítico', 'Curiosidad intelectual', 'Rigor analítico', 'Capacidad de aprendizaje acelerado'],
    workEnvironments: ['Centros de investigación', 'Empresas de tecnología e IA', 'Laboratorios biomédicos']
  },
  A: {
    code: 'A',
    name: 'Artístico',
    badge: 'Creativa & Visionaria',
    emoji: '🎨',
    color: 'from-purple-500 to-pink-600',
    gradient: 'from-purple-500/20 to-pink-500/10',
    description: 'Posees una gran sensibilidad estética, imaginación y necesidad de autoexpresión. Disfrutas innovar, diseñar conceptos visuales, contar historias y romper moldes.',
    strengths: ['Originalidad e inventiva', 'Sensibilidad estética visual', 'Pensamiento narrativo', 'Diseño de experiencias'],
    workEnvironments: ['Estudios de diseño y apps', 'Agencias creativas y de contenido', 'Startups de innovación visual']
  },
  S: {
    code: 'S',
    name: 'Social',
    badge: 'Empática & Conectora',
    emoji: '💖',
    color: 'from-emerald-500 to-teal-600',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    description: 'Tu motivación principal es ayudar, enseñar, conectar y escuchar a las personas. Tienes una alta inteligencia interpersonal y vocación por generar un impacto positivo.',
    strengths: ['Escucha activa y empatía', 'Comunicación asertiva', 'Inteligencia emocional', 'Trabajo en equipo'],
    workEnvironments: ['Salud mental y bienestar', 'Instituciones educativas e innovadoras', 'Proyectos con causa social']
  },
  E: {
    code: 'E',
    name: 'Emprendedor',
    badge: 'Líder & Estratega',
    emoji: '🚀',
    color: 'from-rose-500 to-red-600',
    gradient: 'from-rose-500/20 to-red-500/10',
    description: 'Te energiza liderar iniciativas, proponer ideas audaces, convencer y motivar a otros hacia un objetivo común. Te atrae el mundo de los proyectos y la independencia.',
    strengths: ['Liderazgo inspirador', 'Persuasión y comunicación', 'Iniciativa y audacia', 'Visión estratégica'],
    workEnvironments: ['Startups y empresas digitales', 'Dirección de proyectos y nuevos negocios', 'Marketing estratégico global']
  },
  C: {
    code: 'C',
    name: 'Convencional',
    badge: 'Organizada & Metódica',
    emoji: '📊',
    color: 'from-indigo-500 to-violet-700',
    gradient: 'from-indigo-500/20 to-violet-500/10',
    description: 'Destacas por tu orden, precisión, eficiencia y respeto por los sistemas bien estructurados. Disfrutas optimizar procesos y garantizar la excelencia operativa.',
    strengths: ['Organización impecable', 'Atención al detalle', 'Gestión de datos y presupuestos', 'Fiabilidad'],
    workEnvironments: ['Finanzas y fintech', 'Operaciones y logística', 'Auditoría y gobernanza digital']
  }
};

export function calculateHollandResult(
  answers: Record<number, number>,
  questionsList: any[],
  studentName?: string
): AssessmentResult {
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
  const archetype = getArchetypeForProfile(sortedCodes);

  // Match and compute compatibility percentage
  const matchedCareers = CAREERS_DATABASE.map((career) => {
    let matchScore = 65; // baseline
    if (career.matchHolland.includes(sortedCodes[0])) matchScore += 20;
    if (career.matchHolland.includes(sortedCodes[1])) matchScore += 10;
    if (career.matchHolland.includes(sortedCodes[2])) matchScore += 4;
    // Cap match percent between 70% and 99%
    const matchPercent = Math.min(99, Math.max(70, matchScore));
    return {
      ...career,
      matchPercent
    };
  }).sort((a, b) => b.matchPercent - a.matchPercent);

  return {
    scores,
    topCodes: sortedCodes.slice(0, 3),
    codeString,
    primaryTrait: RIASEC_TRAITS[sortedCodes[0]],
    secondaryTrait: RIASEC_TRAITS[sortedCodes[1]],
    tertiaryTrait: RIASEC_TRAITS[sortedCodes[2]],
    archetype,
    matchedCareers,
    completedAt: new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    studentName: studentName?.trim() || undefined
  };
}
