import { getFirstAndLastAndCombine } from "./index";

export const convertToDigits = (entry: string): string => {
  let entryString = `${entry}`;

  const alphabetNumbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  /**
   * Replace found number with this pattern {match[int]match}. This pattern supports sharing
   * letters to create digits.
   *
   * "one2threeight" -> "one1one2three3threeeight8eight"
   */
  Object.keys(alphabetNumbers).forEach((key) => {
    const regx = new RegExp(key, "g");
    entryString = entryString.replace(
      regx,
      `${key}${alphabetNumbers[key]}${key}`
    );
  });

  /**
   * Now replace any non digits (and our copies)
   */
  const removedDigits = entryString.replace(/\D/g, "");

  /**
   * Finally get the first and last string
   */
  entryString = getFirstAndLastAndCombine(removedDigits);

  return entryString;
};
