'use strict';

const expect = require('chai').expect;

/*
Indexed Capitalization

7kyu

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

function capitalize(s,arr) {
  var indexMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < s.length && !indexMap.has(arr[i])) {
      indexMap.set(arr[i], 1);
    }
  }
}


describe('Indexed Capitalization | Code Wars - 7kyu', function() {
  describe('Input: "abcdef",[1,2,5]', function() {
    it('should return "aBCdeF"', done => {
      expect(capitalize('abcdef',[1,2,5])).to.equal('aBCdeF');
      done();
    })
  })

  describe('Input: "abcdef",[1,2,5,100]', function() {
    it('should return "aBCdeF"', done => {
      expect(capitalize("abcdef",[1,2,5,100])).to.equal('aBCdeF');
      done();
    })
  })

  describe('Input: "codewars",[1,3,5,50]', function() {
    it('should return "cOdEwArs"', done => {
      expect(capitalize("codewars",[1,3,5,50])).to.equal('cOdEwArs');
      done();
    })
  })

  describe('Input: "abracadabra",[2,6,9,10]', function() {
    it('should return "abRacaDabRA"', done => {
      expect(capitalize("abracadabra",[2,6,9,10])).to.equal('abRacaDabRA');
      done();
    })
  })

  describe('Input: "codewarriors",[5]', function() {
    it('should return "codewArriors"', done => {
      expect(capitalize("codewarriors",[5])).to.equal('codewArriors');
      done();
    })
  })

  describe('Input: "indexinglessons",[0]', function() {
    it('should return "Indexinglessons"', done => {
      expect(capitalize("indexinglessons",[0])).to.equal('Indexinglessons');
      done();
    })
  })
})
