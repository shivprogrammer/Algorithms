'use strict';

const expect = require('chai').expect;

/*
8.3 - Magic Index

A magic index in an array[0, ..., n - 1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
*/

function magicFast(array) {
  return magicFast(array, 0, array.length - 1);
}

function magicFast(array, start, end) {
  if (end < start) {
    return -1;
  }

  var mid = (start + end) / 2;
  if (array[mid] === mid) {
    return mid;
  }
  else if (array[mid] > mid) {
    return magicFast(array, start, mid - 1);
  }
  else  {
    return magicFast(array, mid + 1, end);
  }
}

describe('8.3 - Magic Index | Cracking the Coding Interview | Chapter 8 - Recursion and Dynamic Programming', function() {
  describe('Input: [-10, 2, 2, 8]', function() {
    it('should return 2', done => {
      expect(magicFast([-10, 2, 2, 8], -10, 8)).to.equal(2);
      done();
    })
  })

  describe('Input: [-10, 2, 17, 22, 28]', function() {
    it('should return -1', done => {
      expect(magicFast([-10, 2, 17, 22, 28], -10, 28)).to.equal(-1);
      done();
    })
  })
})
