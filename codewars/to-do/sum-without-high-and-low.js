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
  if (!array || array.length < 2) {
    return 0;
  }

  var sum = 0;
  var high = array[0];
  var low = array[0];

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (array[i] > high) {
      high = array[i];
    }
    if (array[i] < low) {
      low = array[i];
    }
  }

  return sum - high - low;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

describe('Sum Without High and Low | Code Wars | 8kyu', function() {
  describe('with empty array as input', function() {
    it('should return 0', done => {
      expect(sumArray([])).to.equal(0);
      done();
    })
  })

  describe('with array less then length 3', function() {
    it('should return 0', done => {
      expect(sumArray([2, 10])).to.equal(0);
      done();
    })
  })

  describe('with input [ 6, 2, 1, 8, 10 ]', function() {
    it('should return 16', done => {
      expect(sumArray([ 6, 2, 1, 8, 10 ])).to.equal(16);
      done();
    })
  })
})
