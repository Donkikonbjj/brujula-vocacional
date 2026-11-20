import { Question } from '@/types';

export const VOCATIONAL_QUESTIONS: Question[] = [
  {
    id: 1,
    emoji: '🌟',
    category: 'Vibe & Pasiones',
    title: 'Tu proyecto soñado de fin de semana',
    subtitle: 'Imagina que tienes tiempo libre ilimitado, buena música y cero tareas escolares:',
    options: [
      {
        emoji: '🎨',
        tag: 'Creativa & Digital',
        text: 'Diseñar la identidad visual, videos o estética de una marca o app genial.',
        scores: { A: 3, E: 1 }
      },
      {
        emoji: '🔬',
        tag: 'Curiosa & Tech',
        text: 'Aprender cómo funciona un modelo de Inteligencia Artificial o investigar un misterio científico.',
        scores: { I: 3, R: 1 }
      },
      {
        emoji: '🌸',
        tag: 'Empática & Social',
        text: 'Organizar una causa benéfica con amigas o ayudar a alguien con un consejo que le cambie el día.',
        scores: { S: 3, E: 1 }
      },
      {
        emoji: '🚀',
        tag: 'Líder & Emprendedora',
        text: 'Armar un plan para lanzar una tienda online o un negocio innovador que genere ingresos.',
        scores: { E: 3, C: 1 }
      }
    ]
  },
  {
    id: 2,
    emoji: '☕',
    category: 'Estilo de Vida',
    title: 'Tu vibe de trabajo ideal a los 24 años',
    subtitle: 'Cierra los ojos un segundo e imagínate dentro de unos años. ¿Dónde te sientes más feliz?',
    options: [
      {
        emoji: '🎧',
        tag: 'Nómada Digital',
        text: 'En una cafetería con mi laptop y audífonos, con libertad total para viajar mientras trabajo.',
        scores: { A: 2, I: 2 }
      },
      {
        emoji: '🏥',
        tag: 'Impacto en Salud',
        text: 'En una clínica u hospital de vanguardia, salvando vidas y sintiendo la gratitud de la gente.',
        scores: { S: 3, I: 1 }
      },
      {
        emoji: '✨',
        tag: 'Estudio Creativo',
        text: 'En un estudio de diseño o productora colaborando con mentes creativas en cosas hermosas.',
        scores: { A: 3, S: 1 }
      },
      {
        emoji: '💼',
        tag: 'Poder & Negocios',
        text: 'Liderando un equipo en oficinas modernas, tomando decisiones y negociando con clientes globales.',
        scores: { E: 3, C: 1 }
      }
    ]
  },
  {
    id: 3,
    emoji: '💡',
    category: 'Misión en el Mundo',
    title: 'Si te dieran un millón de dólares para resolver un problema',
    subtitle: '¿En qué causa pondrías tu energía y tu corazón sin dudarlo?',
    options: [
      {
        emoji: '🧠',
        tag: 'Salud Mental',
        text: 'Crear programas y terapias para que los jóvenes no se sientan solos ni con ansiedad.',
        scores: { S: 3 }
      },
      {
        emoji: '🌱',
        tag: 'Planeta Verde',
        text: 'Inventar tecnologías para limpiar los océanos, frenar el cambio climático y cuidar animales.',
        scores: { I: 2, R: 2 }
      },
      {
        emoji: '📱',
        tag: 'Educación Divertida',
        text: 'Desarrollar apps y videojuegos interactivos para que aprender no sea una tortura aburrida.',
        scores: { A: 2, S: 1, E: 1 }
      },
      {
        emoji: '🏛️',
        tag: 'Justicia Social',
        text: 'Crear fundaciones y leyes internacionales que protejan los derechos de niñas y mujeres.',
        scores: { E: 2, S: 2 }
      }
    ]
  },
  {
    id: 4,
    emoji: '⚡',
    category: 'Tus Superpoderes',
    title: 'En tu grupo de amigas, ¿cuál es tu rol no oficial?',
    subtitle: 'Tus amigas te conocen mejor que nadie. ¿Por qué razón recurren a ti siempre?',
    options: [
      {
        emoji: '👂',
        tag: 'La Terapeuta',
        text: '«Siempre sabes escuchar sin juzgar, guardas secretos y das los abrazos y consejos más sinceros.»',
        scores: { S: 3 }
      },
      {
        emoji: '👁️',
        tag: 'La Aesthetic',
        text: '«Tienes un gusto visual impecable: editas fotos/videos increíbles y sabes qué se ve bien.»',
        scores: { A: 3 }
      },
      {
        emoji: '🕵️‍♀️',
        tag: 'La Detective',
        text: '«Si tenemos una duda o misterio, en 5 minutos investigas todo en internet y das con la verdad.»',
        scores: { I: 3 }
      },
      {
        emoji: '👑',
        tag: 'La Organizadora',
        text: '«Tomas la iniciativa, dices a dónde ir, convences a todos y haces que las cosas sucedan.»',
        scores: { E: 3 }
      }
    ]
  },
  {
    id: 5,
    emoji: '🚀',
    category: 'Creación',
    title: 'Dilema rápido: ¿Qué preferirías inventar desde cero?',
    subtitle: 'Si pudieras ver tu nombre en los créditos de una obra trascendente:',
    options: [
      {
        emoji: '📲',
        tag: 'App Viral',
        text: 'Una app tan bonita y útil que millones de personas la usen todos los días en su celular.',
        scores: { A: 2, I: 2 }
      },
      {
        emoji: '🧬',
        tag: 'Cura Biomédica',
        text: 'Un tratamiento o vacuna genética que salve la vida de miles de personas enfermas.',
        scores: { I: 3, S: 1 }
      },
      {
        emoji: '🎬',
        tag: 'Película / Serie',
        text: 'Una serie o documental conmovedor para Netflix o el cine que haga llorar y pensar al mundo.',
        scores: { A: 3, S: 1 }
      },
      {
        emoji: '🦄',
        tag: 'Empresa Innovadora',
        text: 'Una startup millonaria creada por ti que dé empleo digno y revolucione una industria.',
        scores: { E: 3, C: 1 }
      }
    ]
  },
  {
    id: 6,
    emoji: '🎧',
    category: 'Curiosidad',
    title: 'Contenido que te atrapa por horas sin darte cuenta',
    subtitle: 'Cuando estás haciendo scroll en TikTok, YouTube o podcasts:',
    options: [
      {
        emoji: '🧠',
        tag: 'Psicología & Mente',
        text: 'Cómo funciona el cerebro, por qué actuamos como actuamos, relaciones humanas y emociones.',
        scores: { S: 3, I: 1 }
      },
      {
        emoji: '🎨',
        tag: 'Arte, Moda & Cine',
        text: 'Procesos de artistas, diseño de ropa, análisis de cinematografía, paletas de color y estética.',
        scores: { A: 3 }
      },
      {
        emoji: '🌌',
        tag: 'Ciencia & Misterios',
        text: 'El universo, avances científicos, cómo funciona la tecnología del futuro y la medicina.',
        scores: { I: 3, R: 1 }
      },
      {
        emoji: '💸',
        tag: 'Negocios & Éxito',
        text: 'Cómo jóvenes fundadoras crearon sus marcas, estrategias de marketing y cómo generar dinero.',
        scores: { E: 3, C: 1 }
      }
    ]
  },
  {
    id: 7,
    emoji: '👭',
    category: 'Mentoría & Admiración',
    title: 'Si pudieras pasar una tarde con una mujer inspiradora:',
    subtitle: '¿A quién elegirías para que te cuente sus secretos de vida y carrera?',
    options: [
      {
        emoji: '💻',
        tag: 'Diseñadora Tech',
        text: 'La Directora de Diseño de Producto de una app como Spotify, Pinterest o Apple.',
        scores: { A: 3, I: 1 }
      },
      {
        emoji: '👩‍🔬',
        tag: 'Científica Nobel',
        text: 'Una genetista o neurocientífica que descifró cómo curar enfermedades complejas.',
        scores: { I: 3, S: 1 }
      },
      {
        emoji: '🌸',
        tag: 'Psicóloga / Autora',
        text: 'Una conferencista y terapeuta que ayuda a miles de personas a sanar sus inseguridades.',
        scores: { S: 3, A: 1 }
      },
      {
        emoji: '🚀',
        tag: 'CEO & Fundadora',
        text: 'Una empresaria joven que construyó su propia compañía desde su habitación y es millonaria.',
        scores: { E: 3, C: 1 }
      }
    ]
  },
  {
    id: 8,
    emoji: '🛑',
    category: 'Red Flags',
    title: 'Tu mayor «Red Flag» en un trabajo:',
    subtitle: '¿Cuál de estas situaciones te haría querer renunciar al segundo día?',
    options: [
      {
        emoji: '📋',
        tag: 'La Rutina Gris',
        text: 'Estar obligada a seguir órdenes cuadradas y repetitivas sin espacio para ser creativa.',
        scores: { A: 3, E: 1 }
      },
      {
        emoji: '🧊',
        tag: 'La Frialdad Humana',
        text: 'Un ambiente donde a nadie le importa cómo te sientes y solo seas tratada como un número.',
        scores: { S: 3 }
      },
      {
        emoji: '🥱',
        tag: 'Lo Superficial',
        text: 'Hacer cosas sin sentido donde no pueda investigar a fondo ni usar mi cerebro.',
        scores: { I: 3 }
      },
      {
        emoji: '⏳',
        tag: 'El Estancamiento',
        text: 'Un lugar donde no haya opción de crecer, ganar más dinero ni liderar mis propias ideas.',
        scores: { E: 3 }
      }
    ]
  },
  {
    id: 9,
    emoji: '💎',
    category: 'Dinero & Libertad',
    title: 'Tu relación con el dinero y el éxito profesional',
    subtitle: 'Hablemos con honestidad: ¿Qué buscas lograr con tus ingresos?',
    options: [
      {
        emoji: '✈️',
        tag: 'Libertad para Viajar',
        text: 'Ganar en dólares o tener ingresos que me permitan viajar por el mundo y ser independiente joven.',
        scores: { E: 2, A: 2 }
      },
      {
        emoji: '💖',
        tag: 'Propósito ante Todo',
        text: 'Ganar lo suficiente para vivir tranquila, pero lo principal es que mi trabajo mejore vidas humanas.',
        scores: { S: 3 }
      },
      {
        emoji: '⚖️',
        tag: 'El Balance Ideal',
        text: 'Un excelente sueldo combinando mi creatividad con las carreras tecnológicas más demandadas.',
        scores: { A: 2, I: 2 }
      },
      {
        emoji: '🏰',
        tag: 'Imperio Propio',
        text: 'Construir patrimonio propio, invertir inteligentemente y no depender económicamente de nadie.',
        scores: { E: 3, C: 1 }
      }
    ]
  },
  {
    id: 10,
    emoji: '🎯',
    category: 'Tu Legado',
    title: 'Al final del día, ¿qué te haría sentir profundamente orgullosa?',
    subtitle: 'Cuando mires hacia atrás dentro de unos años, tu mayor alegría será:',
    options: [
      {
        emoji: '🌸',
        tag: 'Vidas Tocadas',
        text: 'Saber que fui un apoyo clave para que muchas personas creyeran en sí mismas y fueran felices.',
        scores: { S: 3 }
      },
      {
        emoji: '🎨',
        tag: 'Belleza Creada',
        text: 'Haber dejado mi huella estética en obras, diseños o plataformas que inspiraron al mundo.',
        scores: { A: 3 }
      },
      {
        emoji: '💡',
        tag: 'Verdades Descubiertas',
        text: 'Haber aportado al conocimiento científico y tecnológico para hacer avanzar a la humanidad.',
        scores: { I: 3 }
      },
      {
        emoji: '🦅',
        tag: 'Autonomía Total',
        text: 'Haber conquistado mi libertad, creado mis propios proyectos y ser una líder respetada.',
        scores: { E: 3 }
      }
    ]
  }
];
