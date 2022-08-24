import { MatchResponseDTO } from "../api";

export class EventParser {
  static makeEventName(match: MatchResponseDTO) {
    switch (match.sport) {
      case "soccer":
      case "volleyball":
      case "basketball":
        return `${match.participant1} - ${match.participant2}`;
      case "tennis":
      case "handball":
        return `${match.participant1} vs ${match.participant2}`;
      default:
        return "Exception: invalid sport";
    }
  }

  static formatScore(match: MatchResponseDTO) {
    switch (match.sport) {
      case "soccer":
      case "handball":
        return match.score;
      case "basketball":
        return match.score.flat().join(",");
      case "tennis":
      case "volleyball": {
        const scores = match.score.split(",");

        const [mainScore, ...rest] = scores;

        const scoresText = rest
          .map((set, i) => `set${i + 1} ${set}`)
          .join(", ");

        return `Main score: ${mainScore} (${scoresText})`;
      }
      default:
        return "Exception: invalid sport";
    }
  }
}
