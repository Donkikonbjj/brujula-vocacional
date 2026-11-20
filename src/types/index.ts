export type RIASECCode = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface RIASECTrait {
  code: RIASECCode;
  name: string;
  badge: string;
  emoji: string;
  color: string;
  gradient: string;
  description: string;
  strengths: string[];
  workEnvironments: string[];
}

export interface QuestionOption {
  text: string;
  emoji: string;
  tag: string;
  scores: Partial<Record<RIASECCode, number>>;
}

export interface Question {
  id: number;
  emoji: string;
  category: string;
  title: string;
  subtitle: string;
  options: QuestionOption[];
}

export interface DayInTheLifeItem {
  time: string;
  emoji: string;
  activity: string;
  description: string;
}

export interface Career {
  id: string;
  title: string;
  category: string;
  emoji: string;
  matchHolland: RIASECCode[];
  tags: string[];
  summary: string;
  fullDescription: string;
  vibe: string; // Gen Z vibe summary (ej: "100% digital, estética y tecnología")
  dailyTasks: string[];
  dayTimeline: DayInTheLifeItem[];
  keySkills: string[];
  growthOutlook: string;
  salaryLevel: string;
  remoteFriendly: boolean;
  typicalRoles: string[];
  pros: string[];
  challenges: string[];
  suggestedDegrees: string[];
  freeResources: { title: string; type: string; url?: string }[];
  ikigai: {
    passion: string;
    mission: string;
    vocation: string;
    profession: string;
  };
}

export interface Archetype {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  gradient: string;
  description: string;
  superpowers: { name: string; emoji: string; desc: string }[];
  vibeQuote: string;
  idealCareers: string[];
}

export interface AssessmentResult {
  scores: Record<RIASECCode, number>;
  topCodes: RIASECCode[];
  codeString: string;
  primaryTrait: RIASECTrait;
  secondaryTrait: RIASECTrait;
  tertiaryTrait: RIASECTrait;
  archetype: Archetype;
  matchedCareers: (Career & { matchPercent: number })[];
  completedAt: string;
  studentName?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
