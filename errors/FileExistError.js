class FileExistError extends Error {
  constructor(property) {
    super("File not exist: " + property);
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = FileExistError;
