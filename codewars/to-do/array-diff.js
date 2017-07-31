'use strict';

const expect = require('chai').expect

/*
Array Diff

6 kyu

Your goal in this kata is to implement an difference function, which subtracts one list from another.
It should remove all values from list a, which are present in list b.
difference([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
difference([1,2,2,2,3],[2]) == [1,3]
*/

function array_diff(a, b) {
  return a.filter(function(i) {
    return b.indexOf(i) < 0;
  })
}

describe('Array Diff Question from Code Wars', function() {
  describe('Input: [1, 2, 2, 4, 4, 3, 5, 6], [3, 5]', function() {
    it('Expected: [1, 2, 2, 4, 4, 6]', done => {
      expect(array_diff([1, 2, 2, 4, 4, 3, 5, 6], [3, 5])).to.deep.equal([1, 2, 2, 4, 4, 6]);
      done();
    })
  })
})
