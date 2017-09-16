'use strict';

const expect = require('chai').expect;

/*
Possibilities Array

7kyu

A non-empty array a of length n is called an array of all possiblities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possiblities,else false.

Example:

a=[1,2,0,3]
a.length-1=3
a includes [0,3] ,hence the function should return true
*/

function isAllPossibilities(x) {
  if (!x || x.length < 1) {
    return false;
  }

  var dope = x.sort();

  for (let i = 0; i < dope.length; i++) {
    if (dope[i] != i) {
      return false;
    }
  }

  return true;
}

// Time Complexity: O(N * log(N))
// Space Complexity: O(N)

describe('Possibilities Array | Code Wars - 7kyu', function() {
  describe('Input: [0,1,2,3]', function() {
    it('should return true', done => {
      expect(isAllPossibilities([0,1,2,3])).to.equal(true);
      done();
    })
  })

  describe('Input: [1,2,0,3]', function() {
    it('should return true', done => {
      expect(isAllPossibilities([1,2,0,3])).to.equal(true);
      done();
    })
  })

  describe('Input: [1,2,3,4]', function() {
    it('should return false', done => {
      expect(isAllPossibilities([1,2,3,4])).to.equal(false);
      done();
    })
  })
})
