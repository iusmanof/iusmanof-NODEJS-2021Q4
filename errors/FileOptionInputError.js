class FileOptionInputError extends Error {
  constructor(property) {
    super("Missing option input " + property + ". Use keyboard to write text ...");
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = FileOptionInputError;
