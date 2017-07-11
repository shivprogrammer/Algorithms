'use strict';

const expect = require('chai').expect;

/*
Ten Pin Bowling

4kyu

Given a string, calculate the score of a bowling game.

If strike, add in scores of the following whole frame to the current one.

If spare, add in the score of the first immediate following shot

*/

function bowling(string) {
  var score = 0;
  var frames = string.split(' ');
  var tempScore = 0;
  var temp2 = 0;
  var frameTotals = [];

  for (let i = 0; i < frames.length; i++) {
    for (let j = 0; j < 1; j++) {

      if (i === frames.length - 1) {
        if (frames[i].charAt(0) === 'X') {
          if (frames[i].charAt(1) === 'X') {
            if (frames[i].charAt(2) === 'X') {
              frameTotals[i] = 60;
            }
            else {
              tempScore = 20 + parseInt(frames[i].charAt(2));
              temp2 = 10 + parseInt(frames[i].charAt(2));
              frameTotals[i] = tempScore + temp2 + parseInt(frames[i].charAt(2));
            }
          }

          else if (frames[i].charAt(2) === '/') {
            tempScore = 10 + parseInt(frames[i].charAt(1)) + 10;
            frameTotals[i] = tempScore + parseInt(frames[i].charAt(1)) + 10;
          }
          else {
            tempScore = 10 + parseInt(frames[i].charAt(1)) + parseInt(frames[i].charAt(2));
            frameTotals[i] = tempScore + parseInt(frames[i].charAt(1)) + parseInt(frames[i].charAt(2));
          }
        }

        else if (frames[i].charAt(1) === '/') {
          if (frames[i].charAt(2) === 'X') {
            frameTotals[i] = parseInt(frames[i].charAt(0)) + 30;
          }
          else {
            tempScore = 10 + parseInt(frames[i].charAt(2));
            frameTotals[i] = parseInt(frames[i].charAt(0)) + tempScore + parseInt(frames[i].charAt(2));
          }
        }

        else {
          tempScore = parseInt(frames[i].charAt(0)) + parseInt(frames[i].charAt(1)) + parseInt(frames[i].charAt(2));
          frameTotals[i] = tempScore;
          tempScore = 0;
        }
      }

///////// FOR ALL FRAMES EXCEPT LAST
      else {
        if (Number.isInteger(parseInt(frames[i].charAt(0))) && Number.isInteger(parseInt(frames[i].charAt(1)))) {
          tempScore = parseInt(frames[i].charAt(0)) + parseInt(frames[i].charAt(1));
          frameTotals[i] = tempScore;
          tempScore = 0;
        }

        if (frames[i].charAt(1) === '/') {
          if (frames[i + 1].charAt(0) === 'X') {
            framesTotals[i] = 20;
          }
          else {
            tempScore = 10 + parseInt(frames[i + 1].charAt(0));
            frameTotals[i] = tempScore;
            tempScore = 0;
          }
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
    it('Return 90', done => {
      expect(bowling("54 45 54 45 54 45 45 54 54 621")).to.equal(90);
      done();
    })
  })

  describe('Input has a spare: "54 45 54 45 54 45 45 54 5/ 621"', function() {
    it('Return 97', done => {
      expect(bowling("54 45 54 45 54 45 45 54 5/ 621")).to.equal(97);
      done();
    })
  })

  describe('Input has a strike: "54 45 54 45 54 45 45 X 54 621"', function() {
    it('Return 100', done => {
      expect(bowling("54 45 54 45 54 45 45 X 54 621")).to.equal(100);
      done();
    })
  })

  describe('Input has two strikes: "54 X 54 45 54 45 45 X 54 621"', function() {
    it('Return 110', done => {
      expect(bowling("54 X 54 45 54 45 45 X 54 621")).to.equal(110);
      done();
    })
  })

  describe('Input has a spare and a strike: "54 45 54 4/ 54 45 45 X 54 621"', function() {
    it('Return 106', done => {
      expect(bowling("54 45 54 4/ 54 45 45 X 54 621")).to.equal(106);
      done();
    })
  })

  describe('Input has two consecutive spares: "54 45 54 4/ 8/ 45 45 63 54 621"', function() {
    it('Return 104', done => {
      expect(bowling("54 45 54 4/ 8/ 45 45 63 54 621")).to.equal(104);
      done();
    })
  })

  describe('Input has two consecutive strikes: "54 45 54 4/ 54 45 X X 54 621"', function() {
    it('Return 111', done => {
      expect(bowling("54 45 54 81 54 45 X X 54 621")).to.equal(111);
      done();
    })
  })

  describe('three strikes in last frame: "54 45 36 36 63 72 27 81 54 XXX"', function() {
    it('Return 141', done => {
      expect(bowling("54 45 36 36 63 72 27 81 54 XXX")).to.equal(141);
      done();
    })
  })
})
