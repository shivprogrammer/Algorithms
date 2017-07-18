'use strict';

const expect = require('chai').expect;

/*
String Average

6kyu

You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

function averageString(str) {
}

describe('String Average | 6kyu', function() {
  describe('Input is empty string', function() {
    it('return n/a', done => {
      expect(averageString('')).to.equal('n/a');
      done();
    })
  })

  describe('Input: "zero nine five two"', function() {
    it('should return "four"', done => {
      expect(averageString('zero nine five two')).to.equal('four');
      done();
    })
  })

  describe('Input: "four six two three"', function() {
    it('should return "three"', done => {
      expect(averageString('four six two three')).to.equal('three');
      done();
    })
  })

  describe('Input: "one two three four five"', function() {
    it('should return "three"', done => {
      expect(averageString('one two three four five')).to.equal('three');
      done();
    })
  })

  describe('Input: "five four"', function() {
    it('should return "four"', done => {
      expect(averageString('five four')).to.equal('four');
      done();
    })
  })

  describe('Input: "zero zero zero zero zero"', function() {
    it('should return "zero"', done => {
      expect(averageString('zero zero zero zero zero')).to.equal('zero');
      done();
    })
  })

  describe('Input: "one one eight one"', function() {
    it('should return "two"', done => {
      expect(averageString('one one eight one')).to.equal('two');
      done();
    })
  })
})

Test.assertEquals(averageString("zero nine five two"), "four");
       Test.assertEquals(averageString("four six two three"), "three");
       Test.assertEquals(averageString("one two three four five"), "three");
       Test.assertEquals(averageString("five four"), "four");
       Test.assertEquals(averageString("zero zero zero zero zero"), "zero");
       Test.assertEquals(averageString("one one eight one"), "two");
       Test.assertEquals(averageString(""), "n/a");
