class FileOptionInputError extends Error {
  constructor(property) {
    super("Missing option input " + property);
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = FileOptionInputError;
