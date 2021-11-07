const { optionC, optionConfig } = require("../global/constData");

module.exports.checkOptionDublicate = (args) => {
  const countOption = (option) =>
    args.reduce((a, c) => {
      if (c === option) a++;
      return a;
    }, 0);

  if (countOption(optionConfig) >= 1 && countOption(optionC) >= 1) {
    return false;
  }

  if (countOption(optionC) >= 2) {
    return false;
  }

  if (countOption(optionConfig) >= 2) {
    return false;
  }

  return true;
};
