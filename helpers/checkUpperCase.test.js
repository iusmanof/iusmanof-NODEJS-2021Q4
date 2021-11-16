const { checkUpperCase } = require("./checkUpperCase");

test("Check Upper Case", () => {
  expect(checkUpperCase("C1")).toBeTruthy();
});

test("Check Upper Case", () => {
  expect(checkUpperCase("c1")).toBeFalsy();
});

test("Check Upper Case", () => {
  expect(checkUpperCase("C0")).toBeTruthy();
});

test("Check Upper Case", () => {
  expect(checkUpperCase("c0")).toBeFalsy();
});

test("Check Upper Case", () => {
  expect(checkUpperCase("A")).toBeTruthy();
});

test("Check Upper Case", () => {
  expect(checkUpperCase("a")).toBeFalsy();
});

test("Check Upper Case", () => {
  expect(checkUpperCase("R1")).toBeTruthy();
});

test("Check Upper Case", () => {
  expect(checkUpperCase("r1")).toBeFalsy();
});

test("Check Upper Case", () => {
  expect(checkUpperCase("R0")).toBeTruthy();
});

test("Check Upper Case", () => {
  expect(checkUpperCase("r0")).toBeFalsy();
});
