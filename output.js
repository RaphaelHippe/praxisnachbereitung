var fs = require('fs');


function write(filename, data) {
  fs.appendFile(filename, data, function (err) {
    if (err) {
      throw err;
    }
    console.log('Done appending to ' + filename + '!');
  });
}

module.exports = write;
