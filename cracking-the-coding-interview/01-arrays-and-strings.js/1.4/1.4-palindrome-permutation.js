'use strict';

const expect = require('chai').expect;

/*
1.4 Palindrome Permutation

Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
*/

function isPalindrome(str) {
  var oddCount = 0;
  var letterMap = new Map();

  for (let i = 0; i < str.length; i++) {
    var letter = str.charAt(i).toLowerCase();

    if (letter != ' ' && letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter) + 1);
    }
    else if (letter != ' ') {
      letterMap.set(letter, 1);
    }
  }

  var vals = letterMap.values();

  for (let x = 0; x < letterMap.size; x++) {
    if (vals.next().value % 2 === 1) {
      oddCount++;
    }
  }

  return oddCount < 2;
}

describe('1.4 Palindrome Permutation | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('Input: "Tact Coa"', function() {
    it('should return true', done => {
      expect(isPalindrome('Tact Coa')).to.equal(true);
      done();
    })
  })

  describe('Input: "aabbeef"', function() {
    it('should return true', done => {
      expect(isPalindrome('aabbeef')).to.equal(true);
      done();
    })
  })

  describe('Input: "shivvy"', function() {
    it('should return false', done => {
      expect(isPalindrome('shivvy')).to.equal(false);
      done();
    })
  })

  describe('correct input but with multiple spaces: "bob     ob"', function() {
    it('should return true', done => {
      expect(isPalindrome('bob     ob')).to.equal(true);
      done();
    })
  })

  describe('Input: "fuck"', function() {
    it('should return false', done => {
      expect(isPalindrome('fuck')).to.equal(false);
      done();
    })
  })
})
