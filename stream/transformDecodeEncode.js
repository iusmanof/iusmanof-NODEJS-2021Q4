const stream = require("stream");

class transformDecodeEncode extends stream.Transform {
  constructor(method, options) {
    super(options);
    this.method = method;
  }

  _transform(chunk, encoding, callback) {
    let decodedEncodedText = chunk.toString();
    this.method.forEach(function (func) {
      decodedEncodedText = func(decodedEncodedText);
    });

    this.push(decodedEncodedText + "\n");
    callback();
  }
}

module.exports = transformDecodeEncode;
