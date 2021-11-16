const { checkOptionRequire } = require("./checkOptionRequire");

describe("Check Option Require", () => {
  test("should be true", () => {
    expect(checkOptionRequire(["-c"])).toBeTruthy();
  });

  test("should be true", () => {
    expect(checkOptionRequire(["--config"])).toBeTruthy();
  });

  test("should be false", () => {
    expect(checkOptionRequire(["--c"])).toBeFalsy();
  });

  test("should be false", () => {
    expect(checkOptionRequire(["--configewf"])).toBeFalsy();
  });
});
