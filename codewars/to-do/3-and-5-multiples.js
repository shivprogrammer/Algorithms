'use strict';

const expect = require('chai').expect;

/*
3 and 5 Multiples

6kyu

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number) {
  var threes = Math.floor((number - 1) / 3);
  var fives = Math.floor((number - 1) / 5);
  var multiplesArray = [];
  var num3 = 3;
  var num5 = 5;

  for (let i = 0; i < threes; i++) {
    multiplesArray.push(num3);
    num3 += 3;
  }

  for (let j = 0; j < fives; j++) {
    multiplesArray.push(num5);
    num5 += 5;
  }

  var uniqueArray = multiplesArray.filter(function(item, index) {
    return multiplesArray.indexOf(item) == index;
  })

return uniqueArray.reduce(
  (acc, currentVal, currentIndex, array) => {
    return acc + currentVal;
  }, 0)
}

// Time Complexity: O(N) + O(N) + O(N) + O(N) => O(N)
// Space Complexity: O(N) + O(N) => O(N)

describe('Code Wars 3 and 5 multiples questions', function() {
  describe('With an input of 10', function() {
    it('should return 23', done => {
      expect(solution(10)).to.equal(23);
      done();
    })
  })

  describe('With an input of 20', function() {
    it('should return 78', done => {
      expect(solution(20)).to.equal(78);
      done();
    })
  })
})
