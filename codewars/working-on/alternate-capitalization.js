'use strict';

const expect = require('chai').expect;

/*
Alternate Capitalization

7kyu

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

function capitalize(s) {
  
}

describe('Alternate Capitalization | Code Wars | 7kyu', function() {
  describe('Input: "abcdef"', function() {
    it('should return ["AbCdEf", "aBcDeF"]', done => {
      expect(capitalize('abcdef')).to.equal(['AbCdEf', 'aBcDeF']);
      done();
    })
  })

  describe('Input: "codewars"', function() {
    it('should return ["CoDeWaRs", "cOdEwArS"]', done => {
      expect(capitalize('codewars')).to.equal(['CoDeWaRs', 'cOdEwArS']);
      done();
    })
  })

  describe('Input: "abracadabra"', function() {
    it('should return ["AbRaCaDaBrA", "aBrAcAdAbRa"]', done => {
      expect(capitalize('abracadabra')).to.equal(['AbRaCaDaBrA', 'aBrAcAdAbRa']);
      done();
    })
  })

  describe('Input: "codewarriors"', function() {
    it('should return ["CoDeWaRrIoRs", "cOdEwArRiOrS"]', done => {
      expect(capitalize('codewarriors')).to.equal(['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
      done();
    })
  })
})
