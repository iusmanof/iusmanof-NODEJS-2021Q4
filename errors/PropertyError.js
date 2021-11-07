class PropertyError extends Error {
  constructor(property) {
    super("No param of property: " + property);
    this.name = this.constructor.name;
    this.property = property;
  }
}

module.exports = PropertyError;
