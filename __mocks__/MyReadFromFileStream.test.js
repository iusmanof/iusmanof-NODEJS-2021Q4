const MyReadFromFileStream = require("../advanced/MyReadFromFileStream");

test("MyReadFromFileStream readSync", () => {
  const myRead = new MyReadFromFileStream();
  const setRuleSpy = jest.spyOn(myRead, "readSync");
  const trueRule = jest.fn(() => true);
  const result = myRead.readSync("true", trueRule);
  expect(result).toBeUndefined();
  expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);
  setRuleSpy.mockClear();
});

test("MyReadFromFileStream _read", () => {
  const myRead = new MyReadFromFileStream();
  expect(myRead._read(2)).toBeUndefined()
});
