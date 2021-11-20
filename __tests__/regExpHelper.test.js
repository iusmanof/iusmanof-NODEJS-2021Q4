const { checkOptionParams } = require("../helpers/regExpHelper");

describe("RegExp Helper functions", () => {
  test("Check Option Params 1", () => {
    expect(checkOptionParams(["C1-C0-R1-R0-A"])).toBeTruthy();
  });

  test("Check Option Params 2", () => {
    expect(checkOptionParams(["C5"])).toBeFalsy();
  });

  test("Check Option Params 3", () => {
    expect(checkOptionParams(["r1"])).toBeFalsy();
  });
});
