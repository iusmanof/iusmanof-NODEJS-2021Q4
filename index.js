const { MyReadFromFileStream } = require("./advanced/MyReadFromFileStream");
const fileSystem = require("fs");
const MyWriteInFileStrem = require("./advanced/MyWriteInFileStream");

const myReadFromFileStream = new MyReadFromFileStream("read.txt");
const writeStream = fileSystem.createWriteStream("./advanced/write.txt", {
  flags: "a+",
  encoding: "utf8",
});

const myWriteInFileStrem = new MyWriteInFileStrem("write.txt", {
  flags: "a+",
});

myReadFromFileStream.pipe(myWriteInFileStrem);
