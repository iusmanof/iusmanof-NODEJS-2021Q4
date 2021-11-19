// const { Readable } = require("stream");
// const fs = require("fs");

// class MyReadFromFileStream extends Readable {
//   constructor(path, options) {
//     super(options);
//     this.path = path;
//     this.data = "";
//     this.readSync();
//   }

//   readSync() {
//     try {
//       const data = fs.readFileSync(`${this.path}`, "utf8");
//       this.data = data;
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   _read(size) {
//     if (this.data.length) {
//       const chunk = this.data.slice(0, size);
//       this.data = this.data.slice(size, this.data.length);
//       this.push(chunk);
//     } else {
//       this.push(null);
//     }
//   }
// }

// module.exports = MyReadFromFileStream;
const MyReadFromFileStream = require('../advanced/MyReadFromFileStream')

test('MyReadFromFileStream readSync', () => {
   const myRead = new MyReadFromFileStream()

  // Prepare a spy for the validator.setRule() method.
  const setRuleSpy = jest.spyOn(myRead, "readSync");

  // Create a mock rule for use as a function argument.
  const trueRule = jest.fn(() => true);

  const result = myRead.readSync("true", trueRule);

  expect(result).toBeUndefined();

  // Check the spy if the method was called correctly.
  expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);

  // Restore the mock and revert original implementation.
  setRuleSpy.mockClear();
}) 


test('MyReadFromFileStream _read', () => {
  const myRead = new MyReadFromFileStream()

 // Prepare a spy for the validator.setRule() method.
 const setRuleSpy = jest.spyOn(myRead, "_read");

 // Create a mock rule for use as a function argument.
 const trueRule = jest.fn(() => true);

 const result = myRead.readSync("true", trueRule);

 expect(result).toBeUndefined();

 // Check the spy if the method was called correctly.
//  expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);

 // Restore the mock and revert original implementation.
 setRuleSpy.mockClear();
}) 