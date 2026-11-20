import { Career } from '@/types';

export const CAREERS_DATABASE: Career[] = [
  // --- TECNOLOGÍA & DISEÑO DIGITAL ---
  {
    id: 'ux-ui-design',
    title: 'Diseño de Experiencia de Usuario (UX/UI)',
    category: 'Tecnología & Creatividad',
    emoji: '🎨📱',
    vibe: '100% digital, estética visual y psicología humana',
    matchHolland: ['A', 'S', 'I'],
    tags: ['Diseño', 'Creatividad', 'Tecnología', 'Empatía'],
    summary: 'Combina arte visual, psicología y tecnología para diseñar las aplicaciones que millones de personas usan en sus celulares.',
    fullDescription: 'La diseñadora de UX/UI es la arquitecta de la experiencia digital. Investiga qué sienten las personas al usar una app, diseña las interfaces en Figma con colores y tipografías hermosas, y se asegura de que todo sea simple, intuitivo y estético.',
    remoteFriendly: true,
    dailyTasks: [
      'Entrevistar a usuarios para entender sus frustraciones y deseos al usar una app.',
      'Diseñar pantallas interactivas en Figma con animaciones, colores y microinteracciones.',
      'Crear sistemas de diseño visual modernos y accesibles.',
      'Colaborar con programadores e ingenieros para hacer realidad el diseño.'
    ],
    dayTimeline: [
      { time: '09:30 AM', emoji: '☕', activity: 'Café & Moodboards', description: 'Revisas tendencias de diseño en Pinterest, Dribbble y Twitter con música lofi de fondo.' },
      { time: '11:00 AM', emoji: '💡', activity: 'Lluvia de Ideas', description: 'Reunión rápida con tu equipo para definir cómo rediseñar la pantalla principal de la app.' },
      { time: '01:30 PM', emoji: '🥗', activity: 'Comida & Desconexión', description: 'Almuerzo relajado; si trabajas remoto, puedes comer en tu lugar favorito.' },
      { time: '03:00 PM', emoji: '🎨', activity: 'Foco Creativo en Figma', description: 'Diseñas prototipos interactivos, eliges paletas de color y pruebas animaciones.' },
      { time: '05:30 PM', emoji: '🚀', activity: 'Pruebas con Usuarios', description: 'Ves a personas reales probar tu diseño y sonreír al ver lo fácil y bonito que es.' }
    ],
    keySkills: ['Empatía e investigación', 'Figma & diseño visual', 'Pensamiento crítico', 'Creatividad estética'],
    growthOutlook: 'Muy Alta (Trabajo remoto global muy cotizado)',
    salaryLevel: 'Medio - Alto ($1,500 a $4,500+ USD/mes en remoto)',
    typicalRoles: ['Product Designer', 'UX Researcher', 'UI Designer', 'Design Lead'],
    pros: [
      'Fusión perfecta entre arte, psicología y tecnología sin necesidad de programar.',
      'Libertad absoluta para trabajar en remoto desde casa o mientras viajas.',
      'Tu talento se demuestra con un portafolio visual, no con un examen aburrido.'
    ],
    challenges: [
      'Aprender a recibir retroalimentación constante sobre tus diseños.',
      'Las tendencias visuales evolucionan año con año.'
    ],
    suggestedDegrees: ['Diseño Gráfico / Digital', 'Diseño Interactivo', 'Comunicación Visual', 'Psicología + Bootcamps'],
    freeResources: [
      { title: 'Curso interactivo de Figma para principiantes', type: 'YouTube' },
      { title: 'Google UX Design Professional Certificate', type: 'Coursera (Auditoría gratis)' }
    ],
    ikigai: {
      passion: 'Crear belleza visual y experiencias que deleiten los sentidos.',
      mission: 'Hacer que la tecnología sea accesible, humana y libre de frustraciones.',
      vocation: 'Diseñadora de interacción y defensora del usuario.',
      profession: 'Product Designer / UX Specialist en startups globales.'
    }
  },
  {
    id: 'data-science-ai',
    title: 'Ciencia de Datos e Inteligencia Artificial',
    category: 'Tecnología & Ciencias',
    emoji: '🤖📊',
    vibe: 'Poder analítico, curiosidad y algoritmos de futuro',
    matchHolland: ['I', 'C', 'R'],
    tags: ['Matemáticas', 'IA', 'Investigación', 'Tecnología'],
    summary: 'Descubre patrones ocultos en grandes volúmenes de información y entrena modelos de Inteligencia Artificial para resolver desafíos mundiales.',
    fullDescription: 'Las científicas de datos son las detectives del siglo XXI. Convierten datos dispersos en decisiones trascendentales: desde predecir brotes médicos y frenar el cambio climático hasta personalizar algoritmos en plataformas de streaming como Netflix o Spotify.',
    remoteFriendly: true,
    dailyTasks: [
      'Explorar datos con Python y encontrar correlaciones sorprendentes.',
      'Entrenar modelos de Machine Learning y visión por computadora.',
      'Diseñar gráficos y dashboards que cuenten historias claras con números.',
      'Asesorar a líderes médicos o científicos con evidencia matemática.'
    ],
    dayTimeline: [
      { time: '09:00 AM', emoji: '🍵', activity: 'Exploración de Datos', description: 'Revisas las métricas del modelo de IA que dejaste entrenando anoche.' },
      { time: '11:30 AM', emoji: '💻', activity: 'Programación en Python', description: 'Escribes código para limpiar datos y probar un algoritmo de predicción más preciso.' },
      { time: '02:00 PM', emoji: '🥑', activity: 'Almuerzo & Podcast', description: 'Momento de desconectar escuchando las últimas noticias de ciencia y tecnología.' },
      { time: '03:30 PM', emoji: '📈', activity: 'Visualización de Hallazgos', description: 'Creas gráficos interactivos que dejan a todos impresionados en la junta.' },
      { time: '05:00 PM', emoji: '💡', activity: 'Hackathon Interno', description: 'Lluvia de ideas con ingenieros sobre cómo aplicar IA generativa a proyectos con causa.' }
    ],
    keySkills: ['Pensamiento analítico', 'Python y SQL', 'Curiosidad científica', 'Storytelling con datos'],
    growthOutlook: 'Muy Alta (Entre las profesiones mejor pagadas del planeta)',
    salaryLevel: 'Alto - Muy Alto ($2,000 a $6,000+ USD/mes)',
    typicalRoles: ['Data Scientist', 'Machine Learning Engineer', 'AI Researcher', 'Data Analyst'],
    pros: [
      'Puedes trabajar en el área que ames: música, medicina, moda, deportes o clima.',
      'Salarios muy superiores al promedio y demanda internacional inagotable.',
      'Desafío intelectual continuo: jamás tendrás un día monótono.'
    ],
    challenges: [
      'Requiere paciencia con matemáticas y estadística aplicada.',
      'Aprender a limpiar datos puede tomar bastante tiempo al inicio.'
    ],
    suggestedDegrees: ['Ciencia de Datos', 'Ingeniería de Software', 'Matemáticas Aplicadas', 'Estadística'],
    freeResources: [
      { title: 'Python para Todos de Charles Severance', type: 'Curso Gratuito' },
      { title: 'Kaggle Micro-courses interactivos', type: 'Kaggle' }
    ],
    ikigai: {
      passion: 'Descifrar misterios complejos y entender la verdad detrás de los números.',
      mission: 'Guiar a la humanidad con evidencia sólida y herramientas inteligentes.',
      vocation: 'Científica investigadora de patrones y predicciones.',
      profession: 'Lead Data Scientist o Investigadora de IA.'
    }
  },
  {
    id: 'software-engineering',
    title: 'Desarrollo de Software & Creación de Apps',
    category: 'Tecnología',
    emoji: '⚡👩‍💻',
    vibe: 'Construir cosas desde cero y libertad geográfica total',
    matchHolland: ['I', 'R', 'C'],
    tags: ['Programación', 'Creación', 'Lógica', 'Resolución'],
    summary: 'Construye las aplicaciones, plataformas y herramientas digitales que mueven al mundo entero.',
    fullDescription: 'Programar es lo más cercano a tener magia real: con solo tu mente y una computadora, puedes construir una herramienta que resuelva la vida de millones de personas en cualquier rincón del planeta.',
    remoteFriendly: true,
    dailyTasks: [
      'Escribir código limpio para crear nuevas funciones en aplicaciones.',
      'Resolver acertijos lógicos y encontrar soluciones a fallas del sistema.',
      'Colaborar con diseñadoras UX para transformar bocetos en apps vivas.',
      'Planificar la arquitectura de nuevos proyectos.'
    ],
    dayTimeline: [
      { time: '10:00 AM', emoji: '🎧', activity: 'Daily Standup', description: 'Reunión virtual de 15 minutos con el equipo para planificar las metas del día.' },
      { time: '11:00 AM', emoji: '💻', activity: 'Deep Work de Código', description: 'Modo concentración total con tu playlist favorita programando una nueva función.' },
      { time: '02:00 PM', emoji: '🥪', activity: 'Break Creativo', description: 'Comida rica, caminata al aire libre o descanso para recargar batería.' },
      { time: '03:30 PM', emoji: '🤝', activity: 'Revisión con Colegas', description: 'Revisas el código de otras desarrolladoras y aprendes trucos nuevos.' },
      { time: '05:00 PM', emoji: '🚀', activity: 'Deploy a Producción', description: 'Tu código se publica y ahora miles de personas ya pueden usar lo que creaste.' }
    ],
    keySkills: ['Pensamiento lógico', 'JavaScript/TypeScript o Python', 'Autodidactismo', 'Creatividad técnica'],
    growthOutlook: 'Muy Alta (Empleo 100% garantizado)',
    salaryLevel: 'Alto - Muy Alto ($2,000 a $5,500+ USD/mes)',
    typicalRoles: ['Frontend Engineer', 'Fullstack Developer', 'Mobile Developer (iOS/Android)', 'Tech Lead'],
    pros: [
      'Poder trabajar desde cualquier lugar del mundo con tu laptop.',
      'La satisfacción inigualable de ver funcionar algo que inventaste tú misma.',
      'Facilidad para crear tus propios emprendimientos digitales.'
    ],
    challenges: [
      'Tener paciencia cuando un error de código no se resuelve de inmediato.',
      'Las tecnologías se actualizan constantemente.'
    ],
    suggestedDegrees: ['Ingeniería de Software', 'Ingeniería en Computación / Sistemas', 'Ciencias de la Computación'],
    freeResources: [
      { title: 'freeCodeCamp - Certificaciones interactivas gratis', type: 'Web' },
      { title: 'CS50 de Harvard (versión en español/edX)', type: 'edX Gratis' }
    ],
    ikigai: {
      passion: 'Construir soluciones digitales elegantes que funcionen a la perfección.',
      mission: 'Democratizar el acceso a herramientas que faciliten la vida humana.',
      vocation: 'Arquitecta de software y creadora digital.',
      profession: 'Ingeniera de Software en startups o multinacionales.'
    }
  },
  {
    id: 'psychology-neuroscience',
    title: 'Psicología Clínica & Neurociencias',
    category: 'Salud Mental & Bienestar',
    emoji: '🌸🧠',
    vibe: 'Empatía profunda, salud mental y comprensión del alma',
    matchHolland: ['S', 'I', 'A'],
    tags: ['Salud Mental', 'Empatía', 'Cerebro', 'Escucha'],
    summary: 'Comprende los misterios de la mente, las emociones y el cerebro para sanar y transformar la vida de las personas.',
    fullDescription: 'La psicología y la neurociencia estudian el universo más fascinante: la mente humana. Tu labor consiste en acompañar el sufrimiento humano, brindar herramientas terapéuticas basadas en ciencia y ayudar a las personas a encontrar paz, amor propio y bienestar.',
    remoteFriendly: true,
    dailyTasks: [
      'Brindar sesiones terapéuticas con escucha empática y técnicas modernas.',
      'Analizar patrones cognitivos, emocionales y neurobiológicos.',
      'Diseñar talleres de inteligencia emocional y autocuidado.',
      'Escribir artículos o guías para desestigmatizar la salud mental.'
    ],
    dayTimeline: [
      { time: '09:00 AM', emoji: '🧘‍♀️', activity: 'Meditación & Preparación', description: 'Lectura de expedientes y preparación mental en tu consultorio o espacio virtual.' },
      { time: '10:00 AM', emoji: '💬', activity: 'Sesiones de Terapia', description: 'Espacio seguro y confidencial donde ayudas a pacientes a superar ansiedad y miedos.' },
      { time: '01:30 PM', emoji: '🍵', activity: 'Almuerzo & Descanso', description: 'Tiempo para ti: desconectar del trabajo emocional para recargar energías.' },
      { time: '03:00 PM', emoji: '📚', activity: 'Investigación Neurocientífica', description: 'Revisas los últimos artículos sobre plasticidad cerebral y terapias cognitivas.' },
      { time: '05:00 PM', emoji: '✨', activity: 'Taller Grupal / Contenido', description: 'Impartes una sesión de salud mental para jóvenes o creas contenido educativo.' }
    ],
    keySkills: ['Escucha activa y profunda empatía', 'Inteligencia emocional', 'Pensamiento crítico', 'Ética y confidencialidad'],
    growthOutlook: 'Muy Alta (Boom global de conciencia sobre salud mental)',
    salaryLevel: 'Medio - Alto ($1,200 a $3,500+ USD con consulta privada)',
    typicalRoles: ['Psicóloga Clínica', 'Neuropsicóloga', 'Psicoterapeuta', 'Coach de Bienestar'],
    pros: [
      'La gratitud eterna de ver a una persona volver a sonreír y superar su dolor.',
      'Libertad de horarios y autonomía absoluta al tener tu propio consultorio.',
      'Habilidades de vida invaluables que enriquecen todas tus relaciones.'
    ],
    challenges: [
      'Aprender a poner límites emocionales para cuidar tu propia salud mental.',
      'Requiere vocación constante de actualización y lectura.'
    ],
    suggestedDegrees: ['Licenciatura en Psicología', 'Neurociencias', 'Medicina (con camino a Psiquiatría)'],
    freeResources: [
      { title: 'The Science of Well-Being de Yale University (Gratis)', type: 'Coursera' },
      { title: 'Huberman Lab: Neurobiología y Emociones', type: 'Podcast' }
    ],
    ikigai: {
      passion: 'Escuchar el corazón de las personas y entender cómo opera el cerebro.',
      mission: 'Llevar paz, sanación y herramientas de vida a quienes sufren en silencio.',
      vocation: 'Terapeuta, guía emocional y científica de la conducta.',
      profession: 'Psicóloga Especialista o Neurocientífica Aplicada.'
    }
  },
  {
    id: 'biotechnology',
    title: 'Biotecnología & Medicina Genómica',
    category: 'Salud & Ciencias',
    emoji: '🧬🔬',
    vibe: 'Ciencia de punta, genética y curas del futuro',
    matchHolland: ['I', 'R', 'S'],
    tags: ['Genética', 'Medicina', 'Sostenibilidad', 'Laboratorio'],
    summary: 'Aplica la ciencia biológica y la genética para crear nuevos medicamentos, terapias celulares y curas revolucionarias.',
    fullDescription: 'La biotecnología es la frontera de la medicina del futuro. Las biotecnólogas investigan el código de la vida (ADN), editan genes y diseñan moléculas para curar enfermedades raras, desarrollar vacunas y crear bio-materiales sostenibles.',
    remoteFriendly: false,
    dailyTasks: [
      'Realizar experimentos con cultivos celulares y secuenciación de ADN.',
      'Analizar datos moleculares con software bioinformático avanzado.',
      'Diseñar protocolos para probar terapias génicas innovadoras.',
      'Colaborar con médicas y farmacéuticas en proyectos de impacto.'
    ],
    dayTimeline: [
      { time: '09:00 AM', emoji: '🥼', activity: 'Ingreso al Laboratorio', description: 'Te pones la bata y revisas los cultivos celulares en incubadoras estériles.' },
      { time: '11:00 AM', emoji: '🧬', activity: 'Secuenciación de ADN', description: 'Utilizas tecnología de edición genética para analizar mutaciones clave.' },
      { time: '01:30 PM', emoji: '🥗', activity: 'Comida con Colegas', description: 'Plática animada en el campus con investigadoras de todo el mundo.' },
      { time: '03:00 PM', emoji: '💻', activity: 'Bioinformática', description: 'Modelas en 3D la estructura de proteínas usando algoritmos de AlphaFold.' },
      { time: '05:00 PM', emoji: '✨', activity: 'Registro de Hallazgos', description: 'Documentas un resultado prometedor que podría convertirse en una patente.' }
    ],
    keySkills: ['Técnicas de laboratorio molecular', 'Bioinformática', 'Rigor científico', 'Pensamiento biológico'],
    growthOutlook: 'Muy Alta (Revolución biológica global en marcha)',
    salaryLevel: 'Medio - Alto ($1,500 a $4,000+ USD)',
    typicalRoles: ['Biotecnóloga Médica', 'Bioinformática', 'Investigadora en Genómica', 'Especialista en I+D'],
    pros: [
      'Impacto directo y profundo en la erradicación de enfermedades humanas.',
      'Estar en la vanguardia absoluta de la ciencia del siglo XXI.',
      'Prestigio académico y alta demanda en la industria farmacéutica.'
    ],
    challenges: [
      'Los experimentos científicos pueden tardar meses en dar resultados.',
      'Requiere trabajo presencial en laboratorios de alta bioseguridad.'
    ],
    suggestedDegrees: ['Biotecnología', 'Bioquímica', 'Biología Molecular', 'Ingeniería Biomédica'],
    freeResources: [
      { title: 'Khan Academy: Genética y Biología Molecular', type: 'Khan Academy' },
      { title: 'Nature Podcast: Lo último en ciencias biológicas', type: 'Podcast' }
    ],
    ikigai: {
      passion: 'Comprender el milagro del código de la vida a nivel molecular.',
      mission: 'Erradicar enfermedades incurables y generar bio-soluciones sostenibles.',
      vocation: 'Científica e innovadora en ciencias de la vida.',
      profession: 'Investigadora en Biotecnología Médica o Farmacéutica.'
    }
  },
  {
    id: 'multimedia-direction',
    title: 'Dirección Creativa, Cine & Narrativa Digital',
    category: 'Creatividad & Medios',
    emoji: '🎬✨',
    vibe: 'Contar historias que ericen la piel, cine y streaming',
    matchHolland: ['A', 'E', 'S'],
    tags: ['Cine', 'Narrativa', 'Arte', 'Liderazgo'],
    summary: 'Crea historias cautivadoras para series de streaming, cine, animación, videojuegos y campañas de marcas mundiales.',
    fullDescription: 'La directora creativa es la visionaria que orquesta todo el universo visual de un proyecto. Desde escribir guiones y dirigir rodajes hasta definir la paleta de colores y la música, tu visión conecta con el corazón de audiencias masivas.',
    remoteFriendly: true,
    dailyTasks: [
      'Escribir y pulir guiones, tratamientos visuales y moodboards de inspiración.',
      'Dirigir rodajes, sesiones de grabación de sonido o equipos de animación.',
      'Supervisar la edición, corrección de color y banda sonora.',
      'Defender conceptos creativos ante productoras o festivales de cine.'
    ],
    dayTimeline: [
      { time: '10:00 AM', emoji: '☕', activity: 'Moodboard & Guion', description: 'Escribes el tratamiento visual del próximo episodio en una terraza con música.' },
      { time: '12:00 PM', emoji: '🎥', activity: 'Set de Grabación', description: 'Diriges al equipo de cámara e iluminación cuidando cada encuadre estético.' },
      { time: '02:30 PM', emoji: '🍝', activity: 'Almuerzo con el Crew', description: 'Pláticas divertidas y de complicidad con actrices, músicos y diseñadores.' },
      { time: '04:00 PM', emoji: '🎧', activity: 'Edición & Color', description: 'Revisas el montaje y añades la música que genera la emoción exacta.' },
      { time: '06:00 PM', emoji: '✨', activity: 'Visualización Final', description: 'Ves la escena terminada y sientes ese escalofrío mágico del arte que conmueve.' }
    ],
    keySkills: ['Storytelling cautivador', 'Sensibilidad estética visual', 'Liderazgo artístico', 'Cultura cinematográfica'],
    growthOutlook: 'Alta (Auge continuo de contenido y entretenimiento)',
    salaryLevel: 'Variable ($1,200 a $5,000+ USD por proyecto)',
    typicalRoles: ['Directora Creativa', 'Guionista / Showrunner', 'Directora de Cine', 'Directora de Arte'],
    pros: [
      'Crear mundos que conmuevan, eduquen y trasciendan en la cultura.',
      'Cero monotonía: cada proyecto, serie o documental es una aventura única.',
      'Oportunidad de viajar a festivales y conocer a creadores brillantes.'
    ],
    challenges: [
      'Mercado competitivo donde el portafolio y la perseverancia lo son todo.',
      'Días intensos durante los rodajes o entregas de festivales.'
    ],
    suggestedDegrees: ['Cine y Medios Audiovisuales', 'Comunicación Visual', 'Artes Digitales'],
    freeResources: [
      { title: 'StudioBinder: Clases maestras de dirección y cinematografía', type: 'YouTube' },
      { title: 'Canal Film Riot & guiones maestros abiertos', type: 'Guías Web' }
    ],
    ikigai: {
      passion: 'Contar historias que ericen la piel y despierten emociones auténticas.',
      mission: 'Amplificar voces necesarias y transformar conciencias a través del arte.',
      vocation: 'Narradora de historias y visionaria audiovisual.',
      profession: 'Directora Creativa y Productora de Contenidos.'
    }
  },
  {
    id: 'digital-marketing-branding',
    title: 'Marketing Estratégico, Branding & Redes',
    category: 'Negocios & Creatividad',
    emoji: '📈💎',
    vibe: 'Construir marcas icónicas, tendencias virales y negocios',
    matchHolland: ['E', 'A', 'S'],
    tags: ['Marketing', 'Estrategia', 'Redes Sociales', 'Psicología'],
    summary: 'Construye la identidad de marcas, diseña campañas virales y conecta proyectos increíbles con audiencias de todo el mundo.',
    fullDescription: 'Las estrategas de marketing digital combinan creatividad publicitaria con psicología del consumidor y análisis de tendencias. Desde crear comunidades leales en redes sociales hasta gestionar lanzamientos millonarios, impulsas el crecimiento de proyectos con propósito.',
    remoteFriendly: true,
    dailyTasks: [
      'Diseñar la narrativa y tono de voz de marcas emergentes.',
      'Planificar estrategias de contenido para TikTok, Instagram y YouTube.',
      'Analizar métricas de impacto para optimizar campañas en tiempo real.',
      'Coordinar alianzas con creadoras de contenido e influencers afines.'
    ],
    dayTimeline: [
      { time: '09:30 AM', emoji: '📱', activity: 'Trend Scouting', description: 'Revisas qué es tendencia hoy en TikTok y qué temas están viralizándose.' },
      { time: '11:00 AM', emoji: '💡', activity: 'Diseño de Campaña', description: 'Escribes los conceptos y la narrativa para el gran lanzamiento de temporada.' },
      { time: '01:30 PM', emoji: '🥗', activity: 'Comida & Networking', description: 'Comida con amigas o socias platicando sobre ideas de negocio.' },
      { time: '03:30 PM', emoji: '📊', activity: 'Análisis de Métricas', description: 'Revisas cómo la campaña creció un 200% y qué publicaciones generaron más ventas.' },
      { time: '05:00 PM', emoji: '✨', activity: 'Alianzas con Creadores', description: 'Contactas a tus creadoras favoritas para colaborar en un proyecto con causa.' }
    ],
    keySkills: ['Storytelling persuasivo', 'Cultura digital y tendencias', 'Estrategia comercial', 'Creatividad publicitaria'],
    growthOutlook: 'Muy Alta (Todas las empresas del mundo necesitan marketing)',
    salaryLevel: 'Medio - Alto ($1,200 a $4,000+ USD en remoto)',
    typicalRoles: ['Brand Strategist', 'Growth Marketing Manager', 'Creative Director', 'CMO'],
    pros: [
      'Resultados tangibles inmediatos: ves cómo tus ideas se viralizan y generan impacto.',
      'Flexibilidad total para trabajar como nómada digital o consultora independiente.',
      'Dinamismo absoluto: ningún día es igual al anterior.'
    ],
    challenges: [
      'Los algoritmos de redes sociales cambian con frecuencia.',
      'Exige aprender a manejar métricas de desempeño con agilidad.'
    ],
    suggestedDegrees: ['Mercadotecnia / Marketing Digital', 'Publicidad y Relaciones Públicas', 'Comunicación Estratégica'],
    freeResources: [
      { title: 'HubSpot Academy: Certificaciones oficiales gratuitas', type: 'HubSpot' },
      { title: 'Google Digital Garage: Fundamentos de Marketing', type: 'Google' }
    ],
    ikigai: {
      passion: 'Conectar historias con personas e inspirar acciones memorables.',
      mission: 'Ayudar a proyectos con propósito a encontrar su voz y multiplicar su alcance.',
      vocation: 'Comunicadora persuasiva y estratega de marca.',
      profession: 'Directora de Marketing Digital o Consultora de Branding.'
    }
  },
  {
    id: 'architecture-sustainability',
    title: 'Arquitectura & Diseño de Espacios Sostenibles',
    category: 'Creatividad & Espacio',
    emoji: '📐🌿',
    vibe: 'Estética 3D, casas hermosas y armonía con la naturaleza',
    matchHolland: ['A', 'R', 'I'],
    tags: ['Arquitectura', 'Diseño', 'Sostenibilidad', 'Espacio'],
    summary: 'Diseña hogares hermosos, espacios bioclimáticos y ciudades verdes que convivan en perfecta armonía con la naturaleza.',
    fullDescription: 'La arquitectura es la escultura que se puede habitar. Como arquitecta sostenible, fusionas arte, luz, materiales ecológicos y física para crear espacios que mejoran la felicidad de las personas y respetan el planeta.',
    remoteFriendly: false,
    dailyTasks: [
      'Diseñar modelos 3D y maquetas digitales de casas y edificios ecológicos.',
      'Calcular la iluminación natural y eficiencia energética de los espacios.',
      'Supervisar obras asegurando que el diseño se respete fielmente.',
      'Elegir texturas, materiales sostenibles y vegetación para cada proyecto.'
    ],
    dayTimeline: [
      { time: '09:00 AM', emoji: '☕', activity: 'Bocetos & Modelado 3D', description: 'Dibujas en tu iPad y modelas en Rhino el concepto de una casa bioclimática.' },
      { time: '11:30 AM', emoji: '🌿', activity: 'Selección de Materiales', description: 'Eliges maderas ecológicas, piedra natural y sistemas de captación de agua.' },
      { time: '01:30 PM', emoji: '🥪', activity: 'Almuerzo al Aire Libre', description: 'Comida con ingenieros y paisajistas afinando detalles constructivos.' },
      { time: '03:00 PM', emoji: '🏗️', activity: 'Visita a la Obra', description: 'Vas a la construcción con casco y planos para revisar que los muros queden perfectos.' },
      { time: '05:30 PM', emoji: '✨', activity: 'Renderizado Final', description: 'Generas imágenes hiperrealistas para mostrarle a tu cliente cómo se verá su hogar.' }
    ],
    keySkills: ['Visión espacial en 3D', 'Buen gusto estético', 'Conocimiento de materiales ecológicos', 'Gestión de proyectos'],
    growthOutlook: 'Alta (Transición ecológica global en la construcción)',
    salaryLevel: 'Medio - Alto ($1,200 a $4,000+ USD)',
    typicalRoles: ['Arquitecta Diseñadora', 'Especialista en Diseño Sostenible', 'Urbanista Verde', 'Directora de Despacho'],
    pros: [
      'Ver tus dibujos de papel convertidos en obras reales que perdurarán décadas.',
      'Equilibrio perfecto entre expresión artística y rigor técnico.',
      'Posibilidad de fundar tu propio estudio de arquitectura de autor.'
    ],
    challenges: [
      'Las entregas universitarias y en despachos exigen desvelos y entrega.',
      'Aprender a negociar con normativas municipales y presupuestos.'
    ],
    suggestedDegrees: ['Licenciatura en Arquitectura', 'Arquitectura del Paisaje', 'Urbanismo Sustentable'],
    freeResources: [
      { title: 'ArchDaily: Portal mundial de inspiración arquitectónica', type: 'Web' },
      { title: 'Tutoriales de modelado 3D en Blender y SketchUp', type: 'YouTube' }
    ],
    ikigai: {
      passion: 'Modelar el espacio, la luz y la belleza tangible.',
      mission: 'Construir un hábitat humano regenerativo y en paz con la naturaleza.',
      vocation: 'Creadora de espacios y edificadora del futuro.',
      profession: 'Arquitecta Principal o Consultora de Urbanismo Ecológico.'
    }
  }
];
