// const { fsReadWriteStream } = require("../stream/fsReadWriteStream");
// const transformDecodeEncode = require("../stream/transformDecodeEncode");
// const { pushArrayOfParams } = require("./pushArrayOfParams");

// const swithDecodeEncode = (pathInput, pathOutput, args) => {
//   let arrayDecodeEncode = pushArrayOfParams(args);

//   fsReadWriteStream(
//     pathInput,
//     pathOutput,
//     transformDecodeEncode,
//     arrayDecodeEncode
//   );
// };

// module.exports = {
//   swithDecodeEncode,
// };

const swithDecodeEncode = require("../helpers/swithDecodeEncode");
const { decodeAtbash } = require("../cipher/atbash");
const { fsReadWriteStream } = require("../stream/fsReadWriteStream");
const transformDecodeEncode = require("../stream/transformDecodeEncode");
const { pushArrayOfParams } = require("../helpers/pushArrayOfParams");

const mock = jest.mock("../helpers/pushArrayOfParams", () => jest.fn());

test("TEST  swithDecodeEncode", () => {
  arrayDecodeEncode = [decodeAtbash];

  pathInput = "../input.txt";
  pathOutput = "../output.txt";

  fsReadWriteStream(
    pathInput,
    pathOutput,
    transformDecodeEncode,
    arrayDecodeEncode
  );
});
