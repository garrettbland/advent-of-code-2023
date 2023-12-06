import { convertToDigits } from "./convertToDigits";

const fetchList = async (): Promise<string[] | undefined> => {
  try {
    // Get raw data from txt file
    const rawText = await Bun.file(`${process.cwd()}/day-1/data.txt`).text();

    // Split on line breaks
    return rawText.split("\n");
  } catch (err) {
    console.log(err);
  }
};

export const getFirstAndLastAndCombine = (entry: string): string => {
  // If its a single digit, then we need to get two digits
  if (entry.length === 1) {
    return `${entry}${entry}`;
  }

  // Split entry into array
  const splitEntry = entry.split("");

  const firstDigit = splitEntry[0];
  const lastDigit = splitEntry[splitEntry.length - 1];

  const combinedDigits = firstDigit + lastDigit;
  return combinedDigits;
};

export const addAllEntries = (entries: string[]): number => {
  return entries.reduce((curr, next) => {
    return curr + Number(next);
  }, 0);
};

const main = async () => {
  const entries = await fetchList();

  if (!entries) {
    throw Error("Entires not available...");
  }

  // Map over entries with mixed string and numbers and
  // return only numbers
  const digitsOnly = entries.map(convertToDigits);

  // Map over digits and get only the first and last item
  const firstAndLastDigits = digitsOnly.map(getFirstAndLastAndCombine);

  const finalAnswer: number = addAllEntries(firstAndLastDigits);

  console.log(`Final answer: ${finalAnswer}`);
};

main();
