'use strict';

const expect = require('chai').expect;

/*
8.1 - Triple Step

A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
*/

function tripleStep(steps) {
  if (steps < 0) {
    return 0;
  }
  else if (steps === 1) {
    return 1;
  }
  else {
    return tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3);
  }
}

// Time Complexity: O(3 ^ N)
// Space Complexity: O(1)

describe('8.1 - Triple Step | Cracking the Coding Interview | Chapter 8 - Recusion and Dynamic Programming', function() {
  describe('Function: tripleStep | Input: 1', function() {
    it('should return 1', done => {
      expect(tripleStep(1)).to.equal(1);
      done();
    })
  })

  describe('Function: tripleStep | Input: 3', function() {
    it('should return 2', done => {
      expect(tripleStep(3)).to.equal(2);
      done();
    })
  })

  describe('Function: tripleStep | Input: 5', function() {
    it('should return 7', done => {
      expect(tripleStep(5)).to.equal(7);
      done();
    })
  })

  describe('Function: tripleStep | Input: 6', function() {
    it('should return 13', done => {
      expect(tripleStep(6)).to.equal(13);
      done();
    })
  })
})
