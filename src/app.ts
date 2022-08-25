import { getMatches } from "./api";
import { EventParser } from "./data/match.data";

const printParsedMatches = async () => {
  const matches = await getMatches();

  const matchesParsed = matches
    .map((match) => {
      const name = EventParser.makeEventName(match);
      const score = EventParser.formatScore(match);

      if (
        name !== "Exception: invalid sport" &&
        score !== "Exception: invalid sport"
      ) {
        return { name, score };
      } else return null;
    })
    .filter((m) => m !== null);

  // todo exceptions
  // todo replace vars

  console.log(matchesParsed);
};

printParsedMatches();
