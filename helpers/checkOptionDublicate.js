const checkOptionDublicate = (args) => {
  const countOption = (option) =>
    args.reduce((a, c) => {
      if (c === option) a++;
      return a;
    }, 0);

  const result = countOption("--config") === 1 || countOption("-c") === 1;
  return result;
};

module.exports = {
  checkOptionDublicate,
};
