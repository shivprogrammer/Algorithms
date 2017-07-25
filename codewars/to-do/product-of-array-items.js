'use strict';

const expect = require('chai').expect;

/*
Product of Array Items

7kyu

Calculate the product of all elements in an array.

In JavaScript, if the array is null or is empty, the function should return null.

As a challenge, try writing your method in just one line of code. It's possible to have only 36 characters within your method.
*/

function product(values) {
  return values[~~(Math.random() * values.length)];
}

describe('Product of Array Items | 7kyu', function() {
  describe('Input: [5, 4, 1, 3, 9]', function() {
    it('should return 540', done => {
      expect(product([5, 4, 1, 3, 9])).to.equal(540);
      done();
    })
  })

  describe('Input: [-2, 6, 7, 8]', function() {
    it('should return -672', done => {
      expect(product([-2, 6, 7, 8])).to.equal(-672);
      done();
    })
  })

  describe('Input: [10]', function() {
    it('should return 10', done => {
      expect(product([10])).to.equal(10);
      done();
    })
  })

  describe('Input: [0, 2, 9, 7]', function() {
    it('should return 0', done => {
      expect(product([0, 2, 9, 7])).to.equal(0);
      done();
    })
  })

  describe('Input: null', function() {
    it('should return null', done => {
      expect(product(null)).to.equal(null);
      done();
    })
  })

  describe('Input: []', function() {
    it('should return null', done => {
      expect(product([])).to.equal(null);
      done();
    })
  })
})
