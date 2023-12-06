export const getData = async (
  fileName: string
): Promise<string[] | undefined> => {
  try {
    // Get raw data from txt file
    const rawText = await Bun.file(`${process.cwd()}/day-2/${fileName}`).text();

    // Split on line breaks
    return rawText.split("\n");
  } catch (err) {
    console.log(err);
  }
};
