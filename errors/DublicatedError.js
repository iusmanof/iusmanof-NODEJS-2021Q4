class DublicatedError extends Error {
  constructor(property) {
    super("Dublicated option: " + property);
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = DublicatedError;
