'use strict';

const expect = require('chai').expect;

/*
Sum of Two Lowest Positive Integers

7kyu

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.

Hint: Do not modify the original array.
*/

function sumTwoSmallestNumbers(numbers) {
}

describe('Sum of Two Lowest Positive Integers | 7kyu', function() {
  describe('Input: [5, 8, 12, 19, 22]', function() {
    it('should return 13', done => {
      expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22]).to.equal(13);
      done();
    })
  })

  describe('Input: [15, 28, 4, 2, 43]', function() {
    it('should return 6', done => {
      expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43]).to.equal(6);
      done();
    })
  })

  describe('Input: [3, 87, 45, 12, 7]', function() {
    it('should return 10', done => {
      expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7]).to.equal(10);
      done();
    })
  })

  describe('Input: [23, 71, 33, 82, 1]', function() {
    it('should return 24', done => {
      expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1]).to.equal(24);
      done();
    })
  })

  describe('Input: [52, 76, 14, 12, 4]', function() {
    it('should return 16', done => {
      expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4]).to.equal(16);
      done();
    })
  })
})
