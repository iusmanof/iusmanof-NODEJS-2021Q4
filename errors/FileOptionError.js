class FileOptionError extends Error {
  constructor(property) {
    super("Missing option: " + property + ". Use keyboard to write text ...");
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = FileOptionError;
