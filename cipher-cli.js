const { argv, stderr } = require("process");
const { checkOptionDublicate } = require("./helpers/checkOptionDublicate");
const { checkOptionRequire } = require("./helpers/checkOptionRequire");
const { checkOptionParams } = require("./helpers/regExpHelper");
const { checkFileExsist } = require("./helpers/checkFileExsist");
const { swithDecodeEncode } = require("./helpers/swithDecodeEncode");
const { checkOption } = require("./helpers/checkOption");
const { getOptionParam } = require("./helpers/getOptionParam");
const { checkTXTformat } = require("./helpers/checkTXTformat");
const { optionInput, optionOutput, optionC } = require("./global/constData");
const { pipeStdinStdout } = require("./helpers/pipeStdinStdout");
const { pipeStdinOutputFile } = require("./helpers/pipeStdinOutputFile");
const { pipeInputFileStdout } = require("./helpers/pipeInputFileStdout");
const RequiredError = require("./errors/RequiredError");
const PropertyError = require("./errors/PropertyError");
const DublicatedError = require("./errors/DublicatedError");
const FileOptionError = require("./errors/FileOptionError");
const FileOptionInputError = require("./errors/FileOptionInputError");
const FileOptionOutputError = require("./errors/FileOptionOutputError");
const FileExistError = require("./errors/FileExistError");
let pathInput = "";
let pathOutput = "";

function inputArgumentsValidate() {
  if (!checkOptionRequire(argv)) {
    throw new RequiredError();
  }

  if (!checkOptionDublicate(argv)) {
    throw new DublicatedError();
  }

  if (!checkOptionParams(argv)) {
    throw new PropertyError();
  }

  pathInput = getOptionParam(argv, optionInput);
  pathOutput = getOptionParam(argv, optionOutput);
  if (!checkFileExsist(pathInput)) throw new FileExistError(pathInput);
  if (!checkFileExsist(pathOutput)) throw new FileExistError(pathOutput);

  if (!checkOption(argv, optionOutput) && !checkOption(argv, optionInput))
    throw new FileOptionError();
  if (!checkOption(argv, optionOutput))
    throw new FileOptionOutputError(optionOutput);

  if (!checkOption(argv, optionInput))
    throw new FileOptionInputError(optionInput);
  if (!checkTXTformat(pathInput)) throw new FileExistError(pathInput);
  if (!checkTXTformat(pathOutput)) throw new FileExistError(pathOutput);
}

try {
  inputArgumentsValidate();
  swithDecodeEncode(pathInput, pathOutput, argv);
} catch (error) {
  if (error instanceof RequiredError) stderr.write(error.message + "\n");
  if (error instanceof DublicatedError) stderr.write(error.message + "\n");
  if (error instanceof PropertyError) stderr.write(error.message + "\n");

  if (error instanceof FileOptionError) {
    stderr.write(error.message + "\n");
    pipeStdinStdout(argv);
  }

  if (error instanceof FileOptionOutputError) {
    stderr.write(error.message + "\n");
    pipeInputFileStdout(argv, pathInput);
  }

  if (error instanceof FileOptionInputError) {
    stderr.write(error.message + "\n");
    pipeStdinOutputFile(argv, pathOutput);
  }

  if (error instanceof FileExistError) {
    stderr.write(error.message + "\n");
  }
}
