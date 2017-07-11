'use strict';

const expect = require('chai').expect;

/*
Scramblies

5kyu

Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
*/

function scramble(str1, str2) {
  var string1Map = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (string1Map.has(str1.charAt(i))) {
      string1Map.set(str1.charAt(i), string1Map.get(str1.charAt(i)) + 1);
    }
    else {
      string1Map.set(str1.charAt(i), 1);
    }
  }

  for (let x = 0; x < str2.length; x++) {
    if (string1Map.has(str2.charAt(x))) {
      string1Map.set(str2.charAt(x), string1Map.get(str2.charAt(x)) - 1);
    }
    else {
      return false;
    }
  }

  return true;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

describe('Scramblies | 5kyu', function() {
  describe('str1: "rkqodlw", str2: "world"', function() {
    it('should return true', done => {
      expect(scramble('rkqodlw', 'world')).to.equal(true);
      done();
    })
  })

  describe('str1: "cedewaraaossoqqyt", str2: "codewars"', function() {
    it('should return true', done => {
      expect(scramble('cedewaraaossoqqyt', 'codewars')).to.equal(true);
      done();
    })
  })

  describe('str1: "katas", str2: "steak"', function() {
    it('should return false', done => {
      expect(scramble('katas', 'steak')).to.equal(false);
      done();
    })
  })
})
