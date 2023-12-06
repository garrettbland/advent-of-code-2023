import { expect, test } from "bun:test";
import { addAllEntries } from "../index";

test("Entries should add everything", () => {
  const mockEntries = ["29", "83", "13", "24", "42", "14", "76"];
  expect(addAllEntries(mockEntries)).toBe(281);
});
