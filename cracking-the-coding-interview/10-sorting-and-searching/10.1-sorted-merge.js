'use strict';

const expect = require('chai').expect;

/*
10.1 - Sorted Merge

You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.
*/

function sortedMerge(A, B) {
  var pointerA = 0;
  var pointerB = 0;

  while (pointerA < A.length && pointerB < B.length){
    if (A[pointerA] < B[pointerB]) {
      pointerA++;
    }
    else {
      A = A.slice(0, pointerA).concat(B[pointerB]).concat(A.slice(pointerA, A.length));
      pointerA++;
      pointerB++;
    }
  }

  while (pointerB < B.length) {
    A.push(B[pointerB])
    pointerB++;
  }

  return A;
}

// Time Complexity: O(A + B)
// Space Complexity: No additional space required

describe('10.1 - Sorted Merge | Cracking the Coding Interview | Chapter 10 - Sorting and Searching', function() {
  describe('Input: [1, 5, 9, 10, 11, 22, 27], [4, 8, 15, 17]', function() {
    it('should return [1, 4, 5, 8, 9, 10, 11, 15, 17, 22, 27]', done => {
      expect(sortedMerge([1, 5, 9, 10, 11, 22, 27], [4, 8, 15, 17])).to.deep.equal([1, 4, 5, 8, 9, 10, 11, 15, 17, 22, 27]);
      done();
    })
  })

  describe('Input: [-1, 3, 5, 8, 11], [4, 7, 9, 10]', function() {
    it('should return [-1, 3, 4, 5, 7, 8, 9, 10, 11]', done => {
      expect(sortedMerge([-1, 3, 5, 8, 11], [4, 7, 9, 10])).to.deep.equal([-1, 3, 4, 5, 7, 8, 9, 10, 11]);
      done();
    })
  })
})
