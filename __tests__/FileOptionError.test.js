const FileOptionError = require("../errors/FileOptionError");

describe("File Option Error", () => {
  it("should throw FileOptionError", () => {
    function errorFunction() {
      throw new FileOptionError();
    }
    expect(errorFunction).toThrow(FileOptionError);
  });
});
