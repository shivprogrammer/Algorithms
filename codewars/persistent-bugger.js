'use strict';

const expect = require('chai').expect;

/*
Persistent Bugger

6kyu

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
}

describe('Persistent Bugger | Code Wars | 6 kyu', function() {
  describe('with input 39', function() {
    it('should return 3', done => {
      expect(persistence(39)).to.equal(3);
      done();
    })
  })

  describe('with input 4', function() {
    it('should return 0', done => {
      expect(persistence(4)).to.equal(0);
      done();
    })
  })

  describe('with input 25', function() {
    it('should return 2', done => {
      expect(persistence(25)).to.equal(2);
      done();
    })
  })

  describe('with input 999', function() {
    it('should return 4', done => {
      expect(persistence(999)).to.equal(4);
      done();
    })
  })
})
