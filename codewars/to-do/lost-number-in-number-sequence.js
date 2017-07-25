'use strict';

const expect = require('chai').expect;

/*
Lost Number in Number Sequence

7kyu
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
