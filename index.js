const { MyReadFromFileStream } = require("./advanced/readble");
const fileSystem = require("fs");

const myReadFromFileStream = new MyReadFromFileStream("read.txt");
const writeStream = fileSystem.createWriteStream("./advanced/write.txt", {
  flags: "a+",
  encoding: "utf8",
});

myReadFromFileStream.pipe(writeStream);
