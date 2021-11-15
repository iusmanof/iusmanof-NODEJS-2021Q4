class RequiredError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = `"Required option: -c or --config" .There is custom error was caused: ${this.name}`;
  }
}

module.exports = RequiredError;
