'use strict';

const expect = require('chai').expect;

/*
Given a string, calculate the score of a bowling game.

If strike, add in scores of the following whole frame to the current one.

If spare, add in the score of the first immediate following shot

*/

function bowling(string) {
  var score = 0;
  var frames = string.split(' ');
  var tempScore = 0;
  var frameTotals = [];

  for (let i = 0; i < frames.length; i++) {
    for (let j = 0; j < 1; j++) {
      if (!frames[i].charAt[2]) {
        if (Number.isInteger(parseInt(frames[i].charAt(0))) && Number.isInteger(parseInt(frames[i].charAt(1)))) {
          tempScore = parseInt(frames[i].charAt(0)) + parseInt(frames[i].charAt(1));
          frameTotals[i] = tempScore;
          tempScore = 0;
        }
      }
    }
  }
  
  for (let x = 0; x < frameTotals.length; x++) {
    score += frameTotals[x];
  }

  return score;
}


describe('Bowling | 4kyu', function() {
  describe('Input: "54 45 54 45 54 45 45 54 54 62"', function() {
    it('should return 89', done => {
      expect(bowling("54 45 54 45 54 45 45 54 54 62")).to.equal(89);
      done();
    })
  })

  describe('Input: "54 45 54 45 54 45 45 54 5/ 62"', function() {
    it('should return 96', done => {
      expect(bowling("54 45 54 45 54 45 45 54 5/ 62")).to.equal(96);
      done();
    })
  })
})
