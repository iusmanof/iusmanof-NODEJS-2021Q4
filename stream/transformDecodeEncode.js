const stream = require("stream");

class transformDecodeEncode extends stream.Transform {
  constructor(method, options) {
    super(options);
    this.method = method;
  }

  _transform(chunk, encoding, callback) {
    this.push(this.method(chunk.toString()));
    callback();
  }
}

module.exports = transformDecodeEncode;
