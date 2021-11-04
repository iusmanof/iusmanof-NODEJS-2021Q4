const fileSystem = require("fs");

function fsReadWriteStream(className, methodDecodeEncode) {
  const writeStream = fileSystem.createWriteStream("output.txt");

  fileSystem
    .createReadStream("input.txt", "utf8")
    .pipe(new className(methodDecodeEncode))
    .pipe(writeStream);
}

module.exports = {
  fsReadWriteStream,
};
