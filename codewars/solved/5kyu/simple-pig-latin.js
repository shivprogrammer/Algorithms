'use strict';

const expect = require('chai').expect

/*
Simple Pig Latin

5kyu

Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

function pigIt(str) {
  var output = '';
  var tempLetter = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || tempLetter === '') {
      tempLetter = str.charAt(i);
    }

    if (str.charAt(i) === ' ') {
      output += tempLetter + 'ay';
      tempLetter = '';
    }

    if (i != 0 && !(str.charAt(i - 1) === ' ')) {
      output += str.charAt(i);
    }

    if (!str.charAt(i + 1)) {
      output += tempLetter + 'ay';
    }
  }

  return output;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

describe('Pig Latin Question Code Wars', function() {
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

  describe('Input: "Max is dope"', function() {
    it('Expected: axMay siay opeday', done => {
      expect(pigIt('Max is dope')).to.equal('axMay siay opeday');
      done();
    })
  })
})
