const { checkTXTformat } = require("../helpers/checkTXTformat");

test("Check TXT format", () => {
  expect(checkTXTformat("input.txt")).toBeTruthy();
});

test("Check TXT format", () => {
  expect(checkTXTformat("input.xtx")).toBeFalsy();
});

test("Check TXT format", () => {
  expect(checkTXTformat("output.txt")).toBeTruthy();
});

test("Check TXT format", () => {
  expect(checkTXTformat("output.xtx")).toBeFalsy();
});
