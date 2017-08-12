'use strict';

const expect = require('chai').expect;

/*
Next Bigger Number with the Same Digits

4kyu

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:


nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

function nextBigger(n){
  var charChange = '';
  var x = n.toString();

  for (let i = x.length - 1; i >= 0; i--) {
    if (n % 10 > (((n - (n % 10)) / 10) % 10)) {
      charChange += parseInt(x.charAt(i - 1));
      charChange += parseInt(x.charAt(i));
      break;
    }
  }

  return parseInt(parseInt(x.slice(0, x.length - 2)) + charChange);
}

describe('Next Bigger Number with the Same Digits | Code Wars | 4kyu', function() {
  describe('Input: 12', function() {
    it('should return 21', done => {
      expect(nextBigger(12)).to.equal(21);
      done();
    })
  })

  describe('Input: 513', function() {
    it('should return 531', done => {
      expect(nextBigger(513)).to.equal(531);
      done();
    })
  })

  describe('Input: 2017', function() {
    it('should return 2071', done => {
      expect(nextBigger(2017)).to.equal(2071);
      done();
    })
  })

  describe('Input: 414', function() {
    it('should return 441', done => {
      expect(nextBigger(414)).to.equal(441);
      done();
    })
  })

  describe('Input: 144', function() {
    it('should return 414', done => {
      expect(nextBigger(144)).to.equal(414);
      done();
    })
  })
})
