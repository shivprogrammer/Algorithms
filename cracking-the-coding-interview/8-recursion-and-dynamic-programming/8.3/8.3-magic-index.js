'use strict';

const expect = require('chai').expect;

/*
8.3 - Magic Index

A magic index in an array[0, ..., n - 1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
*/

function magicIndex(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) {
       return i;
    }
  }
  return -1;
}

function magicIndexRecursion(array, start, end) {
  if (!start) {
    start = 0;
  }
  if (!end) {
    end = array.length - 1;
  }
  
  var mid = Math.floor(start + (end - start) / 2);

  if (mid === start && array[mid] !== mid) {
    return -1;
  }
  else if (array[mid] === mid) {
    return mid;
  }
  else if (mid < array[mid]) {
    return magicIndexRecursion(array, start, mid);
  }
  else {
    return magicIndexRecursion(array, mid, end);
  }
}

describe('8.3 - Magic Index | Cracking the Coding Interview | Chapter 8 - Recursion and Dynamic Programming', function() {
  describe('Function: magicIndex | Magic Index is last element: [-1, 0, 1, 2, 3, 5]', function() {
    it('should return 5', done => {
      expect(magicIndex([-1, 0, 1, 2, 3, 5])).to.equal(5);
      done();
    })
  })

// when the magic index is the last int, the test fails for recursion
  describe('Function: magicIndexRecursion | Magic Index is last element: [-1, 0, 1, 2, 3, 5]', function() {
    it('should return 5', done => {
      expect(magicIndexRecursion([-1, 0, 1, 2, 3, 5])).to.equal(5);
      done();
    })
  })

  describe('Function: magicIndex | No magic index in this input: [-10, 2, 17, 22, 28]', function() {
    it('should return -1', done => {
      expect(magicIndex([-10, 2, 17, 22, 28])).to.equal(-1);
      done();
    })
  })

  describe('Function: magicIndexRecursion | No magic index in this input: [-10, 2, 17, 22, 28]', function() {
    it('should return -1', done => {
      expect(magicIndexRecursion([-10, 2, 17, 22, 28])).to.equal(-1);
      done();
    })
  })
})
