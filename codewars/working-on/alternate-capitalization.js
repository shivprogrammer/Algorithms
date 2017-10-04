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
  var output = [];
  var result1 = '';
  var result2 = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result1 += s.charAt(i).toUpperCase();
      result2 += s.charAt(i);
    }
    else {
      result1 += s.charAt(i);
      result2 += s.charAt(i).toUpperCase();
    }
  }

  output.push(result1, result2);
  return output;
}

describe('Alternate Capitalization | Code Wars | 7kyu', function() {
  describe('Input: "abcdef"', function() {
    it('should return ["AbCdEf", "aBcDeF"]', done => {
      expect(capitalize('abcdef')).to.deep.equal(['AbCdEf', 'aBcDeF']);
      done();
    })
  })

  describe('Input: "codewars"', function() {
    it('should return ["CoDeWaRs", "cOdEwArS"]', done => {
      expect(capitalize('codewars')).to.deep.equal(['CoDeWaRs', 'cOdEwArS']);
      done();
    })
  })

  describe('Input: "abracadabra"', function() {
    it('should return ["AbRaCaDaBrA", "aBrAcAdAbRa"]', done => {
      expect(capitalize('abracadabra')).to.deep.equal(['AbRaCaDaBrA', 'aBrAcAdAbRa']);
      done();
    })
  })

  describe('Input: "codewarriors"', function() {
    it('should return ["CoDeWaRrIoRs", "cOdEwArRiOrS"]', done => {
      expect(capitalize('codewarriors')).to.deep.equal(['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
      done();
    })
  })
})
