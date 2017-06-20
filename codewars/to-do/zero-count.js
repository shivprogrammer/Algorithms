'use strict';

const expect = require('chai').expect;

/*
Count Number of Zeroes from 1 to N

7kyu

Create an algorithm to count the number of zeros that appear between 1 and N.

Examples:

There are 2 zeros from 1 to 20: 10, 20

There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

countZeros(10); // returns 1
countZeros(100); // returns 11
countZeros(200); // returns 31
*/

function countZeros(n) {
}

describe('Count Number of Zeroes from 1 to N | Code Wars | 7kyu', function() {
  describe('with input of 10', function() {
    it('should return 1', done => {
      expect(countZeros(10)).to.equal(1);
      done();
    })
  })


  describe('with input of 100', function() {
    it('should return 11', done => {
      expect(countZeros(100)).to.equal(11);
      done();
    })
  })

  describe('with input of 200', function() {
    it('should return 31', done => {
      expect(countZeros(200)).to.equal(31);
      done();
    })
  })
})
