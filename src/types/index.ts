export type RIASECCode = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface RIASECTrait {
  code: RIASECCode;
  name: string;
  badge: string;
  color: string;
  description: string;
  strengths: string[];
  workEnvironments: string[];
}

export interface QuestionOption {
  text: string;
  icon?: string;
  scores: Partial<Record<RIASECCode, number>>;
  description?: string;
}

export interface Question {
  id: number;
  category: string;
  scenario: string;
  question: string;
  options: QuestionOption[];
}

export interface Career {
  id: string;
  title: string;
  category: string;
  matchHolland: RIASECCode[];
  tags: string[];
  summary: string;
  fullDescription: string;
  dailyTasks: string[];
  keySkills: string[];
  growthOutlook: string;
  salaryLevel: string;
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

export interface AssessmentResult {
  scores: Record<RIASECCode, number>;
  topCodes: RIASECCode[];
  codeString: string;
  primaryTrait: RIASECTrait;
  secondaryTrait: RIASECTrait;
  tertiaryTrait: RIASECTrait;
  matchedCareers: Career[];
  completedAt: string;
  studentName?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestedQuestions?: string[];
}
