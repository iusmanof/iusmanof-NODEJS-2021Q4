// const transformDecodeEncode = require("../stream/transformDecodeEncode");
// const { pushArrayOfParams } = require("./pushArrayOfParams");
// const MyWriteInFileStream = require("../advanced/MyWriteInFileStream");

// function pipeStdinOutputFile(args, pathOutput) {
//   const arrayDecodeEncode = pushArrayOfParams(args);

//   const myWriteInFileStream = new MyWriteInFileStream(pathOutput, {
//     flags: "a+",
//   });

//   process.stdin
//     .pipe(new transformDecodeEncode(arrayDecodeEncode))
//     .pipe(myWriteInFileStream);
// }

// module.exports = {
//   pipeStdinOutputFile,
// };
