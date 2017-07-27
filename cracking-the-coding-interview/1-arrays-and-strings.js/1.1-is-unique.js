'use strict';

const expect = require('chai').expect;

/*
Is Unique:

Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
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
