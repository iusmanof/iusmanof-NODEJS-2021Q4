const { checkFileExsist } = require("../helpers/checkFileExsist");

jest.mock("fs");

test("checkFileExsist", () => {
  const fileName = "input.txt";

  return checkFileExsist(fileName);
});
