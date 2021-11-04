const { encodeCaeser, decodeCaeser } = require("../cipher/caesar");
const { encodeAtbash, decodeAtbash } = require("../cipher/atbash");
const { encodeROT8, decodeROT8 } = require("../cipher/rot8");
const {
  regExpDecodeEncode,
  indexOfOtionsParam,
  configParam,
} = require("./regExpHelper");
const { fsReadWriteStream } = require("../stream/fsReadWriteStream");
const transformDecodeEncode = require("../stream/transformDecodeEncode");

const swithDecodeEncode = (pathInput, pathOutput, args) => {
  let flagAtbashDecode = true;
  let arrayDecodeEncode = [];

  const params = configParam(args).split("-");

  params.forEach((param) => {
    switch (param) {
      case "C0":
        arrayDecodeEncode.push(decodeCaeser);
        break;
      case "C1":
        arrayDecodeEncode.push(encodeCaeser);
        break;
      case "A":
        flagAtbashDecode
          ? arrayDecodeEncode.push(encodeAtbash)
          : arrayDecodeEncode.push(decodeAtbash);
        flagAtbashDecode = !flagAtbashDecode;
        break;
      case "R0":
        arrayDecodeEncode.push(decodeROT8);
        break;
      case "R1":
        arrayDecodeEncode.push(encodeROT8);
        break;
      default:
        console.log("Error param decode/encode");
    }
  });

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
