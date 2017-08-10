'use strict';

const expect = require('chai').expect;

/*
1.7 Rotate Matrix

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

function rotate(matrix) {

}

var matrix1 = [
  [4, 12],
  [8, 5]
];

var matrix1rotated = [
  [8, 4],
  [5, 12]
];

describe('1.7 Rotate Matrix | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('2x2 Matrix Input: matrix1', function() {
    it('should return matrix1rotated', done => {
      expect(rotate(matrix1)).to.deep.equal(matrix1rotated);
      done();
    })
  })
})
