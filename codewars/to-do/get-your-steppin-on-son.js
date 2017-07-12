'use strict';

const expect = require('chai').expect;

/*
Get Your Steppin' On Son

6kyu

function wordStep(str)
that takes in a string and creates a step with that word.

E.g

wordStep('SNAKES SHOE EFFORT TRUMP POTATO') ===

[['S','N','A','K','E','S',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ','H',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ','O',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ','E','F','F','O','R','T',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','R',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','U',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','M',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','P','O','T','A','T','O']]

Every word will end with the character that the next word will start with. You will start top left of the array and end bottom right. All cells that are not occupied by a letter needs to be a space ' '
*/

function wordStep(str) {
  
}

describe('Get Your Steppin On Son | 6kyu', function() {
  describe('Input: "HELLO OIL"', function() {
    it('should return stepped out matrix', done=> {
      expect(wordStep('HELLO OIL')).to.deep.equal([['H','E','L','L','O'],[' ',' ',' ',' ','I'],[' ',' ',' ',' ','L']]);
      done();
    })
  })

  describe('Input: "SNAKES SHOE EFFORT TRUMP POTATO"', function() {
    it('should return a big ass matrix', done=> {
      expect(wordStep('SNAKES SHOE EFFORT TRUMP POTATO')).to.deep.equal([['S', 'N', 'A', 'K', 'E', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', 'H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', 'E', 'F', 'F', 'O', 'R', 'T', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'U', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'M', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'P', 'O', 'T', 'A', 'T', 'O']]);
      done();
    })
  })

  describe('Input: "CODEWARS SNAIL LAKE EEK"', function() {
    it('another large matrix', done=> {
      expect(wordStep('CODEWARS SNAIL LAKE EEK')).to.deep.equal([['C', 'O', 'D', 'E', 'W', 'A', 'R', 'S', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'N', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'A', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'L', 'A', 'K', 'E'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K']]);
      done();
    })
  })
})
