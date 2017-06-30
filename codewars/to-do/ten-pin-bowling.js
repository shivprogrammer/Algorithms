'use strict';

const expect = require('chai').expect;

/*
Given a string, calculate the score of a bowling game.

*/

function bowling(string) {
  var score = 0;
  var frames = string.split('');

  for (let i = 0; i < frames.length; i++) {
    if (frames[i] != ' ') {
      score += parseInt(frames[i]);
    }
  }

  return score;
}

describe('Bowling | 4kyu', function() {
  describe('Input: "54 45 54 45 54 45 45 54 54 621"', function() {
    it('should return 90', done => {
      expect(bowling("54 45 54 45 54 45 45 54 54 621")).to.equal(90);
      done();
    })
  })

  describe('Input: "54 45 54 45 54 45 45 54 54 621"', function() {
    it('should return 90', done => {
      expect(bowling("54 45 54 45 54 45 45 54 5/ 621")).to.equal(97);
      done();
    })
  })
})
