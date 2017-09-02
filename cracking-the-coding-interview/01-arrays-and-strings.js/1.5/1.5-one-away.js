'use strict';

const expect = require('chai').expect;

/*
1.5 - One Away

There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away

EXAMPLE:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

function oneAway(str1, str2) {

}

describe('1.5 - One Away | Cracking the Coding Interview | Chapter 1 - Arrays & Strings', function() {
  describe('Input: pale, ple', function() {
    it('should return true', done => {
      expect(oneAway('pale', 'ple')).to.equal(true);
      done();
    })
  })

  describe('Input: pales, pale', function() {
    it('should return true', done => {
      expect(oneAway('pales', 'pale')).to.equal(true);
      done();
    })
  })

  describe('Input: pale, bale', function() {
    it('should return true', done => {
      expect(oneAway('pale', 'bale')).to.equal(true);
      done();
    })
  })

  describe('Input: pale, bake', function() {
    it('should return false', done => {
      expect(oneAway('pale', 'bake')).to.equal(false);
      done();
    })
  })
})
