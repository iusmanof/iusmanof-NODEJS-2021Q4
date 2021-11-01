const checkOptionRequire = () =>
  argv.includes("-c") || argv.includes("--config");

module.exports = {
  checkOptionRequire,
};
