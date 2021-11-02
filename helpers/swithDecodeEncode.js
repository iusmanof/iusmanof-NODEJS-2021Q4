const { encodeCaeser, decodeCaeser } = require("../cipher/caesar");
const { encodeAtbash, decodeAtbash } = require("../cipher/atbash");
const { encodeROT8, decodeROT8 } = require("../cipher/rot8");
const { regExpDecodeEncode, indexOfOtionsParam } = require("./regExpHelper");
let test = "Hello world";

const swithDecodeEncode = (args) => {
  const params = args[indexOfOtionsParam(args)].match(regExpDecodeEncode);

  params.forEach((param) => {
    switch (param) {
      case "C0":
        console.log("C0 decode");
        test = decodeCaeser(test);
        console.log(test);
        break;
      case "C1":
        console.log("C0 encode");
        test = encodeCaeser(test);
        console.log(test);
        break;
      case "A":
        console.log("A decode/encode");
        test = encodeAtbash(test);
        console.log(test);
        test = decodeAtbash(test);
        console.log(test);
        break;
      case "R0":
        console.log("R0 decode");
        test = decodeROT8(test);
        console.log(test);
        break;
      case "R1":
        console.log("R1 encode");
        test = encodeROT8(test);
        console.log(test);
        break;
      default:
        console.log("Error param decode/encode");
    }
  });
};

module.exports = {
  swithDecodeEncode,
};
