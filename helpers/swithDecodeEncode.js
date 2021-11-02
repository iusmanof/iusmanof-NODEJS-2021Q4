const { encodeCaeser, decodeCaeser } = require("../cipher/caesar");
const { encodeAtbash, decodeAtbash } = require("../cipher/atbash");
const { encodeROT8, decodeROT8 } = require("../cipher/rot8");
const { regExpDecodeEncode, indexOfOtionsParam } = require("./regExpHelper");
const { fsReadWriteStream } = require('../stream/fsReadWriteStream')
const transformDecodeEncode = require('../stream/transformDecodeEncode')

let test = "Hello world";

const swithDecodeEncode = (args) => {
  const params = args[indexOfOtionsParam(args)].match(regExpDecodeEncode);

  params.forEach((param) => {
    switch (param) {
      case "C0":
        fsReadWriteStream(transformDecodeEncode, decodeCaeser)
        break;
      case "C1":
        fsReadWriteStream(transformDecodeEncode, encodeCaeser)
        break;
      case "A":
        fsReadWriteStream(transformDecodeEncode, decodeAtbash)
        break;
      case "R0":
        fsReadWriteStream(transformDecodeEncode, decodeROT8)
        break;
      case "R1":
        fsReadWriteStream(transformDecodeEncode, encodeROT8)
        break;
      default:
        console.log("Error param decode/encode");
    }
  });
};

module.exports = {
  swithDecodeEncode,
};
