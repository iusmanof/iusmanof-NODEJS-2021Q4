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

const swithDecodeEncode = require('../helpers/swithDecodeEncode')
const { decodeAtbash } = require("../cipher/atbash");
const { fsReadWriteStream } = require('../stream/fsReadWriteStream')
const transformDecodeEncode = require("../stream/transformDecodeEncode");
const { pushArrayOfParams } = require("../helpers/pushArrayOfParams");

jest.mock("../helpers/pushArrayOfParams", () => jest.fn());

test('TEST ', () => {
  arrayDecodeEncode = [decodeAtbash]
  pathInput = '../input.txt'
  pathOutput = '../output.txt'

  fsReadWriteStream( pathInput, pathOutput, transformDecodeEncode ,arrayDecodeEncode)
}) 


// Input: User passes the same cli argument twice; Result: Error message is shown; e.g. 
//  input: node my_caesar_cli -c C1-C1-A-R0 -c C0 result: Error: You provided -c argument more than once;