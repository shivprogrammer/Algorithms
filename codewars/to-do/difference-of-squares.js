'use strict';

const expect = require('chai').expect;

/*
Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum. For example, when n = 10:

The square of the sum of the first ten natural numbers is:

(1 + 2 + ... + 10)**2 = 55**2 = 3025

The sum of the squares of first ten natural numbers is :

1**2 + 2**2 + ... + 10**2 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is 3025 - 385 = 2640.

Example

differenceOfSquares(10) // => 2640
*/

function differenceOfSquares(x) {
  var sumSquare = 0;
  var squareSum = 0;

  for (let i = 0; i <= x; i++) {
    sumSquare += i;
    squareSum += Math.pow(i, 2);
  }

  return Math.pow(sumSquare, 2) - squareSum;
}

describe('Difference of Squares | Code Wars | 7kyu', function() {
  describe('Input: 5', function() {
    it('should return 170', done => {
      expect(differenceOfSquares(5)).to.equal(170);
      done();
    })
  })

  describe('Input: 10', function() {
    it('should return 2640', done => {
      expect(differenceOfSquares(10)).to.equal(2640);
      done();
    })
  })

  describe('Input: 100', function() {
    it('should return 25164150', done => {
      expect(differenceOfSquares(100)).to.equal(25164150);
      done();
    })
  })
})
