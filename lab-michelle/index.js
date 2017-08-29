'use strict';

const fs = require('fs');

let readFile = module.exports = (callback) => {

  let finalResults = [];

  fs.readFile('./assets/one.txt', (err, dataOne) => {
    if (err) callback(new Error('whoops'));
   finalResults.push(dataOne.toString('hex', 0, 8));
  });

  fs.readFile('./assets/two.txt', (err, dataTwo) => {
    if (err) callback(new Error('that was erroneous!'));
    finalResults.push(dataTwo.toString('hex', 0, 8));

    fs.readFile('./assets/three.txt', (err, dataThree) => {
      if (err) callback(new Error('alas an error'));
      finalResults.push(dataThree.toString('hex', 0, 8));

      callback(null, finalResults);
    });
  });
};

//
//My previous code
// let x = module.exports = {};
//
// x.read = (callback) => {
//
//   let first, second, third;
//
//   fs.readFile(`${__dirname}/../assets/one.txt`,(err, data) => {
//     if (err) console.log(err);
//     first = data.toString('hex', 0, 8);
//   });
//
//   fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
//     if (err) console.log(err);
//     second = data.toString('hex', 0, 8);
//   });
//
//   fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
//     if (err) console.log(err);
//     third = data.toString('hex', 0, 8);
//   });
//
//   callback({first, second, third});
// };
