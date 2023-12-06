import { Game, Subset } from "./types";

/**
 * Normalizes raw data from text file into shape we can work with
 */
export const normalize = (entries: string[]): Game[] => {
  let allGames: Game[] = [];

  entries.forEach((entry) => {
    const gameTitle = entry.split(":")[0];
    const gameId = Number(gameTitle.split(" ")[1]);
    const subsets = entry
      .split(":")[1]
      .split(";")
      .map((i) => i.trim());

    let normalizedSubsets: Subset[] = [];
    subsets.forEach((subset) => {
      // This is ['9 blue', '18 green', '4 red'] for example
      const scores = subset.split(",").map((i) => i.trim());

      let subGameRecord: Subset = {
        red: 0,
        blue: 0,
        green: 0,
      };

      scores.forEach((score) => {
        const color = score.split(" ")[1] as keyof Subset;
        const amount = Number(score.split(" ")[0]);
        subGameRecord[color] = amount;
      });

      normalizedSubsets.push(subGameRecord);
    });

    const minimumCubesPreset = normalizedSubsets.reduce(
      (curr, next) => {
        let updatedSet = { ...curr };
        if (next.red > curr.red) {
          updatedSet.red = next.red;
        }
        if (next.blue > curr.blue) {
          updatedSet.blue = next.blue;
        }
        if (next.green > curr.green) {
          updatedSet.green = next.green;
        }
        return updatedSet;
      },
      {
        red: 0,
        blue: 0,
        green: 0,
      }
    );

    const power = Object.values(minimumCubesPreset).reduce((curr, next) => {
      return curr * next;
    });

    allGames.push({
      title: gameTitle,
      gameId: gameId,
      subsets: normalizedSubsets,
      minimumCubesPreset,
      power,
    });
  });

  return allGames;
};
