export interface Challenge {
  blurb: string;
  rank: {
    kos?: number;
    time?: number;
    damage?: number;
  };
}

export interface ChallengeMode {
  name: string;
  challenges: Challenge[];
  show?: boolean;
}

export interface ChallengeList {
  [name: string]: ChallengeMode;
}
