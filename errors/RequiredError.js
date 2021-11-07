class RequiredError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name
    this.message = `${message} .There is custom error was caused: ${this.name}`
  }
}

module.exports = RequiredError