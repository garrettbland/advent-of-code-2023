export type Subset = {
  blue: number;
  red: number;
  green: number;
};

export type Game = {
  title: string;
  gameId: number;
  subsets: Subset[];
  minimumCubesPreset: Subset;
  power: number;
};
