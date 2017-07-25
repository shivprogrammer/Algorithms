'use strict';

const expect = require('chai').expect;

/*
Lost Number in Number Sequence

7kyu

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note that N may be 1 or less (in the latter case, the first array will be []).
*/

function findDeletedNumber(arr, mixArr) {
  var sorted = mixArr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != sorted[i]) {
      return arr[i];
    }
  }

  return 0;
}

// Time Complexity: O(N * Nlog(N))
// Space Complexity: O(N)

describe('Lost Number in Number Sequence', function() {
  describe('Input: [1, 2, 3, 4, 5] & [3, 4, 1, 5]', function() {
    it('should return 2', done => {
      expect(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])).to.equal(2);
      done();
    })
  })

  describe('Input: [1, 2, 3, 4, 5, 6, 7, 8, 9] & [1, 9, 7, 4, 6, 2, 3, 8]', function() {
    it('should return 5', done => {
      expect(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])).to.equal(5);
      done();
    })
  })

  describe('Input: [1, 2, 3, 4, 5, 6, 7, 8, 9] & [5, 7, 6, 9, 4, 8, 1, 2, 3]', function() {
    it('should return 0', done => {
      expect(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])).to.equal(0);
      done();
    })
  })
})
