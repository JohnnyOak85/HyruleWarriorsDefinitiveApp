interface Challenge {
  blurb: string;
  rank: {
    kos?: number;
    time?: number;
    damage?: number;
  };
}

interface ChallengeMode {
  name: string;
  challenges: Challenge[];
  show?: boolean;
}

interface ChallengeList {
  [name: string]: ChallengeMode;
}

export { ChallengeList, ChallengeMode };
