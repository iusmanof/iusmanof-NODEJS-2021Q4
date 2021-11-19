// const fs = require("fs");

// module.exports.checkFileExsist = (file) => fs.existsSync(file);
const { checkFileExsist } = require('../helpers/checkFileExsist')

jest.mock('fs')

test('mock', () => {
  const fileName = 'input.txt'

  return checkFileExsist(fileName)
});