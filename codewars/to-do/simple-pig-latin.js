'use strict';

const expect = require('chai').expect;

/*
Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

function pigIt(str) {
  var words = str.split(' ');
  var temp = '';
  var output = '';

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < 1; j++) {
      if (j === 0) {
        temp = words[i][j];
        output += words[i].slice(1, words[i].length) + temp + 'ay ';
        temp = '';
      }
    }
  }

  return output.slice(0, output.length - 1);
}

describe('Simple Pig Latin', function() {
  describe('Input: Pig Latin is cool', function() {
    it('Expected: igPay atinlay siay oolcay', done => {
      expect(pigIt('Pig latin is cool')).to.equal('igPay atinlay siay oolcay');
      done();
    })
  })

  describe('Input: This is my string', function() {
    it('Expected: hisTay siay ymay tringsay', done => {
      expect(pigIt('This is my string')).to.equal('hisTay siay ymay tringsay');
      done();
    })
  })
})
