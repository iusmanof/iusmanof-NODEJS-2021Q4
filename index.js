const { encodeCaeser, decodeCaeser } = require("./cipher/caesar");
// const { encodeAtbash, decodeAtbash } = require("./cipher/atbash");
// const { encodeROT8, decodeROT8 } = require("./cipher/rot8");

const fileSystem = require("fs");
const stream = require("stream");
const { throws } = require("assert");

// const readStream = fileSystem.createReadStream("input.txt");
// const writeStream = fileSystem.createWriteStream("output.txt");
// let text;
// readStream.on('data', function(chunk) {
//   text = decodeCaeser(chunk.toString())
// console.log(text)

//   writeStream.write(text)
// })
let arrFunc = [decodeCaeser];

class transformDecodeEncode extends stream.Transform {
  constructor(method, options) {
    super(options);
    this.method = method;
  }

  _transform(chunk, encoding, callback) {
    let decodedEncodedText = chunk.toString();

    this.method.forEach(function (func) {
      decodedEncodedText = func(decodedEncodedText);
    });

    this.push(decodedEncodedText);
    callback();
  }
}

function fsReadWriteStream(className, methodDecodeEncode) {
  const writeStream = fileSystem.createWriteStream("output.txt");

  fileSystem
    .createReadStream("input.txt", "utf8")
    .pipe(new className(methodDecodeEncode))
    .pipe(writeStream);
}

fsReadWriteStream(transformDecodeEncode, arrFunc);

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

// const readStream = fileSystem.createReadStream("input.txt");
// const writeStream = fileSystem.createWriteStream("output.txt");

// readStream.on('data', function(chunk) {
//   text = decodeCaeser(chunk.toString())
//   console.log(text)
//   writeStream.write(text)
// })

// readStream.pipe(writeStream);
