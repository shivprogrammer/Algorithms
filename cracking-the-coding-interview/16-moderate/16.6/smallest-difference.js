'use strict';

const expect = require('chai').expect;

/*
Smallest Difference

Givene two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative integer) difference. Return the difference
*/

function smallDif(arr1, arr2) {
  var smallest = Infinity;
  var output = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < smallest) {
        smallest = Math.abs(arr1[i] - arr2[j]);
        output = [arr1[i], arr2[j]];
      }
    }
  }

  return output;
}

// Time Complexity: O(N squared) [nested for loops]
// Space Complexity: O(M) [output]

// -- THERE IS A MORE EFFICIENT ALGORITHM THAT NEEDS TO BE CODED, WHICH IS BY SORTING THE ARRAYS FIRST -- 

describe('16.6 Smallest Difference | Cracking the Coding Interview | Chapter 16 -- Moderate', function() {
  describe('Input: [1, 3, 15, 11, 2], [23, 127, 235, 19, 8]', function() {
    it('should return [11, 8]', done => {
      expect(smallDif([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])).to.deep.equal([11, 8]);
      done();
    })
  })
})
