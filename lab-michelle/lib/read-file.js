'use strict';

const fs = require('fs');
//Requiring in the file system

// console.log(`current directory: ${__dirname}`);

module.exports = (path, callback) => {
  let results = {}

  fs.readdir(path, (err, txts) => {
    if (err) callback(err);
    readTxts(txts);
  });

  function readTxts(txts) {
    if (txts.length <= 0) {
      callback (null, results);
      return results;
    }

    fs.readFile(`${path}/${txts.pop()}`, (err, data) => {
      if (err) callback(err);
      results[txts.length] = data.toString('hex', 0, 16);
      readTxts(txts);
    });
  }
};
