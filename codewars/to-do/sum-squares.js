'use strict';

const expect = require('chai').expect;

/*
Be Concise III - Sum Squares

8kyu

You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843
Shorten the code such that it meets the requirements.

A few hints:
Try researching about built-in Array methods; they may help shorten your code a lot
*/

function sumSquares(array) {
}

describe('Sum Squares | Code Wars | 8kyu', function() {
  describe('input [1,2,3,4,5]', function() {
    it('should return 55', done => {
      expect(sumSquares([1,2,3,4,5]).to.equal(55);
      done();
    })
  })

  describe('input [7,3,9,6,5]', function() {
    it('should return 200', done => {
      expect(sumSquares([7,3,9,6,5]).to.equal(200);
      done();
    })
  })

  describe('input [11,13,15,18,2]', function() {
    it('should return 843', done => {
      expect(sumSquares([11,13,15,18,2]).to.equal(843);
      done();
    })
  })

  describe('input [-5,-4,-3,-2,-1,0,1,2,3,4,5]', function() {
    it('should return 110', done => {
      expect(sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]).to.equal(110);
      done();
    })
  })
})
