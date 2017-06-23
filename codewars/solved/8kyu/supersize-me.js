'use strict';

const expect = require('chai').expect;

/*
noobCode 01: SUPERSIZE ME.... or rather, this integer!

8kyu

Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.
*/

function superSize(num){
  var numArray = [];
  var output = '';

  for (let i = 0; i < num.toString().length; i++) {
    numArray.push(parseInt(num.toString().charAt(i)));
  }

  var sorted = numArray.sort();

  for (let x = sorted.length - 1; x >= 0; x--) {
    output += sorted[x];
  }

  return parseInt(output);
}

describe('SuperSize Me | Code Wars | 8kyu', function() {
  describe('Input 69', function() {
    it('expect 96', done => {
      expect(superSize(69)).to.equal(96);
      done();
    })
  })

  describe('Input 513', function() {
    it('expect 531', done => {
      expect(superSize(513)).to.equal(531);
      done();
    })
  })

  describe('Input 2017', function() {
    it('expect 7210', done => {
      expect(superSize(2017)).to.equal(7210);
      done();
    })
  })

  describe('Input 608719', function() {
    it('expect 987610', done => {
      expect(superSize(608719)).to.equal(987610);
      done();
    })
  })

  describe('Input 666666', function() {
    it('expect 666666', done => {
      expect(superSize(666666)).to.equal(666666);
      done();
    })
  })
})
