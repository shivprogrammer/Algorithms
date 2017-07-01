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
      if (i === frames.length - 1) {
        tempScore = parseInt(frames[i].charAt(0)) + parseInt(frames[i].charAt(1)) + parseInt(frames[i].charAt(2));
        frameTotals[i] = tempScore;
        tempScore = 0;
      }

      else {

        if (Number.isInteger(parseInt(frames[i].charAt(0))) && Number.isInteger(parseInt(frames[i].charAt(1)))) {
          tempScore = parseInt(frames[i].charAt(0)) + parseInt(frames[i].charAt(1));
          frameTotals[i] = tempScore;
          tempScore = 0;
        }

        if (frames[i].charAt(1) === '/') {
          tempScore = 10 + parseInt(frames[i + 1].charAt(0));
          frameTotals[i] = tempScore;
          tempScore = 0;
        }

        if (frames[i].charAt(0) === 'X') {
          if (frames[i + 1].charAt(0) === 'X' || frames[i + 1].charAt(1) === '/') {
            frameTotals[i] = 20;
          }
          else {
            tempScore = 10 + parseInt(frames[i + 1].charAt(0)) + parseInt(frames[i + 1].charAt(1));
            frameTotals[i] = tempScore;
            tempScore = 0;
          }
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
  describe('Input of just numbers: "54 45 54 45 54 45 45 54 54 621"', function() {
    it('should return 90', done => {
      expect(bowling("54 45 54 45 54 45 45 54 54 621")).to.equal(90);
      done();
    })
  })

  describe('Input has a spare: "54 45 54 45 54 45 45 54 5/ 621"', function() {
    it('should return 97', done => {
      expect(bowling("54 45 54 45 54 45 45 54 5/ 621")).to.equal(97);
      done();
    })
  })

  describe('Input has a strike: "54 45 54 45 54 45 45 X 54 621"', function() {
    it('should return 100', done => {
      expect(bowling("54 45 54 45 54 45 45 X 54 621")).to.equal(100);
      done();
    })
  })

  describe('Input has two strikes: "54 X 54 45 54 45 45 X 54 621"', function() {
    it('should return 110', done => {
      expect(bowling("54 X 54 45 54 45 45 X 54 621")).to.equal(110);
      done();
    })
  })

  describe('Input has a spare and a strike: "54 45 54 4/ 54 45 45 X 54 621"', function() {
    it('should return 106', done => {
      expect(bowling("54 45 54 4/ 54 45 45 X 54 621")).to.equal(106);
      done();
    })
  })
})
