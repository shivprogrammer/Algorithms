'use strict';

const expect = require('chai').expect;

/*
8.7 - Permutations without Dups

Write a method to compute all permutations of a string of unique characters.
*/

var permuteString = function(string) {
  var answers = [];
  var recurse = function(currPerm, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currPerm);
    }
    else {
      for (var i = 0; i < remainingChars.length; i++) {
        recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i + 1));
      }
    }
  }

  recurse('', string);
  return answers;
}

describe('8.7 - Permutations without Dups | Cracking the Coding Interview | Chapter 8 - Recursion and Dynamic Programming', function() {
  describe('Input: "abc"', function() {
    it('should return ["abc", "acb", "bac", "bca", "cab", "cba"]', done => {
      expect(permuteString('abc')).to.deep.equal(["abc", "acb", "bac", "bca", "cab", "cba"]);
      done();
    })
  })

  describe('Input: "abcd"', function() {
    it('should return ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"]', done => {
      expect(permuteString('abcd')).to.deep.equal(["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"]);
      done();
    })
  })
})
