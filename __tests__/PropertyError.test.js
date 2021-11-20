const PropertyError = require("../errors/PropertyError");
const checkOptionParams = require("../helpers/regExpHelper");

jest.mock("../helpers/regExpHelper", () => () => false);

describe("Property Error", () => {
  it("should throw PropertyError", () => {
    function errorFunction() {
      throw new PropertyError();
    }
    expect(errorFunction).toThrow(PropertyError);
  });

  it("should throw PropertyError", () => {
    function errorFunction() {
      if (!checkOptionParams(["C1"])) {
        return new PropertyError();
      }
    }

    expect(errorFunction).toBeTruthy();
  });

  it("should throw PropertyError", () => {
    function errorFunction() {
      if (checkOptionParams(["C1"])) {
        return new PropertyError();
      }
    }
    expect(errorFunction).toBeTruthy();
    expect(checkOptionParams(["C1"])).toBe(false);
  });
});
