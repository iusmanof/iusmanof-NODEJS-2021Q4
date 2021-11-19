const { regExpFile } = require("../global/constData");

module.exports.checkTXTformat = (file) => regExpFile.test(file);
