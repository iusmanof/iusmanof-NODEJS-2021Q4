const fileSystem = require("fs");
const transformDecodeEncode = require('../stream/transformDecodeEncode')
const { decodeAtbash, encodeAtbash } = require("../cipher/atbash");
const { decodeCaeser, encodeCaeser } = require("../cipher/caesar");
const { decodeROT8, encodeROT8 } = require("../cipher/rot8");

jest.mock('stream')

test('transformDecodeEncode', () => {
  const transformDE = new transformDecodeEncode(decodeAtbash)
  expect(typeof transformDE._transform).toBe("function")
});



test('transformDecodeEncode', () => {
  const transformDE = new transformDecodeEncode([decodeAtbash, encodeAtbash, decodeCaeser, encodeCaeser, decodeROT8, encodeROT8])

  fileSystem.createReadStream('../input.txt').pipe(transformDE)
  // как вызвать _transform

  expect(typeof transformDE._transform).toBe("function")
});


test('transformDecodeEncode', () => {
  const transformDE = new transformDecodeEncode([decodeAtbash, encodeAtbash, decodeCaeser, encodeCaeser, decodeROT8, encodeROT8])

  fileSystem.createReadStream('../input.txt')
    .pipe(transformDE)
    .pipe(fileSystem.createWriteStream('../output.txt'))

    // input
    // This is secret. Message about "_" symbol!
    
    // output
    // Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!

    fileSystem.readFile('../output.txt', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      expect(data).toBe('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!')
    })
});
