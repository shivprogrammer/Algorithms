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

}

describe('Sum of Positive | Code Wars | 8kyu', function() {
  describe('with empty array', function() {
    it('return 0', done => {
      expect(positiveSum([]).to.equal(0);
      done();
    })
  })

  describe('with input [1,2,3,4,5]', function() {
    it('should return 15', done => {
      expect(positiveSum([1,2,3,4,5]).to.equal(15);
      done();
    })
  })

  describe('with input [1,-2,3,4,5]', function() {
    it('should return 13', done => {
      expect(positiveSum([1,-2,3,4,5]).to.equal(13);
      done();
    })
  })

  describe('with all negatives', function() {
    it('return 0', done => {
      expect(positiveSum([-1,-2,-3,-4,-5]).to.equal(0);
      done();
    })
  })
})
