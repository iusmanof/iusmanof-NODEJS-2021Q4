const fs = require("fs");

function readFromFileSync() {
  try {
    const data = fs.readFileSync("./data/input.txt", "utf8");
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

function writeToFileSync(text) {
  try {
    fs.writeFileSync("./data/output.txt", text);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  readFromFileSync,
  writeToFileSync,
};
