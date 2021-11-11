class DublicatedError extends Error {
  constructor() {
    super("Dublicated option: -c or --config. Write one param...");
    this.name = this.constructor.name;
  }
}

module.exports = DublicatedError;
