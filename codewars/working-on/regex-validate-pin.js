'use strict';

const expect = require('chai').expect;

/*
7 kyu

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

function validatePIN (pin) {
  var nums = pin.match(/\d/g);

  console.log('pin:', pin, '| length ===', pin.length);
  console.log('nums:', nums, '| length ===', nums.length);

  if((pin.length === 4 || pin.length === 6) && (nums.length === pin.length)) {
    return true;
  }
  else {
    return false;
  }
}

describe('Regex validatePIN function from code wars -------', function() {
  describe('valid 4 int pin ===', function() {
    it('return true', done => {
      expect(validatePIN('1234')).to.equal(true);
      done();
    })
  })

  describe('invalid pin -- 5 characters', function() {
    it('return false', done => {
      expect(validatePIN('12345')).to.equal(false);
      done();
    })
  })

  describe('invalid pin -- 4 characters but contains letter', function() {
    it('return false', done => {
      expect(validatePIN('a234')).to.equal(false);
      done();
    })
  })

  describe('valid 6 int pin ===', function() {
    it('return true', done => {
      expect(validatePIN('123456')).to.equal(true);
      done();
    })
  })

  describe('invalid -- 6 characters but contains letter', function() {
    it('return false', done => {
      expect(validatePIN('5F7410')).to.equal(false);
      done();
    })
  })

  describe('invalid -- 4 characters but contains letter', function() {
    it('return false', done => {
      expect(validatePIN('4s62')).to.equal(false);
      done();
    })
  })
})
