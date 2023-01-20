import { capitalise } from "./capitalise";

test("capitalise returns a string with the first letter capitalised", () => {
  expect(capitalise("hello world")).toBe("Hello world");
  expect(capitalise("pascal Case")).toBe("Pascal Case");
  expect(capitalise("CAPITAL CASE")).toBe("CAPITAL CASE");
});
