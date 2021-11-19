class FileFormatError extends Error {
  constructor(property) {
    super(
      "The file must be TXT format: " +
        property +
        ". Use keyboard to write text ..."
    );
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = FileFormatError;
