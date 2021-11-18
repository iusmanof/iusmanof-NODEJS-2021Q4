const { getOptionParam } = require("../helpers/getOptionParam");

describe("Get Option of param", () => {
  test("Test -1", () => {
    expect(getOptionParam(["-i", "input.txt"]));
  });

  test("Test -o", () => {
    expect(getOptionParam(["-o", "output.txt"]));
  });
});
