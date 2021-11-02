const { encodeCaeser, decodeCaeser } = require("./cipher/caesar");
// const { encodeAtbash, decodeAtbash } = require("./cipher/atbash");
// const { encodeROT8, decodeROT8 } = require("./cipher/rot8");

// const dc = decodeCaeser('abc s s  sDOIHNQOUDH98h923hd9 23dh 9238d98*(**( *');
// const ec = encodeCaeser('def idOOJ)#JD)@HF)f 0239f 02');
// console.log(dc)
// console.log(ec)

// const da = decodeAtbash('abc s s  sDOIHNQOUDH98h923hd9 23dh 9238d98*( ');
// const ea = encodeAtbash('abc s s  sDOIHNQOUDH98h923hd9 23dh 9238d98*(');
// console.log(da)
// console.log(ea)

// const dr = encodeROT8("ab c");
// const er = decodeROT8("Uryyb jbeyq");
// console.log(dr);
// console.log(er);

// let param = "A-C0-C1-A"

// let result = param.match(/([A])|([CR][01])/gm)
// let resultA = param.match(/[C|R][0|1]/gm)
// let resultCR = param.match(/[A]/gm)
// let resultAll = param.match(/^([CR][01]|[A])(-[CR][01]|[A]-)(-([CR][01]|[A]))*$/gm)

// console.log(result)
// console.log(resultA)
// console.log(resultCR)
// console.log(resultAll)

// 1. match (XY-)n

// let param = "A-C0-C1-A"

// let result = param.match(/([A])|([CR][01])/gm)
// let resultA = param.match(/[C|R][0|1]/gm)
// let resultCR = param.match(/[A]/gm)
// let resultAll = param.match(/^([CR][01]|[A])(-[CR][01]|[A]-)(-([CR][01]|[A]))*$/gm)

// console.log(result)
// console.log(resultA)
// console.log(resultCR)
// console.log(resultAll)

// 2. decode and encode by match 1.
// var fs = require('fs');

// var rstream = fs.createReadStream('./input.txt');
// var wstream = fs.createWriteStream('./output.txt');

// try {
//   const data = fs.readFileSync('./input.txt', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }

// rstream   // reads from myfile.txt
//   .pipe(wstream)  // writes to myfile.txt.gz
//   .on('finish', function () {  // finished
//     console.log('done compressing');
//   });


// https://www.section.io/engineering-education/how-to-use-streams-in-node.js/


const fileSystem = require("fs");
const stream = require('stream')

// const readStream = fileSystem.createReadStream("input.txt");
// const writeStream = fileSystem.createWriteStream("output.txt");

// readStream.on('data', function(chunk) {
//   text = decodeCaeser(chunk.toString())
//   console.log(text)
//   writeStream.write(text)
// })

// readStream.pipe(writeStream);

class decodeCaeserStream extends stream.Transform{
  constructor(options){
    super(options)
  }

  _transform(chunk, encoding, callback){
    this.push(decodeCaeser(chunk.toString()))
    callback()
  }
}

const writeStream = fileSystem.createWriteStream("output.txt");

fileSystem.createReadStream("input.txt", 'utf8')
 .pipe(new decodeCaeserStream())
 .pipe(writeStream)