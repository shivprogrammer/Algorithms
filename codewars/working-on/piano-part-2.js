'use strict';

const expect = require('chai').expect;

/*
PIANO KATA, PART 2

6kyu

This time, in addition to counting each key press out loud (not starting again at 1 after 88, but continuing on to 89 and so forth) to try to keep a steady rhythm going and to see how far you can get before messing up, you're also saying the name of each note. You wonder whether this may help you develop perfect pitch in addition to learning to just know which note is which, and -- as in Piano Kata, Part 1 -- helping you to learn to move smoothly and with uniform pressure on the keys from each finger to the next and back and forth between hands.

The function you are going to write will explore one of the patterns you're experiencing in your practice: Given the number you stopped on, which note was it? For example, in the description of your piano exercise above, if you stopped at 5, your left thumb would be on the fifth key of the piano, which is C#. Or if you stopped at 92, you would have gone all the way from keys 1 to 88 and then wrapped around, so that you would be on the fourth key, which is C.

Your function will receive an integer between 1 and 10000 (maybe you think that in principle it would be cool to count up to, say, a billion, but considering how many years it would take it is just not possible) and return one of the strings "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", or "G#" indicating which note you stopped on -- here are a few more examples:

1     "A"
12    "G#"
42    "D"
100   "G#"
2017  "F"
*/

function whichNote(keyPressCount) {
}

describe('piano part 2 code wars', function() {
  describe('with one key pressed', function() {
    it('should return A', done => {
      expect(whichNote(1)).to.equal('A');
      done();
    })
  })

  describe('with input 5', function() {
    it('should return C#', done => {
      expect(whichNote(5)).to.equal('C#');
      done();
    })
  })

  describe('with input 88', function() {
    it('should return C', done => {
      expect(whichNote(88)).to.equal('C');
      done();
    })
  })

  describe('with input 2017', function() {
    it('should return F', done => {
      expect(whichNote(2017)).to.equal('F');
      done();
    })
  })
})
