'use strict';

const expect = require('chai').expect;

/*
10.3 - Search in Rotated Array

Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order.
*/

function rotatedArraySearch(array, element) {

}

describe('10.3 - Search in Rotated Array | Cracking the Coding Interview | Chapter 10 - Searching and Sorting', function() {
  describe('array = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], element = 5', function() {
    it('should return 8', done => {
      expect(rotatedArraySearch([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5)).to.equal(8);
      done();
    })
  })
})
