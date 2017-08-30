'use strict';

const expect = require('chai').expect;

/*
8.3 - Magic Index

A magic index in an array[0, ..., n - 1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
*/

function magicIndex(array) {

}

describe('8.3 - Magic Index | Cracking the Coding Interview | Chapter 8 - Recursion and Dynamic Programming', function() {
  describe('Input: [-10, 2, 2, 8]', function() {
    it('should return 2', done => {
      expect(magicIndex([-10, 2, 2, 8])).to.equal(2);
      done();
    })
  })
})
