import { getMatches } from "./api";
import { EventParser } from "./data/match.data";

const printParsedMatches = async () => {
  const matches = await getMatches();

  const matchesParsed = matches
    .map((match) => {
      try {
        return {
          name: EventParser.makeEventName(match),
          score: EventParser.formatScore(match),
        };
      } catch (e) {
        // I'm not sure whether a business requirement is to show an error or just ignore these matches
        // so it's failing silently for now
        // console.error(e);
        return null;
      }
    })
    .filter((m) => m !== null);

  console.log(matchesParsed);
};

printParsedMatches();
