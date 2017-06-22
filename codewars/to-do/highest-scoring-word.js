'use strict';

/*
Highest Scoring Word

6kyu

Given a string of words (x), you need to find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything inbetween.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lower case and all inputs will be valid.
*/

function high(x){
}

describe('Highest Scoring Word | Code Wars | 6kyu', function() {
  describe('Input: "man I need a taxi up to ubud"', function() {
    it('should return "taxi"', done => {
      expect(high('man I need a taxi up to ubud')).to.equal('taxi');
      done();
    })
  })

  describe('Input: "what time are we climbing up the volcano"', function() {
    it('should return "volcano"', done => {
      expect(high('what time are we climbing up the volcano')).to.equal('volcano');
      done();
    })
  })

  describe('Input: "take me to semynak"', function() {
    it('should return "semynak"', done => {
      expect(high('take me to semynak')).to.equal('semynak');
      done();
    })
  })
})
