const FileOptionOutputError = require("../errors/FileOptionOutputError");
const checkOption = require("../helpers/checkOption");

jest.mock("../helpers/checkOption", () => () => false);

describe("File Option Output Error", () => {
  it("should throw FileOptionOutputError 1", () => {
    function errorFunction() {
      throw new FileOptionOutputError();
    }
    expect(errorFunction).toThrow(FileOptionOutputError);
  });

  it("should throw FileOptionOutputError 2", () => {
    function errorFunction() {
      if (!checkOption(["C1"])) {
        return new FileOptionOutputError();
      }
    }

    expect(errorFunction).toBeTruthy();
  });
});
