const DublicatedError = require("../errors/DublicatedError");

describe("Dublicated Error", () => {
  it("should throw Dublicated Error", () => {
    function errorFunction() {
      throw new DublicatedError();
    }
    expect(errorFunction).toThrow(DublicatedError);
  });
});
