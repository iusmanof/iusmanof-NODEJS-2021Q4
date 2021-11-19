const { optionC, optionConfig } = require("../global/constData");

module.exports.checkOptionRequire = (argv) =>
  argv.includes(optionC) || argv.includes(optionConfig);
