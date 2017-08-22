'use strict';

const expect = require('chai').expect;

/*
1.3 URLIfy

Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and you are given the "true" length of the string.
*/

function replaceSpaces(str, trueLength) {
  var output = '';

  for (let i = 0; i < trueLength; i++) {
    if (str.charAt(i) === ' ') {
      output += '%20';
    }
    else {
      output += str.charAt(i);
    }
  }

  return output;
}

describe('1.3 URLifiy | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('Input: "Mr John Smith     ", 13', function() {
    it('should return "Mr%20John%20Smith"', done => {
      expect(replaceSpaces('Mr John Smith     ', 13)).to.equal("Mr%20John%20Smith");
      done();
    })
  })

  describe('Input: "Coding is sexy     ", 14', function() {
    it('should return "Coding%20is%20sexy"', done => {
      expect(replaceSpaces('Coding is sexy     ', 14)).to.equal("Coding%20is%20sexy");
      done();
    })
  })
})
