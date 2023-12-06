import { getData } from "./getData";
import { normalize } from "./normalize";
import { Game } from "./types";

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

const main = async () => {
  const data = await getData("data.txt");

  if (!data) {
    throw Error("Data not found...");
  }

  const allGames = normalize(data);
  console.log(allGames[1]);

  // Store games that are possible
  let possibleGames: Game[] = [];

  // First, loop through each game
  allGames.forEach((game) => {
    // Now we need to loop through the subsets in each game
    const possibleGame = game.subsets.every(({ red, green, blue }) => {
      if (red <= MAX_RED && green <= MAX_GREEN && blue <= MAX_BLUE) {
        return true;
      }
      return false;
    });

    if (possibleGame) {
      possibleGames.push(game);
    }
  });

  console.log(`Number of Possible Games: ${possibleGames.length}`);

  // Add up id of all possible games
  const sumOfIds = possibleGames.reduce((curr, next) => {
    return curr + next.gameId;
  }, 0);

  console.log(`Sum of all possible game id's: ${sumOfIds}`);

  // Add up all sums of powers (for all games, not just possible games)
  const sumOfPowers = allGames.reduce((curr, next) => {
    console.log(`Add ${curr} to ${next.power}`);
    return curr + next.power;
  }, 0);

  // 11608 is too low
  console.log(`Sum of all powers for possible games: ${sumOfPowers}`);
};

main();
