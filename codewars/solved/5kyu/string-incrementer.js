'use strict';

const expect = require('chai').expect;

/*
String Incrementer

5kyu

Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (str) {
  // establishing variables
  var number = '';
  var newNumber;
  var letterBegin;
  var stringWithoutZeros;
  var numOfZeros;
  var leadingZeros = '';

  // base case
  if (!str) {
    return '1';
  }

  // find the number
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(str[i])) {
      number = str[i] + number;
    }
    else {
      letterBegin = i;
      break;
    }
  }

  // calculate the new number
  if (letterBegin === str.length - 1) {
    newNumber = 1;
  }
  else {
    newNumber = parseInt(number) + 1;
    newNumber.toString();
  }

  // calculate how many leading zeroes to add
  stringWithoutZeros = str.slice(0, letterBegin + 1) + newNumber;
  numOfZeros = str.length - stringWithoutZeros.length;
  while(numOfZeros > 0) {
    leadingZeros += 0;
    numOfZeros--;
  }

  // base case for number only input
  if (!letterBegin) {
    return leadingZeros + newNumber;
  }

  return str.slice(0, letterBegin + 1) + leadingZeros + newNumber;
}

// Time Complexity: O(N) // AT THE VERY WORST CASE, ONLY IF NUMBERS. OTHERWISE TIME IS RELATED TO THE NUMBER OF NUMBERS AT THE END OF THE INPUT STRING SO HOLY GUACAMOLE THIS IS A GOOD TIME
// Space Complexity: O(1)

describe('String Incrementer from Code Wars', function() {
  describe('base case with empty string', function() {
    it('should return 1', done => {
      expect(incrementString('')).to.equal('1');
      done();
    })
  })

  describe('string with leading 0s', function() {
    it('should return foobar001', done => {
      expect(incrementString('foobar000')).to.equal('foobar001');
      done();
    })
  })

  describe('input of foobar010', function() {
    it('should return foobar011', done => {
      expect(incrementString('foobar010')).to.equal('foobar011');
      done();
    })
  })

  describe('input of foobar001', function() {
    it('should return foobar002', done => {
      expect(incrementString('foobar001')).to.equal('foobar002');
      done();
    })
  })

  describe('input of foobar099', function() {
    it('should return foobar100', done => {
      expect(incrementString('foobar099')).to.equal('foobar100');
      done();
    })
  })

  describe('string with no numbers', function() {
    it('should return foo1', done => {
      expect(incrementString('foo')).to.equal('foo1');
      done();
    })
  })

  describe('input of just a number', function() {
    it('should return 2', done => {
      expect(incrementString('1')).to.equal('2');
      done();
    })
  })
})
