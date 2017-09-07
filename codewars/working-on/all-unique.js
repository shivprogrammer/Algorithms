'use strict';

const expect = require('chai').expect;

/*
All Unique

7kyu

Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters.
*/

function hasUniqueChars(str) {

}

describe('All Unique | Code Wars | 7kyu', function() {
  describe('Input: "  nAa"', function() {
    it('should return false', done => {
      expect(isUnique('  nAa')).to.equal(false);
      done();
    })
  })

  describe('Input: "abcdef"', function() {
    it('should return true', done => {
      expect(isUnique('abcdef')).to.equal(true);
      done();
    })
  })

  describe('Input: "++-"', function() {
    it('should return false', done => {
      expect(isUnique('++-')).to.equal(false);
      done();
    })
  })
})
