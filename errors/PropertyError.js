class PropertyError extends Error {
  constructor() {
    super(
      "No param of property: -c or --config must had param. Write parameters to the property for example: C1-C0-A-R1-R0 (PARAMETERS MUST BE UPPERCASE)"
    );
    this.name = this.constructor.name;
  }
}

module.exports = PropertyError;
