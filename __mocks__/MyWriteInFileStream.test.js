const MyWriteInFileStream = require("../advanced/MyWriteInFileStream");

test("MyWriteInFileStream 1", () => {
  const myWrite = new MyWriteInFileStream();
  const setRuleSpy = jest.spyOn(myWrite, "writeSync");
  const trueRule = jest.fn(() => true);
  const result = myWrite.writeSync("true", trueRule);
  expect(result).toBeUndefined();
  expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);
  setRuleSpy.mockClear();
});


test("MyWriteInFileStream 2", () => {
  const myWrite = new MyWriteInFileStream();
  const setRuleSpy = jest.spyOn(myWrite, "readSync");
  const trueRule = jest.fn(() => true);
  const result = myWrite.readSync("true", trueRule);
  expect(result).toBeUndefined();
  expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);
  setRuleSpy.mockClear();
});
 
test("MyWriteInFileStream 3", () => {
  const myWrite = new MyWriteInFileStream();
  expect(myWrite._write('data', 'encoding', ()=>{})).toBeUndefined()
});
