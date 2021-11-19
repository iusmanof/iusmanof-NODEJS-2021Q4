const transformDecodeEncode = require("../stream/transformDecodeEncode");
const { pushArrayOfParams } = require("./pushArrayOfParams");

function pipeStdinStdout(args) {
  const arrayDecodeEncode = pushArrayOfParams(args);

  process.stdin
    .pipe(new transformDecodeEncode(arrayDecodeEncode))
    .pipe(process.stdout);
}

module.exports = {
  pipeStdinStdout,
};
