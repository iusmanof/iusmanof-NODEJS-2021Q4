const { optionInput, optionOutput } = require("../global/constData");


class FileOptionError extends Error {
  constructor(property) {
    super("Missing option: " + optionInput + " and " + optionOutput + ". Use keyboard to write text. \nThe result of the input will be displayed in the terminal \n");
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = FileOptionError;
