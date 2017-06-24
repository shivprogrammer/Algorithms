// 178 PASSING TESTS AND 1 FAILED TEST ON CODE WARS

'use strict';

const expect = require('chai').expect;

/*
Count of positives / sum of negatives

8kyu

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:
*/

function countPositivesSumNegatives(input) {
  if (!input || input === [''] || input === undefined) {
    return [];
  }

  var posCount = 0;
  var sumNeg = 0;

  input.forEach((x) => x > 0 ? posCount++ : sumNeg += x);

  return [posCount, sumNeg];
}

describe('Count of Positives / Sum of Negatives | Code Wars | 8kyu', function() {
  describe('Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]', function() {
    it('should return [10, -65]', done => {
      expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).to.deep.equal([10, -65]);
      done();
    })
  })

  describe('Input: [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]', function() {
    it('should return [8, -50]', done => {
      expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).to.deep.equal([8, -50]);
      done();
    })
  })
})
