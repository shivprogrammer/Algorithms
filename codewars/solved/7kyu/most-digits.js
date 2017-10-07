'use strict';

const expect = require('chai').expect;

/*
Most Digits

7kyu

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array) {
  var longest = 0;
  var longestElem;

  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().length > longest) {
      longest = array[i].toString().length;
      longestElem = array[i];
    }
  }

  return longestElem;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

describe('Most Digits | Code Wars | 7kyu', function() {
  describe('Input: [1, 10, 100]', function() {
    it('should return 100', done => {
      expect(findLongest([1, 10, 100])).to.equal(100);
      done();
    })
  })

  describe('Input: [9000, 8, 800]', function() {
    it('should return 9000', done => {
      expect(findLongest([9000, 8, 800])).to.equal(9000);
      done();
    })
  })

  describe('Input: [8, 900, 500]', function() {
    it('should return 900', done => {
      expect(findLongest([8, 900, 500])).to.equal(900);
      done();
    })
  })
})
