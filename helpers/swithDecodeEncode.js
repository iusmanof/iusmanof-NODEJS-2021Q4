const { fsReadWriteStream } = require("../stream/fsReadWriteStream");
const transformDecodeEncode = require("../stream/transformDecodeEncode");
const { pushArrayOfParams } = require("./pushArrayOfParams");

const swithDecodeEncode = (pathInput, pathOutput, args) => {
  let arrayDecodeEncode = pushArrayOfParams(args);

  fsReadWriteStream(
    pathInput,
    pathOutput,
    transformDecodeEncode,
    arrayDecodeEncode
  );
};

module.exports = {
  swithDecodeEncode,
};
