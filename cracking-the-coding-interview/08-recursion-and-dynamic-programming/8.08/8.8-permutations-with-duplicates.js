'use strict';

const expect = require('chai').expect;

/*
8.8 - Permutations with Duplicates

Write a method to compute all permutations of a string whose characters are not necessairily unique. The list of permutations should not have duplicates.

*/

var permNoDups = function(string) {
  var answers = [];
  var recurse = function(currPerm, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currPerm);
    }
    else {
      var usedChars = {};
      for (var i = 0; i < remainingChars.length; i++) {
        if (!usedChars[remainingChars.charAt(i)]) {
          usedChars[remainingChars.charAt(i)] = true;
          recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i + 1));
        }
      }
    }
  }
  recurse('', string);
  return answers;
}

describe('8.8 - Permutations wiht Dups | Cracking the Coding Interview | Chapter 8 - Recursion and Dynamic Programming', function() {
  describe('Input: "aaa"', function() {
    it('should return ["aaa"]', done => {
      expect(permNoDups('aaa')).to.deep.equal(["aaa"]);
      done();
    })
  })

  describe('Input: "abc"', function() {
    it('should return ["abc", "acb", "bac", "bca", "cab", "cba"]', done => {
      expect(permNoDups('abc')).to.deep.equal(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
      done();
    })
  })

  describe('Input: "aba"', function() {
    it('should return ["aba", "aab", "baa"]', done => {
      expect(permNoDups('aba')).to.deep.equal(['aba', 'aab', 'baa']);
      done();
    })
  })
})
