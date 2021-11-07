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
const RequiredError = require("./errors/RequiredError");
const PropertyError = require("./errors/PropertyError");
const DublicatedError = require("./errors/DublicatedError");
const FileOptionError = require("./errors/FileOptionError");
const FileExistError = require("./errors/FileExistError");
let pathInput = "";
let pathOutput = "";

function inputArgumentsValidate(arguments){
  if (!checkOptionRequire(arguments)) {
    throw new RequiredError("Required option: -c or --config")
  }

  if (!checkOptionDublicate(arguments)) {
    throw new DublicatedError("-c or --config. Write one param...")
  }

  if (!checkOptionParams(arguments)) {
    throw new PropertyError("-c or --config must had param. Write parameters to the property for example: C1-C0-A-R1-R0")
  }
}

function checkFiles(arguments, inputPath, outputPath){
  pathInput = getOptionParam(argv, optionInput);
  pathOutput = getOptionParam(argv, optionOutput);
  
  if(!checkOption(argv, optionInput)) throw new FileOptionError(optionInput)
  if(!checkOption(argv, optionOutput)) throw new FileOptionError(optionOutput)
  if(!checkFileExsist(pathInput)) throw new FileExistError(pathInput)
  if(!checkFileExsist(pathOutput)) throw new FileExistError(pathOutput)
  if(!checkTXTformat(pathInput)) throw new FileExistError(pathInput)
  if(!checkTXTformat(pathOutput)) throw new FileExistError(pathOutput)
  return true
}


try{
  inputArgumentsValidate(argv)
} catch (error) {
  if (error instanceof RequiredError) stderr.write(error.message + '\n');
  if (error instanceof DublicatedError) stderr.write(error.message + '\n');
  if (error instanceof PropertyError) stderr.write(error.message + '\n');
}


try {
  checkFiles(argv, pathInput, pathOutput)
  swithDecodeEncode(pathInput, pathOutput, argv)
} catch (error) {
  if (error instanceof FileOptionError){
    stderr.write(error.message + '\n');
  } {
    pipeStdinStdout(argv);
  }

  if (error instanceof FileExistError){
    stderr.write(error.message + '\n');
  }

  if (error instanceof FileExistError){
    stderr.write(error.message + '\n');
  }
} 
