const PropertyError = require('../errors/PropertyError')

describe('Property Error', () => {
  it('should throw PropertyError', () => {
    function errorFunction () {
      throw new PropertyError();
    }
    expect(errorFunction).toThrow(PropertyError);
  });
});