export interface Challenge {
  blurb: string;
  rank: {
    kos?: number;
    time?: number;
    damage?: number;
  };
}

export interface ChallengeList {
  [name: string]: {
    name: string;
    challenges: Challenge[];
  };
}
