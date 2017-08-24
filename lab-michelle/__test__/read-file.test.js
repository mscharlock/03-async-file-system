'use strict';

const readSomeThings = require('../lib/read-file');
const fs = require('fs');

//TESTING
describe('index.js', function() {
  describe('My FS module', function() {
    test('should return some data', done => {

      let one, two, three;

      fs.readFile(`${__dirname}/../assets/one.txt`,(err, data) => {
        if (err) console.log(err);
        one = data.toString('hex', 0, 8);
      });

      fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
        if (err) console.log(err);
        two = data.toString('hex', 0, 8);
      });

      fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
        if (err) console.log(err);
        three = data.toString('hex', 0, 8);
      });

      readSomeThings.read((data) => {
        expect([data.first, data.second, data.third]).toEqual([one, two, three]);
        done();
      });
    });

    test('Putting in a fake file path that should fail', done => {
      let nope;
      fs.readFile(`${__dirname}/../assets/nope.txt`, (err, data) => {
        if (err) console.log(err);
        nope = data.toString('hex', 0, 8);
      });
      expect(nope).toBeUndefined();
      done();
    });
  });
});
