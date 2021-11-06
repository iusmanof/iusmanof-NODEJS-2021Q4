const { Writable } = require("stream");
const fs = require("fs");

class MyWriteInFileStream extends Writable {
  constructor(path, options) {
    super(options);
    this.path = path;
    this.temp = '';
    // this.flags = typeof options === undefined ? '' : options.flags
    if(typeof options === 'undefined'){
      this.flags = ''
    } else {
      this.flags = options.flags
    }
  }

  writeSync(data) {
    fs.writeFile(`${this.path}`, data, err => {
      if (err) {
        console.error(err)
        return
      }
    })
  }

  readSync() {
    try {
      const data = fs.readFileSync(`${this.path}`, "utf8");
      this.temp = data;
    } catch (err) {
      console.error(err);
    }
  }

  _write(chunk, encoding, callback) {
    let formattedChunk =
      this._writableState.objectMode === true ? JSON.stringify(chunk) : chunk;

    if (this.flags === '' ) this.writeSync(formattedChunk)
    if (this.flags === 'a+'){
      this.readSync()
      formattedChunk += `\n` + this.temp
      this.writeSync(formattedChunk)
    }
    callback();
  }
}

module.exports = MyWriteInFileStream;
