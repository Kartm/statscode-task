export type MatchResponseDTO =
  | {
      sport: "soccer";
      participant1: string;
      participant2: string;
      score: string;
    }
  | {
      sport: "volleyball";
      participant1: string;
      participant2: string;
      score: string;
    }
  | {
      sport: "handball";
      participant1: string;
      participant2: string;
      score: string;
    }
  | {
      sport: "basketball";
      participant1: string;
      participant2: string;
      score: string[][];
    }
  | {
      sport: "tennis";
      participant1: string;
      participant2: string;
      score: string;
    }
  | {
      sport: "ski jumping";
    };
