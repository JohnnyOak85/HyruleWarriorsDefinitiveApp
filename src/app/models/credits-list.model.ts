interface People {
  name: string;
  link?: string;
}

interface CreditsEntry {
  task: string;
  people: People[];
}

interface CreditsList {
  CREDITS: CreditsEntry[];
}

export { CreditsList, CreditsEntry };
