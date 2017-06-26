'use strict';

const expect = require('chai').expect;

/*
Shortest Word

7kyu

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  var shortWord = Infinity;
  var tempWord = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      tempWord++;
      if (tempWord < shortWord) {
        shortWord = tempWord;
      }
    }

    if (s.charAt(i) === ' ') {
      if (tempWord < shortWord) {
        shortWord = tempWord;
        tempWord = 0;
      }
      else {
        tempWord = 0;
      }
    }

    else {
      tempWord++;
    }
  }

  return shortWord;
}

// Time Complexity: O(N)
// Space Complexity: O(1) [Amazing use of space, nearly all answers on code wars used an array and I am using only primitive data]

describe('Shorted Word | Code Wars | 7kyu', function() {
  describe('Input: "bitcoin take over the world maybe who knows perhaps"', function() {
    it('should return 3', done => {
      expect(findShort('bitcoin take over the world maybe who knows perhaps')).to.equal(3);
      done();
    })
  })

  describe('Input: "turns out random test cases are easier than writing out basic ones"', function() {
    it('should return 3', done => {
      expect(findShort('turns out random test cases are easier than writing out basic ones')).to.equal(3);
      done();
    })
  })
})
