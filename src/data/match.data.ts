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
    if (match.sport === "soccer" || match.sport === "handball") {
      return match.score;
    } else if (match.sport === "tennis" || match.sport === "volleyball") {
      var scores =
        /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(
          match.score
        );
      var set1 = scores![2];
      var set2 = scores![3];
      var set3 = scores![4];

      return (
        "Main score: " +
        scores![1] +
        " (" +
        "set1 " +
        set1 +
        ", " +
        "set2 " +
        set2 +
        ", " +
        "set3 " +
        set3 +
        ")"
      );
    } else if (match.sport === "basketball") {
      return (
        match.score[0][0] +
        "," +
        match.score[0][1] +
        "," +
        match.score[1][0] +
        "," +
        match.score[1][1]
      );
    } else {
      return "Exception: invalid sport";
    }
  }
}
