const FileOptionInputError = require('../errors/FileOptionInputError')

describe('File Option Input Error', () => {
  it('should throw FileOptionError', () => {
    function errorFunction () {
      throw new FileOptionInputError();
    }
    expect(errorFunction).toThrow(FileOptionInputError);
  });
});