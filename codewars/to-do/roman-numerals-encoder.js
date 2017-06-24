'use strict';

const expect = require('chai').expect;

/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

Remember that there can't be more than 3 identical symbols in a row.
*/

function solution(number){
}

describe('Roman Numerals Encoder', function() {
  describe('Input: 1', function() {
    it('Expect: "I"', done => {
      expect(solution(1)).to.equal('I');
      done();
    })
  })

  describe('Input: 4', function() {
    it('Expect: "IV"', done => {
      expect(solution(4)).to.equal('IV');
      done();
    })
  })

  describe('Input: 1000', function() {
    it('Expect: "M"', done => {
      expect(solution(1000)).to.equal('M');
      done();
    })
  })

  describe('Input: 1990', function() {
    it('Expect: "MCMXC"', done => {
      expect(solution(1990)).to.equal('MCMXC');
      done();
    })
  })

  describe('Input: 2007', function() {
    it('Expect: "MMVII"', done => {
      expect(solution(2007)).to.equal('MMVII');
      done();
    })
  })
})
