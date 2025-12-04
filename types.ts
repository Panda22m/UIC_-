export type TargetAudience = 'Individual' | 'Group';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Challenge {
  title: string;
  description: string;
  target: TargetAudience;
  difficulty: Difficulty;
  impact: string;
  duration: string;
  category: string;
  actionItems: string[];
  // Extended properties for the UI
  id?: string;
  progress?: number;
  participants?: number;
  isGenerated?: boolean;
  status?: 'active' | 'completed' | 'new';
}

export interface GeneratorOptions {
  target: TargetAudience;
  theme?: string;
  difficulty?: Difficulty;
}

export type NavView = 'home' | 'ranking' | 'challenge' | 'community' | 'statistics';

export interface UserStats {
  level: string;
  levelName: string;
  currentPoints: number;
  nextLevelPoints: number;
  co2Saved: number;
  activities: {
    walk: number;
    bike: number;
    transit: number;
  };
}