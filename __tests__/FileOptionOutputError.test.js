const FileOptionOutputError = require('../errors/FileOptionOutputError')

describe('File Option Output Error', () => {
  it('should throw FileOptionOutputError', () => {
    function errorFunction () {
      throw new FileOptionOutputError();
    }
    expect(errorFunction).toThrow(FileOptionOutputError);
  });
});