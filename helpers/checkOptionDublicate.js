const { optionC, optionConfig } = require("../global/constData");

module.exports.checkOptionDublicate = (args) => {
  const countOption = (option) =>
    args.reduce((a, c) => {
      if (c === option) a++;
      return a;
    }, 0);

  if (countOption(optionConfig) === 1 && countOption(optionC) === 1) return;
  if (
    countOption(optionConfig) === 1 ||
    countOption(optionC) === 0 ||
    countOption(optionConfig) === 0 ||
    countOption(optionC) === 1
  )
    return true;
};
