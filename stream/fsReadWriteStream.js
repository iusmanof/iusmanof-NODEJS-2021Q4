const fileSystem = require("fs");

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

  fileSystem
    .createReadStream(pathInput, "utf8")
    .pipe(new className(methodDecodeEncode))
    .pipe(writeStream);
}

module.exports = {
  fsReadWriteStream,
};
