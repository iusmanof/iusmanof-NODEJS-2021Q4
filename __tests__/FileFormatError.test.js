const FileFormatError = require("../errors/FileFormatError");

describe("File Format Error", () => {
  it("should throw FileFormat Error", () => {
    function errorFunction() {
      throw new FileFormatError();
    }
    expect(errorFunction).toThrow(FileFormatError);
  });
});
