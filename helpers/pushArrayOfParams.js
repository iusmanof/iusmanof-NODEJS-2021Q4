const { configParam } = require("./regExpHelper");
const { encodeCaeser, decodeCaeser } = require("../cipher/caesar");
const { encodeAtbash, decodeAtbash } = require("../cipher/atbash");
const { encodeROT8, decodeROT8 } = require("../cipher/rot8");

function pushArrayOfParams(args) {
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

  return arrayDecodeEncode;
}

module.exports = {
  pushArrayOfParams,
};
