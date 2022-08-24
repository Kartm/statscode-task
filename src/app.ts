import { getMatches } from "./api";
import { EventParser } from "./data/match.data";

const printParsedMatches = async () => {
  let matchesParsed = [];

  const matches = await getMatches();

  for (var i = 0; i < matches.length; i++) {
    let name = EventParser.makeEventName(matches[i]);
    let score = EventParser.formatScore(matches[i]);

    if (
      name !== "Exception: invalid sport" &&
      score !== "Exception: invalid sport"
    ) {
      matchesParsed.push({
        name,
        score,
      });
    }
  }

  console.log(matchesParsed);
};

printParsedMatches();
