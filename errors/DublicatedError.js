const RequiredError = require("./RequiredError");

class DublicatedError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name
    this.message = message;
  }
}

module.exports = DublicatedError