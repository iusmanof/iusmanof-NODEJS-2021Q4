const RequiredError = require("./RequiredError");

class PropertyRequiredError extends RequiredError {
  constructor(property) {
    super("No param of property: " + property);
    this.name = this.constructor.name
    this.property = property;
  }
}

module.exports = PropertyRequiredError