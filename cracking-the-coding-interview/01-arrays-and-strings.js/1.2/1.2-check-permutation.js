'use strict';

const expect = require('chai').expect;

/*
Check Permutation

Given two strings, write a method to decide if one is a permutation of the other.
*/

function checkPerm(str1, str2) {
  var permMap = new Map();

  if (str1.length != str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (permMap.has(str1.charAt(i))) {
      permMap.set(str1.charAt(i), permMap.get(str1.charAt(i) + 1));
    }
    else {
      permMap.set(str1.charAt(i), 1);
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (permMap.get(str2.charAt(j)) > 0) {
      permMap.set(str2.charAt(j), permMap.get(str2.charAt(j) - 1));
    }
    else {
      return false;
    }
  }

  return true;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

describe('1.2 Check Permutation | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('Input: str1: "abcde", str2: "edcba"', function() {
    it('should return true', done => {
      expect(checkPerm('abcde', 'edcba')).to.equal(true);
      done();
    })
  })

  describe('Input: str1: "abcde", str2: "edcbf"', function() {
    it('should return false', done => {
      expect(checkPerm('abcde', 'edcbf')).to.equal(false);
      done();
    })
  })
})
