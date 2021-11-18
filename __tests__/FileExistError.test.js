const FileExistError = require('../errors/FileExistError')

describe('FileExist Error', () => {
  it('should throw FileExist Error', () => {
    function errorFunction () {
      throw new FileExistError();
    }
    expect(errorFunction).toThrow(FileExistError);
  });
});