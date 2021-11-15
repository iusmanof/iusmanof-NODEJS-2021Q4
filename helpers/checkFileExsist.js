const fs = require("fs");

module.exports.checkFileExsist = (file) => fs.existsSync(file);
