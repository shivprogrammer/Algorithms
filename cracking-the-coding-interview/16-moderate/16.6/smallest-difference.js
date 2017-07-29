'use strict';

const expect = require('chai').expect;

/*
Smallest Difference

Givene two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative integer) difference. Return the difference
*/

function smallDif(arr1, arr2) {
}

describe('16.6 Smallest Difference | Cracking the Coding Interview | Chapter 16 -- Moderate', function() {
  describe('Input: [1, 3, 15, 11, 2], [23, 127, 235, 19, 8]', function() {
    it('should return [11, 8]', done => {
      expect(smallDif([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])).to.deep.equal([11, 8]);
      done();
    })
  })
})
