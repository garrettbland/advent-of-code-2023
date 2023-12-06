import { test, expect } from "bun:test";
import { getFirstAndLastAndCombine } from "../index";

test("Should get first and last from string", () => {
  const mockExample = "1234567";
  expect(getFirstAndLastAndCombine(mockExample)).toBe("17");
});

test("Should return at least two digits if single digit entry", () => {
  const mockExample = "4";
  expect(getFirstAndLastAndCombine(mockExample)).toBe("44");
});
