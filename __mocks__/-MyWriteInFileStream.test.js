// const { Writable } = require("stream");
// const fs = require("fs");

// class MyWriteInFileStream extends Writable {
//   constructor(path, options) {
//     super(options);
//     this.path = path;
//     this.temp = "";
//     // this.flags = typeof options === undefined ? '' : options.flags
//     if (typeof options === "undefined") {
//       this.flags = "";
//     } else {
//       this.flags = options.flags;
//     }
//   }

//   writeSync(data) {
//     fs.writeFile(`${this.path}`, data, (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//     });
//   }

//   readSync() {
//     try {
//       const data = fs.readFileSync(`${this.path}`, "utf8");
//       this.temp = data;
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   _write(chunk, encoding, callback) {
//     let formattedChunk =
//       this._writableState.objectMode === true ? JSON.stringify(chunk) : chunk;

//     if (this.flags === "") this.writeSync(formattedChunk);
//     if (this.flags === "a+") {
//       this.readSync();
//       formattedChunk += `\n` + this.temp;
//       this.writeSync(formattedChunk);
//     }
//     callback();
//   }
// }

// module.exports = MyWriteInFileStream;

const MyWriteInFileStream = require('../advanced/MyWriteInFileStream')

test('MyWriteInFileStream', () => {
   const myWrite = new MyWriteInFileStream()

  // Prepare a spy for the validator.setRule() method.
  const setRuleSpy = jest.spyOn(myWrite, "writeSync");

  // Create a mock rule for use as a function argument.
  const trueRule = jest.fn(() => true);

  const result = myWrite.readSync("true", trueRule);

  expect(result).toBeUndefined();

  // Check the spy if the method was called correctly.
  // expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);

  // Restore the mock and revert original implementation.
  setRuleSpy.mockClear();
}) 