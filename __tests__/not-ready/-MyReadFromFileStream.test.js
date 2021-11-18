// const { Readable } = require("stream");
// const fs = require("fs");

// class MyReadFromFileStream extends Readable {
//   constructor(path, options) {
//     super(options);
//     this.path = path;
//     this.data = "";
//     this.readSync();
//   }

//   readSync() {
//     try {
//       const data = fs.readFileSync(`${this.path}`, "utf8");
//       this.data = data;
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   _read(size) {
//     if (this.data.length) {
//       const chunk = this.data.slice(0, size);
//       this.data = this.data.slice(size, this.data.length);
//       this.push(chunk);
//     } else {
//       this.push(null);
//     }
//   }
// }

// module.exports = MyReadFromFileStream;
