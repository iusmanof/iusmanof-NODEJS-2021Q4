class FileOptionOutputError extends Error {
  constructor(property) {
    super("Missing option output " + property + "Use keyboard to write text ...");
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = FileOptionOutputError;
