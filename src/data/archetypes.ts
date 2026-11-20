import { Archetype, RIASECCode } from '@/types';

export const ARCHETYPES: Record<string, Archetype> = {
  'creadora-tech': {
    id: 'creadora-tech',
    title: 'La Creadora Tecnológica',
    subtitle: 'El balance perfecto entre arte visual, innovación y futuro digital',
    emoji: '✨💻',
    gradient: 'from-fuchsia-600 via-purple-600 to-indigo-600',
    description: 'Tienes un ojo estético privilegiado y una mente despierta. No te conformas con consumir tecnología: quieres diseñarla, darle estilo y crear cosas que millones de personas amen usar en sus celulares y laptops.',
    vibeQuote: '«¿Para qué elegir entre arte y tecnología si puedo crear el futuro con ambos?»',
    superpowers: [
      { name: 'Ojo Estético Natural', emoji: '🎨', desc: 'Detectas al instante qué se ve bien, qué se siente moderno y qué es intuitivo.' },
      { name: 'Curiosidad Digital', emoji: '⚡', desc: 'Aprendes herramientas nuevas más rápido que nadie y experimentas sin miedo.' },
      { name: 'Empatía de Usuario', emoji: '💖', desc: 'Sabes ponerte en los zapatos de la gente para diseñar soluciones simples.' }
    ],
    idealCareers: ['ux-ui-design', 'data-science-ai', 'software-engineering', 'multimedia-direction']
  },
  'sanadora-empatica': {
    id: 'sanadora-empatica',
    title: 'La Sanadora Empática',
    subtitle: 'Ciencia con corazón humano y vocación de transformar vidas',
    emoji: '🌸🧠',
    gradient: 'from-rose-500 via-pink-600 to-purple-600',
    description: 'En un mundo que a veces parece frío, tú eres un refugio. Tienes una intuición especial para escuchar sin juzgar, entender lo que otros sienten y el deseo genuino de aliviar el sufrimiento a través del conocimiento científico.',
    vibeQuote: '«El mayor impacto que puedo dejar en la vida es ayudar a alguien a sanar y creer en sí misma.»',
    superpowers: [
      { name: 'Escucha Profunda', emoji: '👂', desc: 'La gente confía en ti naturalmente porque sabes escuchar desde el corazón.' },
      { name: 'Rigor Compasivo', emoji: '🔬', desc: 'Combinas la sensibilidad emocional con la curiosidad científica.' },
      { name: 'Resiliencia Positiva', emoji: '🌱', desc: 'Encuentras esperanza y luz en los momentos difíciles.' }
    ],
    idealCareers: ['psychology-neuroscience', 'biotechnology', 'medicine-pediatrics', 'edtech-pedagogy']
  },
  'visionaria-estratega': {
    id: 'visionaria-estratega',
    title: 'La Visionaria Estratega',
    subtitle: 'Liderazgo audaz, carisma natural y visión de proyectos globales',
    emoji: '👑🚀',
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
    description: 'Tienes chispa, seguridad y energía contagiosa. Te atrae el mundo de los proyectos ambiciosos, convencer a otros de tus ideas y construir cosas grandes donde tengas libertad e independencia para decidir.',
    vibeQuote: '«No vine a seguir las reglas de otros; vine a construir mis propios proyectos y cambiar las reglas.»',
    superpowers: [
      { name: 'Persuasión & Carisma', emoji: '🗣️', desc: 'Cuando hablas con pasión, la gente te escucha y quiere sumarse a tu equipo.' },
      { name: 'Olfato de Oportunidades', emoji: '🎯', desc: 'Ves soluciones y negocios donde otros solo ven obstáculos.' },
      { name: 'Libertad e Iniciativa', emoji: '🦅', desc: 'No necesitas que te digan qué hacer; tomas la delantera y actúas.' }
    ],
    idealCareers: ['digital-marketing-branding', 'entrepreneurship-innovation', 'international-relations', 'sustainable-finance']
  },
  'cientifica-curiosa': {
    id: 'cientifica-curiosa',
    title: 'La Científica Curiosa',
    subtitle: 'Mente brillante que investiga los misterios de la vida y el planeta',
    emoji: '🧬🔍',
    gradient: 'from-blue-600 via-cyan-600 to-emerald-600',
    description: 'Siempre quieres saber el «por qué» detrás de todo. Te fascina descubrir patrones, analizar datos, la biología o la física, y soñar con descubrimientos que salven ecosistemas y vidas humanas.',
    vibeQuote: '«El conocimiento es el verdadero superpoder para proteger a nuestro planeta.»',
    superpowers: [
      { name: 'Pensamiento Analítico', emoji: '🧩', desc: 'Desarmas problemas complejos en partes lógicas y encuentras la solución.' },
      { name: 'Pasión por la Verdad', emoji: '🔎', desc: 'Prefieres la evidencia y la investigación rigurosa antes que las suposiciones.' },
      { name: 'Compromiso Ecológico', emoji: '🌍', desc: 'Deseas que tu talento sirva para regenerar la naturaleza y la salud.' }
    ],
    idealCareers: ['biotechnology', 'environmental-engineering', 'data-science-ai', 'biomedical-engineering']
  },
  'arquitecta-de-espacios': {
    id: 'arquitecta-de-espacios',
    title: 'La Creadora de Espacios',
    subtitle: 'Transformas materiales, luz y tecnología en belleza que se puede habitar',
    emoji: '📐🌿',
    gradient: 'from-teal-500 via-emerald-600 to-indigo-700',
    description: 'Visualizas el mundo en 3D antes de que exista. Te apasiona la estética de los espacios, los materiales sostenibles, el diseño físico y cómo un entorno armónico puede hacer feliz a la gente.',
    vibeQuote: '«El espacio donde vivimos moldea cómo nos sentimos y quiénes somos.»',
    superpowers: [
      { name: 'Visión Espacial 3D', emoji: '✨', desc: 'Imaginas volúmenes, luces y texturas en tu mente con una facilidad asombrosa.' },
      { name: 'Fusión Arte + Técnica', emoji: '🏛️', desc: 'Unes el buen gusto estético con el rigor de la ingeniería sustentable.' },
      { name: 'Huella Verde', emoji: '🌱', desc: 'Diseñas pensando en cuidar el agua, la energía y el entorno natural.' }
    ],
    idealCareers: ['architecture-sustainability', 'biomedical-engineering', 'ux-ui-design', 'environmental-engineering']
  }
};

export function getArchetypeForProfile(topCodes: RIASECCode[]): Archetype {
  const codeStr = topCodes.slice(0, 2).join('');
  
  if (codeStr.includes('A') && (codeStr.includes('I') || codeStr.includes('R'))) {
    return ARCHETYPES['creadora-tech'];
  }
  if (codeStr.includes('S') && (codeStr.includes('I') || codeStr.includes('A'))) {
    return ARCHETYPES['sanadora-empatica'];
  }
  if (codeStr.includes('E')) {
    return ARCHETYPES['visionaria-estratega'];
  }
  if (codeStr.includes('I') && (codeStr.includes('R') || codeStr.includes('C'))) {
    return ARCHETYPES['cientifica-curiosa'];
  }
  if (codeStr.includes('A') && codeStr.includes('R')) {
    return ARCHETYPES['arquitecta-de-espacios'];
  }
  // Default to creadora tech or sanadora based on top code
  return topCodes[0] === 'S' ? ARCHETYPES['sanadora-empatica'] : ARCHETYPES['creadora-tech'];
}
