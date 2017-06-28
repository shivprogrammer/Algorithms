'use strict';

const expect = require('chai').expect;

/*
Isograms

7kyu

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

function isIsogram(str) {

}

describe('Isograms | 7kyu', function() {
  describe('Input: Dermatoglyphics', function() {
    it('should return true', done => {
      expect(isIsogram('Dermatoglyphics')).to.equal(true);
      done();
    })
  })

  describe('Input: isogram', function() {
    it('should return true', done => {
      expect(isIsogram('isogram')).to.equal(true);
      done();
    })
  })

  describe('Input: aba', function() {
    it('should return false', done => {
      expect(isIsogram('aba')).to.equal(false);
      done();
    })
  })

  describe('Input: moOse', function() {
    it('should return false', done => {
      expect(isIsogram('moOse')).to.equal(false);
      done();
    })
  })

  describe('Input: isIsogram', function() {
    it('should return false', done => {
      expect(isIsogram('isIsogram')).to.equal(false);
      done();
    })
  })

  describe('Input is an empty string', function() {
    it('should return true', done => {
      expect(isIsogram('')).to.equal(true);
      done();
    })
  })
})
