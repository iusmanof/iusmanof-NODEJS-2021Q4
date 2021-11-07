class FileExistError extends Error {
  constructor(property) {
    super("File not exist: " + property + ". Use keyboard to write text ...");
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = FileExistError;
