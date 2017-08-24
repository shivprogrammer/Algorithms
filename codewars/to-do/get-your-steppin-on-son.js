'use strict';

const expect = require('chai').expect;

/*
Get Your Steppin' On Son

6kyu

function wordStep(str) -> that takes in a string and creates a step with that word.

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
  var words = str.split(' ');
  var height = 0;
  var heightWordCount = 0;
  var width = 0;
  var widthWordCount = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (i % 2 === 0) {
        height += words[i].length;
        heightWordCount++;
      }
      else {
        width += words[i].length;
        widthWordCount++;
      }
      height - heightWordCount;
      width - widthWordCount;
    }
  }
}

var test1 = [
  ['H','E','L','L','O'],
  [' ',' ',' ',' ','I'],
  [' ',' ',' ',' ','L']
];

var test2 = [
  ['S','N','A','K','E','S',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','H',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','O',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','E','F','F','O','R','T',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','R',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','U',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','M',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','P','O','T','A','T','O']
];

var test3 = [
  ['C', 'O', 'D', 'E', 'W', 'A', 'R', 'S', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'N', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'A', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'L', 'A', 'K', 'E'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K']
];

describe('Get Your Steppin On Son | 6kyu', function() {
  describe('Input: "HELLO OIL"', function() {
    it('should return test1', done=> {
      expect(wordStep('HELLO OIL')).to.deep.equal(test1);
      done();
    })
  })

  describe('Input: "SNAKES SHOE EFFORT TRUMP POTATO"', function() {
    it('should return test2', done=> {
      expect(wordStep('SNAKES SHOE EFFORT TRUMP POTATO')).to.deep.equal(test2);
      done();
    })
  })

  describe('Input: "CODEWARS SNAIL LAKE EEK"', function() {
    it('should return test3', done=> {
      expect(wordStep('CODEWARS SNAIL LAKE EEK')).to.deep.equal(test3);
      done();
    })
  })
})
