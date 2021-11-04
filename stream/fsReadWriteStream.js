const fileSystem = require("fs");

function fsReadWriteStream(pathInput, pathOutput, className, methodDecodeEncode) {
  const writeStream = fileSystem.createWriteStream(pathOutput);

  fileSystem
    .createReadStream(pathInput, "utf8")
    .pipe(new className(methodDecodeEncode))
    .pipe(writeStream);
}

module.exports = {
  fsReadWriteStream,
};
