'use strict';

const expect = require('chai').expect;

/*
Find Parity Outlier

6 kyu

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.

For example:
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160
*/

function findOutlier(integers) {

}

describe('FIND THE PARITY OUTLIER QUESTION FROM CODE WARS', function() {
  describe('for no input passed in', function() {
    it('return undefined', done => {
      expect(findOutlier([])).to.equal(undefined);
      done();
    })
  })

  describe('for an empty array', function() {
    it('return undefined', done => {
      expect(findOutlier([])).to.equal(undefined);
      done();
    })
  })

  describe('even array, length 3', function() {
    it('return 1', done => {
      expect(findOutlier([0, 1, 2])).to.equal(1);
      done();
    })
  })

  describe('odd array, length 3', function() {
    it('return 2', done => {
      expect(findOutlier([1, 2, 3])).to.equal(2);
      done();
    })
  })

  describe('even array with length of 5', function() {
    it('return 3', done => {
      expect(findOutlier([2,6,8,10,3])).to.equal(3);
      done();
    })
  })

  describe('even array, length 8', function() {
    it('return 11', done => {
      expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).to.equal(11);
      done();
    })
  })

  describe('odd array, length 7', function() {
    it('return 160', done => {
      expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).to.equal(160);
      done();
    })
  })

  describe('odd array with no evens', function() {
    it('return undefined', done => {
      expect(findOutlier([163, 3, 1719, 19, 11, 13, -21])).to.equal(undefined);
      done();
    })
  })

  describe('even array with no odds', function() {
    it('return undefined', done => {
      expect(findOutlier([2, 4, 0, 100, 4, 112, 2602, 36])).to.equal(undefined);
      done();
    })
  })

  describe('even array but with a negative outlier', function() {
    it('return -40827255', done => {
      expect(findOutlier([195585050,-40827255,-101816232])).to.equal(-40827255);
      done();
    })
  })

  describe('odd array with negative outlier', function() {
    it('return -40827256', done => {
      expect(findOutlier([195585051,-40827256,-101816233])).to.equal(-40827256);
      done();
    })
  })
})
