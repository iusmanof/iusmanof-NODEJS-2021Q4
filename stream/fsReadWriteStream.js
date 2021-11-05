const fileSystem = require("fs");
const { MyReadFromFileStream } = require("../advanced/MyReadFromFileStream");

function fsReadWriteStream(
  pathInput,
  pathOutput,
  className,
  methodDecodeEncode
) {
  const writeStream = fileSystem.createWriteStream(pathOutput, {
    flags: "a+",
    encoding: "utf8",
  });

  // ----- 1 -----
  // fileSystem
  //   .createReadStream(pathInput, "utf8")
  //   .pipe(new className(methodDecodeEncode))
  //   .pipe(writeStream);
  // ----- 1 -----

  // ----- 2 -----
  const myReadFromFileStream = new MyReadFromFileStream(pathInput);
  myReadFromFileStream
    .pipe(new className(methodDecodeEncode))
    .pipe(writeStream);
  // ----- 2 -----
}

module.exports = {
  fsReadWriteStream,
};
