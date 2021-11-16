const { checkLetter } = require("./checkLetter");

describe("Check Letter", () => {
  test("Upper case test", () => {
    expect(checkLetter("1")).toBeTruthy();
  });

  test("Lowercase test", () => {
    expect(checkLetter("abc")).toBeFalsy();
  });

  test("Mix test", () => {
    expect(checkLetter("aDc dqef2fg2#F@")).toBeTruthy();
  });
});
