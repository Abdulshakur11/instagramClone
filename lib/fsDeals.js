const fs = require('fs');
const path = require("path");

class Fs {
  constructor(dir) {
    this.dir = dir;
  }

  read() {
    return fs.readFileSync(path.resolve(__dirname, this.dir), "utf-8")
  }

  write(chunk) {
    fs.writeFileSync(path.resolve(__dirname, this.dir), JSON.stringify(chunk, null, 2))
  }
}

module.exports = Fs