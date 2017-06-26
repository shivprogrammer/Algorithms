'use strict';

const expect = require('chai').expect;

/*
Moving Zeros To The End

5kyu

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  var nonZeros = [];
  var zeros = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    }
    else {
      nonZeros.push(arr[i]);
    }
  }

  return nonZeros.concat(zeros);
}

// Time Complexity: O(N)
// Space Complexity: O(M) + O(P) -> O(N) [nonZeroes and zeros will equal arr, but it's still two arrays]

describe('Moving Zeroes to the End | 5kyu', function() {
  describe('Input: [1,2,0,1,0,1,0,3,0,1]', function() {
    it('should return: [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]', done => {
      expect(moveZeros([1,2,0,1,0,1,0,3,0,1])).to.deep.equal([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
      done();
    })
  })
})
