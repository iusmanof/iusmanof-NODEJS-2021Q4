const { argv, stderr } = require("process");
const { checkOptionDublicate } = require("./helpers/checkOptionDublicate");
const { checkOptionRequire } = require("./helpers/checkOptionRequire");
const { checkOptionParams } = require("./helpers/regExpHelper");
const { checkFileExsist } = require("./helpers/checkFileExsist");
const { swithDecodeEncode } = require("./helpers/swithDecodeEncode");
const { checkOption } = require("./helpers/checkOption");
const { getOptionParam } = require("./helpers/getOptionParam");
const { checkTXTformat } = require("./helpers/checkTXTformat");
const { optionInput, optionOutput } = require("./global/constData");

let pathInput = "";
let pathOutput = "";

if (!checkOptionRequire(argv))
  return stderr.write(`-c or --config required option \n`);
if (!checkOptionDublicate(argv))
  return stderr.write(`-c or --config dublicated ! Write one param \n`);
if (!checkOptionParams(argv))
  return stderr.write(
    `-c or --config must had param! Write some param 'C1-C0' \n`
  );

if (checkOption(argv, optionInput) && checkOption(argv, optionOutput)) {
  pathInput = getOptionParam(argv, optionInput);
  pathOutput = getOptionParam(argv, optionOutput);
  if (!checkFileExsist(pathInput))
    return stderr.write(`${pathInput} file not exist \n`);
  if (!checkFileExsist(pathOutput))
    return stderr.write(`${pathOutput} file not exist \n`);
  if (!checkTXTformat(pathInput))
    return stderr.write(`${pathInput} need txt format \n`);
  if (!checkTXTformat(pathOutput))
    return stderr.write(`${pathOutput} need txt format \n`);

  swithDecodeEncode(argv);
} else {
  console.log("input output logic");
}
