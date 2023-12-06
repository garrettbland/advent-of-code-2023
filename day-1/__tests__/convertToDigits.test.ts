import { expect, test } from "bun:test";
import { convertToDigits } from "../convertToDigits";

test("converts string with numerical representation to digits", () => {
  expect(convertToDigits("two1nine")).toBe("29");
  expect(convertToDigits("eightwothree")).toBe("83");
  expect(convertToDigits("abcone2threexyz")).toBe("13");
  expect(convertToDigits("xtwone3four")).toBe("24");
  expect(convertToDigits("4nineeightseven2")).toBe("42");
  expect(convertToDigits("zoneight234")).toBe("14");
  expect(convertToDigits("7pqrstsixteen")).toBe("76");

  expect(convertToDigits("3two3eightjszbfourkxbh5twoneightpr")).toBe("38");
});
