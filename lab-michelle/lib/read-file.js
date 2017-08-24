'use strict';

const fs = require('fs');
//Requiring in the file system

console.log(`current directory: ${__dirname}`);

let x = module.exports = {};

x.read = (callback) => {

  let first, second, third;

  fs.readFile(`${__dirname}/../assets/one.txt`,(err, data) => {
    if (err) console.log(err);
    first = data.toString('hex', 0, 8);
  });

  fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
    if (err) console.log(err);
    second = data.toString('hex', 0, 8);
  });

  fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
    if (err) console.log(err);
    third = data.toString('hex', 0, 8);
  });

  callback({first, second, third});
};
