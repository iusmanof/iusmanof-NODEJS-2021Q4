const pipeStdinStdout = require("../helpers/pipeStdinStdout");
const transformDecodeEncode = require("../stream/transformDecodeEncode");
const { pushArrayOfParams } = require("../helpers/pushArrayOfParams");

test("TEST  pipeStdinStdout", () => {
  arrayDecodeEncode = pushArrayOfParams([
    "cipher-cli.js",
    "-c",
    "C1",
    "-i",
    "input.txt",
    "-o",
    "output.txt",
  ]);

  process.stdin
    .pipe(new transformDecodeEncode(arrayDecodeEncode))
    .pipe(process.stdout);
});
