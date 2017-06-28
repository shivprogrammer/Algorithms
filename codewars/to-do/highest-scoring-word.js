'use strict';

const expect = require('chai').expect;

/*
Highest Scoring Word

6kyu

Given a string of words (x), you need to find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything inbetween.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lower case and all inputs will be valid.
*/

function high(x) {
  var topWord = '';
  var topScore = 0;
  var tempScore = 0;

  var alphabetMap = new Map();
  alphabetMap.set('a', 1);
  alphabetMap.set('b', 2);
  alphabetMap.set('c', 3);
  alphabetMap.set('d', 4);
  alphabetMap.set('e', 5);
  alphabetMap.set('f', 6);
  alphabetMap.set('g', 7);
  alphabetMap.set('h', 8);
  alphabetMap.set('i', 9);
  alphabetMap.set('j', 10);
  alphabetMap.set('k', 11);
  alphabetMap.set('l', 12);
  alphabetMap.set('m', 13);
  alphabetMap.set('n', 14);
  alphabetMap.set('o', 15);
  alphabetMap.set('p', 16);
  alphabetMap.set('q', 17);
  alphabetMap.set('r', 18);
  alphabetMap.set('s', 19);
  alphabetMap.set('t', 20);
  alphabetMap.set('u', 21);
  alphabetMap.set('v', 22);
  alphabetMap.set('w', 23);
  alphabetMap.set('x', 24);
  alphabetMap.set('y', 25);
  alphabetMap.set('z', 26);

  var words = x.split(' ');

  for (let i = 0; i < words.length; i++) {
    for(let j = 0; j < words[i].length; j++) {
      tempScore += alphabetMap.get(words[i][j]);
    }
    if (tempScore > topScore) {
      topScore = tempScore;
      topWord = words[i];
      tempScore = 0;
    }
    else {
      tempScore = 0;
    }
  }

  return topWord;
}

// Time Complexity: O(N squared)
// Space Complexity: O(N) [words] + O[M] [alphabetMap]

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
