'use strict';

const expect = require('chai').expect;

/*
High and Low

7 kyu

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(nums) {
  var numArray = nums.split(' ');
  var high = 0;
  var low = Infinity;

  for (let i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) > high) {
      high = parseInt(numArray[i]);
    }
    if (parseInt(numArray[i]) < low) {
      low = parseInt(numArray[i]);
    }
  }

  return high + ' ' + low;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

describe('Find Highest and Lowest Int Question Code Wars', function() {
  describe('Input: "1 9 3 4 -5"', function() {
    it('Expected: "9 -5"', done => {
      expect(highAndLow("1 9 3 4 -5")).to.equal("9 -5");
      done();
    })
  })

  describe('Input: "1 2 -3 4 5"', function() {
    it('Expected: "5 -3"', done => {
      expect(highAndLow("1 2 -3 4 5")).to.equal("5 -3");
      done();
    })
  })

  describe('Input: "1111 222 -124"', function() {
    it('Expected: "1111 -124"', done => {
      expect(highAndLow("1111 222 -124")).to.equal("1111 -124");
      done();
    })
  })
})
