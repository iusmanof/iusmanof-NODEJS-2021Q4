const pipeStdinOutputFile = require("../helpers/pipeStdinOutputFile");
const transformDecodeEncode = require("../stream/transformDecodeEncode");
const { pushArrayOfParams } = require("../helpers/pushArrayOfParams");
const MyWriteInFileStream = require("../advanced/MyWriteInFileStream");

test("TEST pipeStdinOutputFile ", () => {
  arrayDecodeEncode = pushArrayOfParams([
    "cipher-cli.js",
    "-c",
    "C1",
    "-i",
    "input.txt",
    "-o",
    "output.txt",
  ]);
  pathOutput = "../output.txt";
  const myWriteInFileStream = new MyWriteInFileStream(pathOutput, {
    flags: "a+",
  });

  process.stdin
    .pipe(new transformDecodeEncode(arrayDecodeEncode))
    .pipe(myWriteInFileStream);
});
