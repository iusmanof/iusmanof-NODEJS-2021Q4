const RequiredError = require("../errors/RequiredError");

describe("RequiredError", () => {
  it("should throw RequiredError", () => {
    function errorFunction() {
      throw new RequiredError();
    }
    expect(errorFunction).toThrow(RequiredError);
  });
});
