'use strict';

const expect = require('chai').expect;

/*
10.1 - Sorted Merge

You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.
*/

function sortedMerge(A, B) {

}

describe('10.1 - Sorted Merge | Cracking the Coding Interview | Chapter 10 - Sorting and Searching', function() {
  describe('Input: [1, 5, 9, 10, 11, 22, 27], [4, 8, 10, 15, 17]', function() {
    it('should return [1, 4, 5, 8, 9, 10, 10, 11, 15, 17, 22, 27]', done => {
      expect(sortedMerge([1, 5, 9, 10, 11, 22, 27], [4, 8, 10, 15, 17])).to.deep.equal([1, 4, 5, 8, 9, 10, 10, 11, 15, 17, 22, 27]);
      done();
    })
  })
})
