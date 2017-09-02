'use strict';

const expect = require('chai').expect;

/*
Is Unique:

Implement an algorithm to determine if a string has all unique characters.
*/

function isUnique(str) {
  var uniqueMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (uniqueMap.has(str.charAt(i))) {
      return false;
    }
    else {
      uniqueMap.set(str.charAt(i), 1);
    }
  }
  return true;
}

// Time Complexity: O(N) // YOU ARE SEEKING A SOLUTION THAT HAS A O(1) SPACE COMPLEXITY. FUCK.
// Space Complexity: O(N)

/*
What if you cannot use additional data structures?
*/

// If we can't use additional data structures, we can do the following:
// Compare every character of the string to every other character of the string. This will take O(N sq) time and O(1) space
// If we are allowed to modify the input string, we could sort the string in (O n log(n)) time and then linearly check the string for neighboring characters that are identical. Careful though, many sorting algortihms take up extra space.
// These solutions are not as optimal in some respects, but might be better depending on the constraints of the problem.

describe('1.1 Is Unique | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('input is empty string', function() {
    it('should return true', done => {
      expect(isUnique('')).to.equal(true);
      done();
    })
  })

  describe('Input: "abcdefg"', function() {
    it('should return true', done => {
      expect(isUnique('abcdefg')).to.equal(true);
      done();
    })
  })

  describe('Input: "abcdegg"', function() {
    it('should return false', done => {
      expect(isUnique('abcdegg')).to.equal(false);
      done();
    })
  })
})
