'use strict';

const expect = require('chai').expect;

/*
Sum of Positive

8kyu

You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: array may be empty, in this case return 0.
*/

function positiveSum(arr) {
  var output = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      output += arr[i];
      console.log('these are the steps of output along the way: step ' + i + " " + output);
    }
  }

  return output;
}

// i = 0 => arr[0] => 1 => output = 0 + 1 = 1;
// i = 1 => arr[1] => 2 => output = 1 + 2 = 3;
// i = 2 => arr[2] => 3 => output = 3 + 3 = 6;
// i = 3 => arr[3] => 4 => output = 6 + 4 = 10;
// i = 4 => arr[4] => 5 => output = 10 + 5 = 15;

// Time Complexity: O(N)
// Space Complexity: O(1)

describe('Sum of Positive | Code Wars | 8kyu', function() {
  describe('with empty array', function() {
    it('return 0', done => {
      expect(positiveSum([])).to.equal(0);
      done();
    })
  })

  describe('with input [1,2,3,4,5]', function() {
    it('should return 15', done => {
      expect(positiveSum([1,2,3,4,5])).to.equal(15);
      done();
    })
  })

  describe('with input [1,-2,3,4,5]', function() {
    it('should return 13', done => {
      expect(positiveSum([1,-2,3,4,5])).to.equal(13);
      done();
    })
  })

  describe('with all negatives', function() {
    it('return 0', done => {
      expect(positiveSum([-1,-2,-3,-4,-5])).to.equal(0);
      done();
    })
  })
})
