const MyReadFromFileStream = require("./advanced/MyReadFromFileStream");
const fs = require('fs')


const m = new MyReadFromFileStream('./input.txt')



m.pipe(fs.createWriteStream('output.txt'))








// const fs = require('fs')
// const { decodeAtbash } = require("./cipher/atbash");
// const transformDecodeEncode = require("./stream/transformDecodeEncode");

// const t = new transformDecodeEncode([decodeAtbash])

// const a = fs.createReadStream('./input.txt')
//   .pipe(t)
//   .pipe(fs.createWriteStream('output.txt'))
