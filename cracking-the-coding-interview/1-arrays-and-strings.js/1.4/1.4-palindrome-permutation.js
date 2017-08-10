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
    if (!letterMap.has(str.charAt(i).toLowerCase())) {
      letterMap.set(str.charAt(i).toLowerCase(), 1);
      console.log(str.charAt(i), letterMap.get(str.charAt(i)));
    }
    else {
      letterMap.set(str.charAt(i).toLowerCase(), letterMap.get(str.charAt(i).toLowerCase()) + 1);
      console.log(str.charAt(i), letterMap.get(str.charAt(i)));
    }
  }

  for (var x in letterMap) {
    if ((letterMap.get(x) % 2) != 0) {
      oddCount++;
    }
  }

  return oddCount;
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
})
