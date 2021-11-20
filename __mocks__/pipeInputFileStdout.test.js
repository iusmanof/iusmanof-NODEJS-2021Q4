// const transformDecodeEncode = require("../stream/transformDecodeEncode");
// const { pushArrayOfParams } = require("./pushArrayOfParams");
// const MyReadFromFileStream = require("../advanced/MyReadFromFileStream");

// function pipeInputFileStdout(args, pathInput) {
//   const arrayDecodeEncode = pushArrayOfParams(args);
//   const myReadFromFileStream = new MyReadFromFileStream(pathInput);

//   myReadFromFileStream
//     .pipe(new transformDecodeEncode(arrayDecodeEncode))
//     .pipe(process.stdout);
// }

// module.exports = {
//   pipeInputFileStdout,
// };
const pipeInputFileStdout = require("../helpers/pipeInputFileStdout");
const transformDecodeEncode = require("../stream/transformDecodeEncode");
const { pushArrayOfParams } = require("../helpers/pushArrayOfParams");
const MyReadFromFileStream = require("../advanced/MyReadFromFileStream");
const { decodeAtbash } = require("../cipher/atbash");

test("TEST pipeInputFileStdout", () => {
  arrayDecodeEncode = pushArrayOfParams([
    "cipher-cli.js",
    "-c",
    "C1",
    "-i",
    "input.txt",
    "-o",
    "output.txt",
  ]);
  pathInput = "../input.txt";
  const myReadFromFileStream = new MyReadFromFileStream(pathInput);

  myReadFromFileStream
    .pipe(new transformDecodeEncode(arrayDecodeEncode))
    .pipe(process.stdout);
});
