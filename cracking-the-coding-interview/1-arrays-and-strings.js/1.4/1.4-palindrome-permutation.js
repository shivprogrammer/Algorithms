'use strict';

/*
1.4 Palindrome Permutation

Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
*/

function isPalindrome(str) {
  var letterMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!letterMap.has(str.charAt(i))) {
      letterMap.set(str.charAt(i), 1);
    }
    else if (letterMap.has(str.charAt(i))) {
      letterMap.set(str.charAt(i), letterMap.get(str.charAt(i) + 1));
    }
  }
}

describe('1.4 Palindrome Permutation | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('Input: "Tact Coa"', function() {
    it('should return true', done => {
      expect(isPalindrome('Tact Coa')).to.equal(true);
      done();
    })
  })
})
