'use strict';

const expect = require('chai').expect;

/*
Sum Wihtout Highest and Lowest Number

8kyu

Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
*/

function sumArray(array) {

}

describe('Sum Without High and Low | Code Wars | 8kyu', function() {
  describe('with input [ 6, 2, 1, 8, 10 ]', function() {
    it('should return 16', done => {
      expect(sumArray([ 6, 2, 1, 8, 10 ])).to.equal(16);
      done();
    })
  })
})
