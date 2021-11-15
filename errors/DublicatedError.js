class DublicatedError extends Error {
  constructor() {
    super("Dublicated option: -c ,--config, -i or -o. Write one param...");
    this.name = this.constructor.name;
  }
}

module.exports = DublicatedError;
