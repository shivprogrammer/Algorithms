'use strict';

const expect = require('chai').expect;
/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450
*/

function score(dice) {
  var score = 0;

  var inputMap = new Map();
  inputMap.set(1, 0);
  inputMap.set(2, 0);
  inputMap.set(3, 0);
  inputMap.set(4, 0);
  inputMap.set(5, 0);
  inputMap.set(6, 0);

  for (let i = 0; i < dice.length; i++) {
    if (inputMap.has(dice[i])) {
      inputMap.set(dice[i], inputMap.get(dice[i]) + 1);
    }
  }

  if (inputMap.get(1) >= 3) {
    score += 1000;
    inputMap.set(1, inputMap.get(1) - 3);
  }
  while(inputMap.get(1) > 0) {
    score += 100;
    inputMap.set(1, inputMap.get(1) -1);
  }

  if (inputMap.get(6) >= 3) {
    score += 600;
  }

  if (inputMap.get(5) >= 3) {
    score += 500;
    inputMap.set(1, inputMap(5) - 3);
  }
  while(inputMap.get(5) > 0) {
    score += 50;
    inputMap.set(5, inputMap.get(5) -1);
  }

  if (inputMap.get(4) >= 3) {
    score += 400;
  }

  if (inputMap.get(3) >= 3) {
    score += 300;
  }

  if (inputMap.get(2) >= 3) {
    score += 200;
  }

  return score;
}

describe("Green is Good | 5kyu", function() {
  describe('Input: [2, 3, 4, 6, 2]', function() {
    it('should return 0', done => {
      expect(score([2, 3, 4, 6, 2])).to.equal(0);
      done();
    })
  })

  describe('Input: [4, 4, 4, 3, 3]', function() {
    it('should return 400', done => {
      expect(score([4, 4, 4, 3, 3])).to.equal(400);
      done();
    })
  })

  describe('Input: [2, 4, 4, 5, 4]', function() {
    it('should return 450', done => {
      expect(score([2, 4, 4, 5, 4])).to.equal(450);
      done();
    })
  })
})
