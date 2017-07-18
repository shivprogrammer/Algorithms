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
  if (str.length < 1) {
    return 'n/a';
  }

  var numbers = str.split(' ');
  var sum = 0;
  var count = 0;

  var numMap = new Map();
  numMap.set('zero', 0);
  numMap.set('one', 1);
  numMap.set('two', 2);
  numMap.set('three', 3);
  numMap.set('four', 4);
  numMap.set('five', 5);
  numMap.set('six', 6);
  numMap.set('seven', 7);
  numMap.set('eight', 8);
  numMap.set('nine', 9);

  var digitMap = new Map();
  digitMap.set(0, 'zero');
  digitMap.set(1, 'one');
  digitMap.set(2, 'two');
  digitMap.set(3, 'three');
  digitMap.set(4, 'four');
  digitMap.set(5, 'five');
  digitMap.set(6, 'six');
  digitMap.set(7, 'seven');
  digitMap.set(8, 'eight');
  digitMap.set(9, 'nine');

  for (let i = 0; i < numbers.length; i++) {
    if (numMap.has(numbers[i])) {
      if (numMap.get(numbers[i]) > 9) {
        return 'n/a';
      }
      else {
        sum += numMap.get(numbers[i]);
        count++;
      }
    }
  }

  return digitMap.get(Math.floor(sum / count));
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
