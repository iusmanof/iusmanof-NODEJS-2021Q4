const transformDecodeEncode = require("../stream/transformDecodeEncode");
const { pushArrayOfParams } = require("./pushArrayOfParams");
const MyReadFromFileStream = require("../advanced/MyReadFromFileStream");

function pipeInputFileStdout(args, pathInput) {
  const arrayDecodeEncode = pushArrayOfParams(args);
  const myReadFromFileStream = new MyReadFromFileStream(pathInput);

  myReadFromFileStream
    .pipe(new transformDecodeEncode(arrayDecodeEncode))
    .pipe(process.stdout);
}

module.exports = {
  pipeInputFileStdout,
};
