'use strict';

const expect = require('chai').expect;

/*
10.1 - Sorted Merge

You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.
*/

function sortedMerge(A, B) {
  var pointerB = B.length - 1;
  var pointerA = A.length - 1;

  while (pointerB >= 0) {
    if (B[pointerB] < A[pointerA]) {
      while (A[pointerA] > B[pointerB]) {
        pointerA--;
      }
      A.splice(pointerA, 0, B[pointerB])
      A.join();
      pointerB--;
    }
    else {
      A.push(pointerB);
      pointerB--;
    }
  }

  console.log(A);
}

describe('10.1 - Sorted Merge | Cracking the Coding Interview | Chapter 10 - Sorting and Searching', function() {
  describe('Input: [1, 5, 9, 10, 11, 22, 27], [4, 8, 15, 17]', function() {
    it('should return [1, 4, 5, 8, 9, 10, 11, 15, 17, 22, 27]', done => {
      expect(sortedMerge([1, 5, 9, 10, 11, 22, 27], [4, 8, 15, 17])).to.deep.equal([1, 4, 5, 8, 9, 10, 11, 15, 17, 22, 27]);
      done();
    })
  })
})
