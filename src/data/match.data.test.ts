import { MatchResponseDTO } from "../api";
import { EventParser } from "./match.data";

describe("EventParser parses a match of", () => {
  test("soccer", () => {
    const matchResponse: MatchResponseDTO = {
      sport: "soccer",
      participant1: "Chelsea",
      participant2: "Arsenal",
      score: "2:1",
    };

    const parsedMatch = EventParser.parse(matchResponse);

    expect(parsedMatch).toEqual({
      name: "Chelsea - Arsenal",
      score: "2:1",
    });
  });

  test("volleyball", () => {
    const matchResponse: MatchResponseDTO = {
      sport: "volleyball",
      participant1: "Germany",
      participant2: "France",
      score: "3:0,25:23,25:19,25:21",
    };

    const parsedMatch = EventParser.parse(matchResponse);

    expect(parsedMatch).toEqual({
      name: "Germany - France",
      score: "Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)",
    });
  });

  test("handball", () => {
    const matchResponse: MatchResponseDTO = {
      sport: "handball",
      participant1: "Pogoń Szczeciń",
      participant2: "Azoty Puławy",
      score: "34:26",
    };

    const parsedMatch = EventParser.parse(matchResponse);

    expect(parsedMatch).toEqual({
      name: "Pogoń Szczeciń vs Azoty Puławy",
      score: "34:26",
    });
  });

  test("basketball", () => {
    const matchResponse: MatchResponseDTO = {
      sport: "basketball",
      participant1: "GKS Tychy",
      participant2: "GKS Katowice",
      score: [
        ["9:7", "2:1"],
        ["5:3", "9:9"],
      ],
    };

    const parsedMatch = EventParser.parse(matchResponse);

    expect(parsedMatch).toEqual({
      name: "GKS Tychy - GKS Katowice",
      score: "9:7,2:1,5:3,9:9",
    });
  });

  test("tennis", () => {
    const matchResponse: MatchResponseDTO = {
      sport: "tennis",
      participant1: "Maria Sharapova",
      participant2: "Serena Williams",
      score: "2:1,7:6,6:3,6:7",
    };

    const parsedMatch = EventParser.parse(matchResponse);

    expect(parsedMatch).toEqual({
      name: "Maria Sharapova vs Serena Williams",
      score: "Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)",
    });
  });

  test("ski jumping", () => {
    const matchResponse: MatchResponseDTO = {
      sport: "ski jumping",
    };

    expect(() => EventParser.parse(matchResponse)).toThrow();
  });
});
