'use strict';

const expect = require('chai').expect;

/*
Move All Vowels

7kyu

Given a string as input, move all of its vowel to the end of the string.

Examples:
input: "day" ==> output: "dya"
input: "apple" ==> output: "pplae"

Note: All input string are of small letters, and the order of the vowels at the end should be the same as they were before.
*/

function moveVowel(input) {
  var vowelMap = new Map();
  vowelMap.set('a', 1);
  vowelMap.set('e', 1);
  vowelMap.set('i', 1);
  vowelMap.set('o', 1);
  vowelMap.set('u', 1);

  var vowels = [];
  var others = [];

  for (let i = 0; i < input.length; i++) {
    if (vowelMap.has(input[i])) {
      vowels.push(input[i]);
    }
    else {
      others.push(input[i]);
    }
  }

  return others.concat(vowels).join('');
}

// Time Complexity: O(N)
// Space Comoplexity: O(N) [vowelMap] + O(M) [vowels] + O(X) [others]

describe('Move All Vowels | Code Wars | 7kyu', function() {
  describe('Input: "day"', function() {
    it('should return "dya"', done => {
      expect(moveVowel('day')).to.equal('dya');
      done();
    })
  })

  describe('Input: "apple"', function() {
    it('should return "pplae"', done => {
      expect(moveVowel('apple')).to.equal('pplae');
      done();
    })
  })

  describe('Input: "peace"', function() {
    it('should return "pceae"', done => {
      expect(moveVowel('peace')).to.equal('pceae');
      done();
    })
  })

  describe('Input: "maker"', function() {
    it('should return "mkrae"', done => {
      expect(moveVowel('maker')).to.equal('mkrae');
      done();
    })
  })
})
