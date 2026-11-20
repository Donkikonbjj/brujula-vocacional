import { Career } from '@/types';

export const CAREERS_DATABASE: Career[] = [
  // --- TECNOLOGÍA & DISEÑO DIGITAL ---
  {
    id: 'ux-ui-design',
    title: 'Diseño de Experiencia de Usuario (UX/UI)',
    category: 'Tecnología & Creatividad',
    matchHolland: ['A', 'S', 'I'],
    tags: ['Diseño', 'Creatividad', 'Tecnología', 'Empatía'],
    summary: 'Combina arte, empatía humana y tecnología para diseñar apps y sitios web intuitivos, hermosos y fáciles de usar.',
    fullDescription: 'La diseñadora de UX/UI es la arquitecta de la experiencia digital. Investiga cómo piensan y sienten los usuarios, crea bocetos interactivos y define la estética visual de productos que millones de personas usan a diario. Es la carrera ideal para quien ama el arte visual pero también la psicología y la innovación.',
    dailyTasks: [
      'Entrevistar a usuarios para entender sus frustraciones y deseos al usar una app.',
      'Crear prototipos interactivos en Figma con animaciones, colores y tipografías.',
      'Diseñar sistemas de diseño visual consistentes y accesibles.',
      'Colaborar con desarrolladores de software y líderes de producto.'
    ],
    keySkills: ['Empatía e investigación de usuarios', 'Figma y diseño visual', 'Pensamiento crítico y prototipado', 'Comunicación asertiva'],
    growthOutlook: 'Muy Alta',
    salaryLevel: 'Medio - Alto (con alta demanda remota global en USD)',
    typicalRoles: ['Product Designer', 'UX Researcher', 'UI Designer', 'Design System Lead'],
    pros: [
      'Fusión perfecta entre arte, psicología y tecnología sin necesidad de programar.',
      'Excelente flexibilidad para trabajar de forma remota para empresas internacionales.',
      'Portafolio visual que demuestra tu talento de forma directa e indiscutible.'
    ],
    challenges: [
      'Aprender a recibir retroalimentación constante sobre tus diseños.',
      'Mantenerse al día con nuevas tendencias y herramientas cada año.'
    ],
    suggestedDegrees: ['Diseño Gráfico / Digital', 'Diseño Interactivo', 'Comunicación Visual', 'Psicología Cognitiva + Bootcamps'],
    freeResources: [
      { title: 'Curso de UX/UI para principiantes en Figma', type: 'YouTube / Figma Community' },
      { title: 'Google UX Design Professional Certificate (Auditoría gratis)', type: 'Coursera' }
    ],
    ikigai: {
      passion: 'Crear belleza visual y experiencias que deleiten los sentidos.',
      mission: 'Hacer que la tecnología sea accesible, humana y libre de frustraciones.',
      vocation: 'Diseñadora de interacción y defensora del usuario.',
      profession: 'Product Designer / UX Specialist en startups o agencias globales.'
    }
  },
  {
    id: 'data-science-ai',
    title: 'Ciencia de Datos e Inteligencia Artificial',
    category: 'Tecnología & Ciencias',
    matchHolland: ['I', 'C', 'R'],
    tags: ['Matemáticas', 'IA', 'Investigación', 'Tecnología'],
    summary: 'Descubre patrones ocultos en grandes cantidades de información y entrena modelos de IA para resolver problemas globales.',
    fullDescription: 'Las científicas de datos transforman datos en decisiones trascendentales: desde predecir brotes epidemiológicos y optimizar el cambio climático hasta personalizar recomendaciones en streaming. Combina curiosidad científica con herramientas de programación estadística.',
    dailyTasks: [
      'Analizar conjuntos masivos de datos para encontrar correlaciones sorprendentes.',
      'Entrenar y evaluar modelos de Machine Learning y redes neuronales.',
      'Crear visualizaciones y dashboards claros que cuenten una historia con datos.',
      'Presentar hallazgos a equipos médicos, de negocios o científicos.'
    ],
    keySkills: ['Pensamiento analítico y matemático', 'Python / R y SQL', 'Curiosidad investigativa', 'Visualización de datos'],
    growthOutlook: 'Muy Alta',
    salaryLevel: 'Alto - Muy Alto (de las carreras mejor pagadas en el mundo)',
    typicalRoles: ['Data Scientist', 'Machine Learning Engineer', 'Data Analyst', 'AI Specialist'],
    pros: [
      'Enorme impacto en prácticamente cualquier industria (salud, finanzas, medio ambiente, arte).',
      'Salarios muy superiores al promedio y opciones globales.',
      'Un campo intelectualmente estimulante donde jamás te aburres.'
    ],
    challenges: [
      'Requiere una base sólida y paciencia con matemáticas, estadística y programación.',
      'Limpiar y estructurar datos suele consumir bastante tiempo.'
    ],
    suggestedDegrees: ['Ciencia de Datos', 'Ingeniería de Software / Sistemas', 'Matemáticas Aplicadas', 'Estadística'],
    freeResources: [
      { title: 'Python para Todos de Charles Severance', type: 'Curso Abierto' },
      { title: 'Kaggle Learn - Cursos interactivos gratuitos de Machine Learning', type: 'Kaggle' }
    ],
    ikigai: {
      passion: 'Descifrar misterios complejos y entender la verdad detrás de los números.',
      mission: 'Guiar a la humanidad con evidencia sólida y herramientas inteligentes.',
      vocation: 'Científica investigadora de patrones y predicciones.',
      profession: 'Lead Data Scientist o Investigadora de Inteligencia Artificial.'
    }
  },
  {
    id: 'software-engineering',
    title: 'Ingeniería de Software & Desarrollo Web / Móvil',
    category: 'Tecnología',
    matchHolland: ['I', 'R', 'C'],
    tags: ['Programación', 'Creación', 'Lógica', 'Resolución'],
    summary: 'Construye las aplicaciones, plataformas y herramientas digitales que mueven al mundo entero.',
    fullDescription: 'La ingeniería de software es como tener superpoderes creativos: con solo una computadora y tu mente, puedes crear productos que resuelvan la vida de millones de personas. Diseñas arquitecturas de sistemas, programas aplicaciones móviles y creas la lógica detrás de la web.',
    dailyTasks: [
      'Escribir código limpio y eficiente para crear nuevas funciones en aplicaciones.',
      'Detectar y resolver problemas técnicos complejos (debugging).',
      'Revisar código con colegas y planificar la arquitectura de nuevos sistemas.',
      'Asegurar que la plataforma sea veloz, segura y escalable.'
    ],
    keySkills: ['Pensamiento lógico y algorítmico', 'JavaScript/TypeScript, Python o Swift', 'Autodidactismo continuo', 'Trabajo colaborativo'],
    growthOutlook: 'Muy Alta',
    salaryLevel: 'Alto - Muy Alto',
    typicalRoles: ['Frontend Developer', 'Fullstack Engineer', 'Mobile App Developer', 'Tech Lead'],
    pros: [
      'Total libertad geográfica: trabajo 100% remoto común en todo el mundo.',
      'La satisfacción incomparable de ver funcionar una idea creada desde cero.',
      'Posibilidad de emprender tus propios proyectos digitales con bajo costo inicial.'
    ],
    challenges: [
      'Requiere tolerancia a la frustración cuando un error técnico toma tiempo en resolverse.',
      'La tecnología cambia rápido, demandando actualización constante.'
    ],
    suggestedDegrees: ['Ingeniería de Software', 'Ingeniería en Sistemas / Computación', 'Ciencias de la Computación'],
    freeResources: [
      { title: 'freeCodeCamp - Certificaciones completas 100% gratuitas', type: 'Plataforma Web' },
      { title: 'CS50 de Harvard: Introducción a la Computación', type: 'edX (Gratis)' }
    ],
    ikigai: {
      passion: 'Construir soluciones digitales elegantes que funcionen a la perfección.',
      mission: 'Democratizar el acceso a herramientas que faciliten la vida humana.',
      vocation: 'Arquitecta de software y creadora digital.',
      profession: 'Ingeniera de Software en startups de alto crecimiento o multinacionales.'
    }
  },
  {
    id: 'cybersecurity',
    title: 'Ciberseguridad & Defensa Digital',
    category: 'Tecnología & Seguridad',
    matchHolland: ['I', 'C', 'R'],
    tags: ['Seguridad', 'Privacidad', 'Investigación', 'Estrategia'],
    summary: 'Protege la privacidad de las personas, hospitales, gobiernos y empresas frente a ciberataques.',
    fullDescription: 'Las especialistas en ciberseguridad son las guardianas de la era digital. Investigan vulnerabilidades, simulan ataques (hacking ético) y diseñan protocolos impenetrables para salvaguardar datos confidenciales y la infraestructura crítica de la sociedad.',
    dailyTasks: [
      'Monitorear redes y sistemas en busca de actividad sospechosa o intrusiones.',
      'Realizar pruebas de penetración (hacking ético) para descubrir fallas antes que los atacantes.',
      'Diseñar planes de respuesta ante incidentes de seguridad y contingencias.',
      'Capacitar a organizaciones sobre cultura de protección y privacidad.'
    ],
    keySkills: ['Redes y sistemas operativos', 'Análisis forense digital', 'Pensamiento adversarial', 'Criptografía y ética'],
    growthOutlook: 'Muy Alta',
    salaryLevel: 'Alto - Muy Alto',
    typicalRoles: ['Ethical Hacker / Pentester', 'Security Analyst', 'CISO (Chief Information Security Officer)'],
    pros: [
      'Déficit global millonario de profesionales: empleo garantizado a nivel mundial.',
      'Sentimiento de protección social defendiendo a usuarios contra fraudes.',
      'Un trabajo dinámico que se siente como resolver acertijos de detectives en tiempo real.'
    ],
    challenges: [
      'Situaciones de guardia o respuesta rápida ante incidentes de emergencia.',
      'Requiere gran discreción, ética intachable y rigor metodológico.'
    ],
    suggestedDegrees: ['Ingeniería en Ciberseguridad', 'Ingeniería en Telecomunicaciones / Redes', 'Ciencias de la Computación'],
    freeResources: [
      { title: 'TryHackMe - Laboratorios prácticos guiados para principiantes', type: 'Plataforma Web' },
      { title: 'OverTheWire Wargames', type: 'Juego de aprendizaje práctico' }
    ],
    ikigai: {
      passion: 'Encontrar brechas y crear escudos de protección inquebrantables.',
      mission: 'Defender el derecho fundamental a la privacidad y seguridad digital.',
      vocation: 'Defensora y analista de seguridad.',
      profession: 'Auditora de Ciberseguridad y Especialista en Hacking Ético.'
    }
  },

  // --- SALUD & BIOCIENCIAS ---
  {
    id: 'biotechnology',
    title: 'Biotecnología & Genómica',
    category: 'Salud & Ciencias',
    matchHolland: ['I', 'R', 'S'],
    tags: ['Genética', 'Medicina', 'Sostenibilidad', 'Laboratorio'],
    summary: 'Aplica la ciencia biológica y la genética para crear nuevos medicamentos, terapias celulares y alimentos sostenibles.',
    fullDescription: 'La biotecnología es la frontera de la medicina del futuro. Las biotecnólogas manipulan microorganismos, editan genes y diseñan moléculas para curar enfermedades raras, desarrollar vacunas de última generación y encontrar soluciones biológicas al cambio climático.',
    dailyTasks: [
      'Realizar experimentos con cultivos celulares, enzimas y secuenciación de ADN.',
      'Interpretar resultados biomoleculares con software bioinformático.',
      'Documentar protocolos de laboratorio y ensayos preclínicos con rigurosidad.',
      'Trabajar en equipo con médicos y químicos farmacéuticos.'
    ],
    keySkills: ['Técnicas de laboratorio molecular', 'Bioinformática básica', 'Rigor científico y paciencia', 'Pensamiento biológico integrado'],
    growthOutlook: 'Muy Alta',
    salaryLevel: 'Medio - Alto',
    typicalRoles: ['Biotecnóloga Médica', 'Bioinformática', 'Investigadora en Terapias Génicas', 'Gerente de Control Biológico'],
    pros: [
      'Impacto directo y profundo en la salud y la prolongación de la vida humana.',
      'Campo en explosión gracias a la edición genética (CRISPR) y medicina personalizada.',
      'Posibilidad de trabajar tanto en laboratorios de investigación como en la industria farmacéutica.'
    ],
    challenges: [
      'Los experimentos científicos pueden tardar meses en dar resultados concluyentes.',
      'Frecuentemente se recomienda posgrado (Maestría o Doctorado) para liderar investigaciones.'
    ],
    suggestedDegrees: ['Biotecnología', 'Bioquímica', 'Biología Molecular', 'Ingeniería Biomédica'],
    freeResources: [
      { title: 'Khan Academy: Biología y Genética Avanzada', type: 'Khan Academy' },
      { title: 'Nature / Science Podcasts sobre Biotecnología', type: 'Podcast' }
    ],
    ikigai: {
      passion: 'Comprender el milagro del código de la vida a nivel molecular.',
      mission: 'Erradicar enfermedades incurables y generar bio-soluciones sostenibles.',
      vocation: 'Científica e innovadora en ciencias de la vida.',
      profession: 'Investigadora en Biotecnología Médica o Farmacéutica.'
    }
  },
  {
    id: 'psychology-neuroscience',
    title: 'Psicología Clínica & Neurociencias',
    category: 'Salud Mental & Bienestar',
    matchHolland: ['S', 'I', 'A'],
    tags: ['Salud Mental', 'Empatía', 'Cerebro', 'Escucha'],
    summary: 'Comprende el funcionamiento de la mente, las emociones y el cerebro para sanar y potenciar el bienestar de las personas.',
    fullDescription: 'La psicología y la neurociencia estudian el universo más fascinante: el cerebro y la conducta humana. Ya sea en terapia clínica, neuropsicología, psicología escolar o bienestar organizacional, tu labor transforma el sufrimiento humano en crecimiento, autoconocimiento y plenitud.',
    dailyTasks: [
      'Brindar sesiones terapéuticas con escucha empática y técnicas basadas en evidencia.',
      'Aplicar evaluaciones psicométricas y de funcionamiento neurocognitivo.',
      'Diseñar planes de intervención personalizados para ansiedad, depresión o duelo.',
      'Impartir talleres de inteligencia emocional y salud mental en comunidades o empresas.'
    ],
    keySkills: ['Escucha activa y profunda empatía', 'Inteligencia emocional y contención', 'Pensamiento crítico y diagnóstico', 'Ética y confidencialidad absoluta'],
    growthOutlook: 'Muy Alta (creciente conciencia global sobre salud mental)',
    salaryLevel: 'Medio - Alto (especialmente con consulta privada o especialidad corporativa)',
    typicalRoles: ['Psicóloga Clínica', 'Neuropsicóloga', 'Psicoterapeuta Cognitivo-Conductual', 'Coach de Salud Mental'],
    pros: [
      'Gratitud infinita al ver a tus pacientes transformar sus vidas y sanar.',
      'Libertad de horarios y autonomía absoluta al tener tu propio consultorio.',
      'Habilidades vitales que enriquecen profundamente tus relaciones y madurez personal.'
    ],
    challenges: [
      'Requiere aprender a gestionar el desgaste emocional (autocuidado terapéutico).',
      'Exige formación continua y supervisión constante de casos.'
    ],
    suggestedDegrees: ['Licenciatura en Psicología', 'Neurociencias', 'Medicina (para Psiquiatría posterior)'],
    freeResources: [
      { title: 'The Huberman Lab Podcast: Neurobiología y Comportamiento', type: 'Podcast Científico' },
      { title: 'Yale University: The Science of Well-Being (Gratis en Coursera)', type: 'Coursera' }
    ],
    ikigai: {
      passion: 'Escuchar el corazón de las personas y entender cómo opera el cerebro.',
      mission: 'Llevar paz, sanación y herramientas de vida a quienes sufren en silencio.',
      vocation: 'Terapeuta, guía emocional y científica de la conducta.',
      profession: 'Psicóloga Especialista o Neurocientífica Aplicada.'
    }
  },
  {
    id: 'biomedical-engineering',
    title: 'Ingeniería Biomédica & Prótesis Biónicas',
    category: 'Salud & Ingeniería',
    matchHolland: ['R', 'I', 'S'],
    tags: ['Ingeniería', 'Medicina', 'Hardware', 'Innovación'],
    summary: 'Diseña órganos artificiales, prótesis robóticas inteligentes y equipos médicos de vanguardia.',
    fullDescription: 'La ingeniería biomédica une lo mejor de la ingeniería con el servicio a la salud. Creas prótesis biónicas que devuelven la movilidad a pacientes amputados, respiradores neonatales, resonancias magnéticas y dispositivos de monitoreo en tiempo real.',
    dailyTasks: [
      'Diseñar modelos 3D y circuitos electrónicos para dispositivos médicos.',
      'Probar prototipos de prótesis con sensores mioeléctricos en laboratorio.',
      'Asegurar el cumplimiento de normas de seguridad clínica y biocompatibilidad.',
      'Capacitar a cirujanos y personal médico en el uso de nueva tecnología.'
    ],
    keySkills: ['Biomecánica y electrónica', 'Diseño CAD en 3D', 'Conocimientos de anatomía y fisiología', 'Innovación tecnológica'],
    growthOutlook: 'Alta',
    salaryLevel: 'Alto',
    typicalRoles: ['Ingeniera de Dispositivos Médicos', 'Especialista en Biomecánica', 'Líder de I+D en Hospitales'],
    pros: [
      'Ver a una persona volver a caminar o abrazar gracias a una prótesis que tú diseñaste.',
      'Unión perfecta entre pasión por la salud y talento por la tecnología/física.',
      'Alta presencia en empresas internacionales de tecnología médica.'
    ],
    challenges: [
      'Procesos regulatorios estrictos antes de que un invento pueda usarse en humanos.',
      'Curva exigente que integra física, matemáticas, biología y programación.'
    ],
    suggestedDegrees: ['Ingeniería Biomédica', 'Ingeniería Mecatrónica con enfoque en Salud'],
    freeResources: [
      { title: 'Canal Biomédico e ingeniería médica en MIT OpenCourseWare', type: 'Curso Abierto' }
    ],
    ikigai: {
      passion: 'Inventar mecanismos que emulen y mejoren el cuerpo humano.',
      mission: 'Devolver la calidad de vida y autonomía a personas con discapacidades.',
      vocation: 'Inventora y constructora para la salud.',
      profession: 'Ingeniera Biomédica de Innovación Clínica.'
    }
  },
  {
    id: 'medicine-pediatrics',
    title: 'Medicina & Pediatría / Cirugía',
    category: 'Salud & Ciencias Médicas',
    matchHolland: ['I', 'S', 'R'],
    tags: ['Medicina', 'Vocación', 'Cuidado', 'Ciencia'],
    summary: 'Dedica tu vida a diagnosticar, curar y acompañar a personas en los momentos de mayor vulnerabilidad física.',
    fullDescription: 'La medicina es una de las profesiones más nobles y respetadas de la historia. Como médica, aplicas la ciencia más rigurosa para salvar vidas, aliviar el dolor físico y brindar esperanza a pacientes y sus familias desde el primer momento.',
    dailyTasks: [
      'Examinar pacientes, solicitar estudios de laboratorio y emitir diagnósticos precisos.',
      'Prescribir tratamientos y realizar procedimientos clínicos o quirúrgicos.',
      'Acompañar y tranquilizar a las familias con comunicación clara y cálida.',
      'Actualizarse permanentemente en avances farmacológicos y guías clínicas.'
    ],
    keySkills: ['Rigor diagnóstico y observación aguda', 'Empatía y temple bajo presión', 'Compromiso ético incuestionable', 'Habilidad quirúrgica o de trato humano'],
    growthOutlook: 'Estable / Permanente (demanda inagotable)',
    salaryLevel: 'Alto - Muy Alto (con especialidad médica)',
    typicalRoles: ['Médica Cirujana', 'Pediatra', 'Médica de Urgencias', 'Investigadora Clínica'],
    pros: [
      'El honor inigualable de salvar vidas y ser el pilar de salud de tu comunidad.',
      'Respeto social, estabilidad profesional para toda la vida.',
      'Infinidad de especialidades para encontrar tu verdadera pasión médica.'
    ],
    challenges: [
      'Carrera larga (6-7 años de carrera más 3-5 años de especialidad).',
      'Guardias hospitalarias exigentes que requieren resiliencia física y mental.'
    ],
    suggestedDegrees: ['Médico Cirujano / Medicina General', 'Especialidad Médica'],
    freeResources: [
      { title: 'Anatomía Humana 3D interactiva (Complete Anatomy / Kenhub)', type: 'Herramienta de estudio' },
      { title: 'Casos clínicos de The New England Journal of Medicine (NEJM)', type: 'Lectura Médica' }
    ],
    ikigai: {
      passion: 'El milagro del cuerpo humano y la vocación de aliviar el sufrimiento.',
      mission: 'Proteger la vida y velar por la salud de los más vulnerables.',
      vocation: 'Sanadora y médica compasiva.',
      profession: 'Médica Especialista en Hospital o Clínica de Alta Especialidad.'
    }
  },

  // --- CREATIVIDAD, MEDIOS & COMUNICACIÓN ---
  {
    id: 'multimedia-direction',
    title: 'Dirección Creativa & Narrativa Transmedia',
    category: 'Creatividad & Medios',
    matchHolland: ['A', 'E', 'S'],
    tags: ['Cine', 'Narrativa', 'Arte', 'Liderazgo'],
    summary: 'Crea historias cautivadoras para cine, series de streaming, animación, videojuegos y campañas de marcas globales.',
    fullDescription: 'La directora creativa es la mente que orquesta el universo visual y narrativo de un proyecto. Desde escribir guiones y dirigir a actores o animadores hasta definir la emoción que transmitirá un documental o videojuego, tu visión conecta con el alma de audiencias masivas.',
    dailyTasks: [
      'Escribir y pulir guiones, tratamientos visuales y moodboards de inspiración.',
      'Dirigir rodajes, sesiones de grabación de sonido o equipos de animación 3D.',
      'Supervisar la edición, corrección de color y banda sonora de las producciones.',
      'Defender conceptos creativos ante productoras, marcas o festivales de cine.'
    ],
    keySkills: ['Narrativa y storytelling poderoso', 'Sensibilidad estética y composición visual', 'Liderazgo inspirador de equipos artísticos', 'Cultura visual y cinematográfica'],
    growthOutlook: 'Alta (auge continuo del streaming y entretenimiento digital)',
    salaryLevel: 'Variable (desde medio hasta muy alto según proyectos y reconocimiento)',
    typicalRoles: ['Directora Creativa', 'Showrunner / Guionista', 'Directora de Cine / Documentales', 'Directora de Arte'],
    pros: [
      'Crear mundos que conmuevan, eduquen y trasciendan en la cultura popular.',
      'Trabajo cero rutinario: cada película, serie o comercial es una aventura distinta.',
      'Poder viajar a festivales, rodajes internacionales y conectar con talentos brillantes.'
    ],
    challenges: [
      'Mercado competitivo que premia la perseverancia y un portafolio sólido.',
      'Jornadas intensas durante etapas de rodaje o entregas finales.'
    ],
    suggestedDegrees: ['Cine y Producción Audiovisual', 'Comunicación y Medios Digitales', 'Artes Visuales'],
    freeResources: [
      { title: 'StudioBinder: Clases magistrales de dirección y guionismo', type: 'YouTube' },
      { title: 'MasterClass / BBC Academy artículos sobre storytelling', type: 'Guías Abiertas' }
    ],
    ikigai: {
      passion: 'Contar historias que ericen la piel y despierten emociones auténticas.',
      mission: 'Amplificar voces necesarias y transformar conciencias a través del arte.',
      vocation: 'Narradora de historias y visionaria audiovisual.',
      profession: 'Directora Creativa y Productora de Contenidos.'
    }
  },
  {
    id: 'architecture-sustainability',
    title: 'Arquitectura & Urbanismo Sostenible',
    category: 'Creatividad & Construcción',
    matchHolland: ['A', 'R', 'I'],
    tags: ['Arquitectura', 'Diseño', 'Sostenibilidad', 'Espacio'],
    summary: 'Diseña hogares hermosos, edificios bioclimáticos y ciudades ecológicas que convivan en armonía con la naturaleza.',
    fullDescription: 'La arquitectura es la escultura que se puede habitar. Como arquitecta sostenible, fusionas arte, luz, materiales ecológicos y física para crear espacios que mejoran la felicidad de las personas y respetan el planeta, reduciendo el consumo de energía y agua.',
    dailyTasks: [
      'Dibujar bocetos y diseñar modelos 3D y maquetas digitales de edificios.',
      'Calcular asoleamiento, ventilación natural y eficiencia energética de los espacios.',
      'Supervisar obras en construcción asegurando que el diseño se respete fielmente.',
      'Reunirse con clientes para interpretar sus sueños y adaptarlos al presupuesto.'
    ],
    keySkills: ['Visión espacial y diseño 3D (Revit, Rhino, AutoCAD)', 'Sensibilidad artística y estética', 'Conocimientos de materiales sostenibles', 'Gestión de proyectos constructivos'],
    growthOutlook: 'Alta (revolución verde en la construcción global)',
    salaryLevel: 'Medio - Alto',
    typicalRoles: ['Arquitecta Diseñadora', 'Especialista en Edificación Sostenible (LEED)', 'Urbanista', 'Directora de Obra'],
    pros: [
      'Ver tus dibujos de papel convertidos en obras monumentales que perdurarán décadas.',
      'Equilibrio perfecto entre expresión artística y rigor técnico.',
      'La posibilidad de fundar tu propio estudio de arquitectura de autor.'
    ],
    challenges: [
      'Las entregas de proyectos en la universidad y en el despacho exigen desvelos y entrega.',
      'Negociar con normativas municipales y presupuestos ajustados.'
    ],
    suggestedDegrees: ['Licenciatura en Arquitectura', 'Arquitectura del Paisaje', 'Urbanismo'],
    freeResources: [
      { title: 'ArchDaily: Plataforma de referencia mundial de proyectos de arquitectura', type: 'Web' },
      { title: 'Tutoriales básicos de modelado 3D en SketchUp y Blender', type: 'YouTube' }
    ],
    ikigai: {
      passion: 'Modelar el espacio, la luz y la belleza tangible.',
      mission: 'Construir un hábitat humano regenerativo y en paz con la naturaleza.',
      vocation: 'Creadora de espacios y edificadora del futuro.',
      profession: 'Arquitecta Principal o Consultora de Urbanismo Ecológico.'
    }
  },
  {
    id: 'digital-marketing-branding',
    title: 'Marketing Digital, Estrategia de Marca & Growth',
    category: 'Negocios & Creatividad',
    matchHolland: ['E', 'A', 'S'],
    tags: ['Marketing', 'Estrategia', 'Redes Sociales', 'Psicología'],
    summary: 'Posiciona marcas, diseña campañas virales y conecta productos valiosos con las personas adecuadas.',
    fullDescription: 'Las estrategas de marketing digital combinan creatividad publicitaria, psicología del consumidor y análisis de métricas. Desde crear comunidades leales en redes sociales hasta gestionar millones en inversión de anuncios, impulsas el crecimiento de empresas y causas con visión.',
    dailyTasks: [
      'Diseñar la narrativa y tono de voz de marcas emergentes.',
      'Planificar y optimizar campañas en TikTok, Instagram, Google y YouTube.',
      'Analizar métricas de conversión, tráfico e impacto de cada contenido.',
      'Coordinar lanzamientos con creadores de contenido e influencers afines.'
    ],
    keySkills: ['Storytelling comercial y persuasión', 'Análisis de datos y métricas (ROI, CAC)', 'Dominio de redes y tendencias culturales', 'Creatividad estratégica'],
    growthOutlook: 'Muy Alta',
    salaryLevel: 'Medio - Alto',
    typicalRoles: ['Brand Strategist', 'Growth Marketing Manager', 'Social Media Director', 'Chief Marketing Officer (CMO)'],
    pros: [
      'Resultados tangibles inmediatos: ves cómo una idea creativa genera ventas en minutos.',
      'Flexibilidad total para trabajar como nómada digital o consultora independiente.',
      'Dinamismo constante: jamás te estancas en rutinas repetitivas.'
    ],
    challenges: [
      'Los algoritmos de las plataformas digitales cambian frecuentemente.',
      'La presión por mantener métricas de crecimiento semana a semana.'
    ],
    suggestedDegrees: ['Mercadotecnia / Marketing Digital', 'Publicidad y Relaciones Públicas', 'Comunicación Estratégica'],
    freeResources: [
      { title: 'HubSpot Academy: Certificaciones gratuitas oficiales de Inbound Marketing', type: 'HubSpot' },
      { title: 'Google Digital Garage: Fundamentos de Marketing Digital', type: 'Google' }
    ],
    ikigai: {
      passion: 'Conectar historias con personas e inspirar acciones memorables.',
      mission: 'Ayudar a proyectos con propósito a encontrar su voz y multiplicar su alcance.',
      vocation: 'Comunicadora persuasiva y estratega de marca.',
      profession: 'Directora de Marketing Digital o Consultora de Branding.'
    }
  },

  // --- NEGOCIOS, LIDERAZGO & EMPRENDIMIENTO ---
  {
    id: 'entrepreneurship-innovation',
    title: 'Emprendimiento & Gestión de Innovación',
    category: 'Negocios & Liderazgo',
    matchHolland: ['E', 'S', 'I'],
    tags: ['Emprendimiento', 'Liderazgo', 'Startups', 'Impacto'],
    summary: 'Identifica oportunidades donde otros ven problemas, crea tu propia empresa y lidera equipos hacia el éxito.',
    fullDescription: 'Las emprendedoras son el motor del cambio económico y social. En lugar de encajar en un puesto existente, creas tu propia organización, recaudas inversión, diseñas soluciones revolucionarias y guías a talentos multidisciplinarios con visión audaz.',
    dailyTasks: [
      'Validar modelos de negocio con clientes potenciales y realizar pruebas piloto.',
      'Presentar pitches de inversión ante fondos de capital de riesgo (Venture Capital).',
      'Reclutar y motivar a un equipo de ensueño con cultura positiva.',
      'Tomar decisiones estratégicas financieras y operativas bajo incertidumbre.'
    ],
    keySkills: ['Liderazgo y resiliencia ante el fracaso', 'Visión comercial y negociación', 'Pensamiento ágil (Design Thinking, Lean Startup)', 'Networking y oratoria'],
    growthOutlook: 'Muy Alta (el ecosistema de startups crece exponencialmente)',
    salaryLevel: 'Sin techo (vinculado al éxito y acciones de la empresa)',
    typicalRoles: ['Founder / CEO de Startup', 'Directora de Innovación Abierta', 'Venture Builder', 'Product Manager'],
    pros: [
      'Libertad absoluta para ser tu propia jefa y marcar tus propias reglas.',
      'El orgullo incomparable de construir algo de valor que da trabajo a otros.',
      'Aprendizaje acelerado: en 2 años aprendes lo que otros en una década.'
    ],
    challenges: [
      'Incertidumbre financiera en las fases iniciales del negocio.',
      'Requiere altísima tolerancia a la frustración y perseverancia indomable.'
    ],
    suggestedDegrees: ['Administración y Dirección de Empresas', 'Innovación y Emprendimiento', 'Ingeniería en Gestión Empresarial'],
    freeResources: [
      { title: 'Y Combinator Startup School (Curso 100% gratuito de los creadores de Airbnb y Stripe)', type: 'Startup School' },
      { title: 'Libro gratuito / resúmenes de "The Lean Startup" de Eric Ries', type: 'Libro' }
    ],
    ikigai: {
      passion: 'Hacer realidad ideas ambiciosas y mover voluntades.',
      mission: 'Generar riqueza compartida, innovación y soluciones que mejoren el mundo.',
      vocation: 'Líder fundadora y constructora de futuro.',
      profession: 'CEO de su propia empresa o Directora de Innovación.'
    }
  },
  {
    id: 'sustainable-finance',
    title: 'Finanzas Sostenibles & Fintech',
    category: 'Negocios & Economía',
    matchHolland: ['C', 'E', 'I'],
    tags: ['Finanzas', 'Inversión', 'Estrategia', 'Sostenibilidad'],
    summary: 'Canaliza millones en capital e inversión hacia proyectos verdes, energías limpias y tecnología de inclusión financiera.',
    fullDescription: 'Las finanzas ya no son solo números fríos: las finanzas sostenibles (criterios ESG) deciden a qué empresas se les otorga capital según su impacto ambiental y social. Además, las Fintech crean aplicaciones que permiten a millones de personas sin cuenta bancaria ahorrar e invertir.',
    dailyTasks: [
      'Analizar estados financieros y proyecciones de retorno de inversión.',
      'Evaluar riesgos climáticos y sociales en carteras de inversión multimillonarias.',
      'Estructurar bonos verdes y vehículos de financiamiento de impacto.',
      'Diseñar estrategias de inversión ética para fondos de pensiones e instituciones.'
    ],
    keySkills: ['Modelación financiera en Excel y Python', 'Pensamiento cuantitativo y rigor', 'Evaluación de riesgos ESG', 'Estrategia macroeconómica'],
    growthOutlook: 'Muy Alta (mandato global de descarbonización financiera)',
    salaryLevel: 'Alto - Muy Alto (de los sectores corporativos más lucrativos)',
    typicalRoles: ['ESG Investment Analyst', 'Fintech Strategist', 'Portfolio Manager', 'Directora de Finanzas (CFO)'],
    pros: [
      'Gran poder de decisión: canalizar el dinero del mundo hacia causas sostenibles reales.',
      'Remuneración financiera muy atractiva y bonos de desempeño elevados.',
      'Prestigio profesional y proyección internacional en los centros financieros del mundo.'
    ],
    challenges: [
      'Entornos competitivos con alta exigencia de precisión en plazos apretados.',
      'Requiere dominar terminología económica y análisis cuantitativo riguroso.'
    ],
    suggestedDegrees: ['Finanzas', 'Economía', 'Actuaría', 'Ingeniería Financiera'],
    freeResources: [
      { title: 'Cursos abiertos de Introducción a las Finanzas Corporativas de Wharton', type: 'Coursera' },
      { title: 'Investopedia: Guías completas de conceptos financieros y ESG', type: 'Web' }
    ],
    ikigai: {
      passion: 'Dominar la maquinaria del capital y los mercados globales.',
      mission: 'Lograr que el dinero sirva para salvar el planeta y democratizar la prosperidad.',
      vocation: 'Estratega de capital e inversora de impacto.',
      profession: 'Analista de Inversión Sostenible o CFO.'
    }
  },
  {
    id: 'international-relations',
    title: 'Relaciones Internacionales, Diplomacia & ONGs',
    category: 'Social & Política Global',
    matchHolland: ['S', 'E', 'I'],
    tags: ['Diplomacia', 'Idiomas', 'Paz', 'Negociación'],
    summary: 'Representa a tu país o a organismos internacionales (ONU, OEA, Cruz Roja) para promover la paz y los derechos humanos.',
    fullDescription: 'Las internacionalistas tejen puentes entre culturas, naciones y gobiernos. Negocian tratados de cooperación, gestionan ayuda humanitaria en zonas de crisis y defienden acuerdos climáticos globales, utilizando la palabra, la empatía y la diplomacia estratégica.',
    dailyTasks: [
      'Redactar informes de política exterior y análisis geopolítico.',
      'Participar en mesas de negociación multilateral y asambleas internacionales.',
      'Coordinar programas de cooperación para el desarrollo y refugiados.',
      'Gestionar vínculos con embajadas, cumbres mundiales y cancillerías.'
    ],
    keySkills: ['Dominio de múltiples idiomas (inglés, francés, etc.)', 'Negociación intercultural y protocolo', 'Análisis geopolítico y derecho internacional', 'Oratoria diplomática'],
    growthOutlook: 'Estable / Alta',
    salaryLevel: 'Medio - Alto (con beneficios de servicio exterior y viáticos)',
    typicalRoles: ['Diplomática de Carrera', 'Oficial de Asuntos Políticos en la ONU', 'Directora de Cooperación Internacional', 'Consultora de Riesgo Político'],
    pros: [
      'Oportunidad de vivir en diferentes países y enriquecerte con diversas culturas.',
      'Participar en decisiones históricas que previenen conflictos y protegen vidas.',
      'Una red de contactos global de líderes, activistas e intelectuales.'
    ],
    challenges: [
      'Procesos de ingreso a cuerpos diplomáticos muy rigurosos y selectivos.',
      'Mudanzas frecuentes que requieren adaptación y flexibilidad familiar.'
    ],
    suggestedDegrees: ['Relaciones Internacionales', 'Ciencias Políticas y Administración Pública', 'Derecho Internacional'],
    freeResources: [
      { title: 'UN iLibrary: Documentos, cursos e informes de la ONU gratuitos', type: 'ONU' },
      { title: 'Modelos de Naciones Unidas (MUN) y foros juveniles de debate', type: 'Práctica' }
    ],
    ikigai: {
      passion: 'Los idiomas, la historia del mundo y la justicia global.',
      mission: 'Construir paz, dignidad y puentes de diálogo entre pueblos.',
      vocation: 'Diplomática, pacificadora y embajadora cultural.',
      profession: 'Cónsul, Delegada Internacional o Líder de ONG Global.'
    }
  },

  // --- CIENCIAS & SOSTENIBILIDAD ---
  {
    id: 'environmental-engineering',
    title: 'Ingeniería Ambiental & Energías Renovables',
    category: 'Ciencias & Sostenibilidad',
    matchHolland: ['R', 'I', 'S'],
    tags: ['Medio Ambiente', 'Energía Solar', 'Ecología', 'Ingeniería'],
    summary: 'Lidera la transición energética instalando parques solares, eólicos y sistemas de restauración de ecosistemas.',
    fullDescription: 'La ingeniera ambiental diseña soluciones tecnológicas urgentes para frenar la crisis climática: desde la gestión circular del agua y tratamiento de residuos hasta el diseño de gigantescos parques solares y eólicos que reemplacen a los combustibles fósiles.',
    dailyTasks: [
      'Realizar estudios de impacto ambiental y huella de carbono de proyectos industriales.',
      'Diseñar plantas de tratamiento de agua residual y sistemas de reciclaje avanzado.',
      'Calcular la viabilidad y rendimiento de instalaciones solares y eólicas.',
      'Asesorar a ciudades y empresas en planes de cero emisiones netas.'
    ],
    keySkills: ['Química y física ambiental', 'Energías limpias y termodinámica', 'Legislación ecológica', 'Pasión por la naturaleza y trabajo en campo'],
    growthOutlook: 'Muy Alta (sector prioritario para las próximas 3 décadas)',
    salaryLevel: 'Medio - Alto',
    typicalRoles: ['Ingeniera de Energías Renovables', 'Consultora de Sostenibilidad', 'Auditora Ambiental', 'Gerente de Eco-Eficiencia'],
    pros: [
      'Saber con certeza que tu trabajo cotidiano está rescatando el planeta para futuras generaciones.',
      'Excelente combinación de trabajo en laboratorio/oficina con salidas a la naturaleza.',
      'Financiamiento mundial masivo volcado hacia proyectos verdes.'
    ],
    challenges: [
      'Enfrentar la lentitud política o resistencia de algunas industrias tradicionales.',
      'Trabajo en campo bajo diferentes condiciones climáticas.'
    ],
    suggestedDegrees: ['Ingeniería Ambiental', 'Ingeniería en Energías Renovables', 'Ciencias Ambientales'],
    freeResources: [
      { title: 'Project Drawdown: Las 100 soluciones más efectivas al cambio climático', type: 'Recurso Web' },
      { title: 'Cursos de Energía Solar y Renovable en Coursera y edX', type: 'Cursos Abiertos' }
    ],
    ikigai: {
      passion: 'La naturaleza, los animales y el amor por la Tierra.',
      mission: 'Revertir el daño ecológico y asegurar un planeta verde y habitable.',
      vocation: 'Ingeniera restauradora de ecosistemas.',
      profession: 'Directora de Energías Renovables o Especialista en Restauración Ambiental.'
    }
  },

  // --- EDUCACIÓN & IMPACTO SOCIAL ---
  {
    id: 'edtech-pedagogy',
    title: 'Innovación Educativa & EdTech',
    category: 'Educación & Tecnología',
    matchHolland: ['S', 'A', 'E'],
    tags: ['Educación', 'Gamificación', 'Infancia', 'Tecnología'],
    summary: 'Revoluciona la forma en que los niños y jóvenes aprenden usando videojuegos educativos, apps e inteligencia artificial.',
    fullDescription: 'La educación tradicional está transformándose. Las pedagogas innovadoras y diseñadoras de aprendizaje crean experiencias memorables, aplicaciones gamificadas (como Duolingo) y contenidos que despiertan el amor por aprender en millones de estudiantes en todo el planeta.',
    dailyTasks: [
      'Diseñar planes de aprendizaje basados en neuroeducación y metodologías activas.',
      'Crear experiencias educativas interactivas con realidad virtual o simulaciones.',
      'Capacitar a docentes en el uso de herramientas modernas sin perder el calor humano.',
      'Evaluar el progreso y la motivación de los estudiantes con datos analíticos.'
    ],
    keySkills: ['Pedagogía y neurociencia del aprendizaje', 'Diseño instruccional y gamificación', 'Empatía y paciencia con infancias y jóvenes', 'Creatividad didáctica'],
    growthOutlook: 'Alta',
    salaryLevel: 'Medio - Alto (especialmente en startups de tecnología educativa)',
    typicalRoles: ['Instructional Designer', 'EdTech Product Specialist', 'Directora de Innovación Escolar', 'Creadora de Contenidos Educativos'],
    pros: [
      'Encender la chispa del conocimiento en una persona es uno de los legados más hermosos.',
      'Posibilidad de impactar a miles de personas simultáneamente a través de apps.',
      'Ambiente laboral cálido, humano e inspirador.'
    ],
    challenges: [
      'En escuelas tradicionales a veces hay resistencia al cambio tecnológico.',
      'Mantener la atención de las nuevas generaciones con estímulos digitales constantes.'
    ],
    suggestedDegrees: ['Pedagogía / Ciencias de la Educación', 'Psicología Educativa', 'Diseño de Experiencias de Aprendizaje'],
    freeResources: [
      { title: 'Khan Academy: La historia y visión del aprendizaje libre de Sal Khan', type: 'Charla TED / Libro' },
      { title: 'IDEO: Design Thinking for Educators Toolkit (Gratuito)', type: 'Guía de Innovación' }
    ],
    ikigai: {
      passion: 'Enseñar, explicar con metáforas y ver los ojos de alguien cuando comprende algo nuevo.',
      mission: 'Desbloquear el potencial humano de cada niña y niño sin importar su origen.',
      vocation: 'Maestra innovadora y guía del conocimiento.',
      profession: 'Directora Pedagógica en EdTech o Diseñadora Instruccional.'
    }
  }
];
