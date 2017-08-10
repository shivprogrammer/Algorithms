'use strict';

const expect = require('chai').expect;

/*
1.7 Rotate Matrix

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

function rotate(matrix) {
  if (matrix.length === 0 || matrix.length != matrix[0].length) {
    return false;
  }

  var topLeft = matrix[matrix.length - 1][0];
  var topRight = matrix[0][0];
  var bottomRight = matrix[0][matrix[0].length - 1];
  var bottomLeft = matrix[matrix.length - 1][matrix[matrix.length - 1].length];

  var dimension = matrix.length;

  var outputMatrix = [];




}

var matrix1 = [
  [4, 12],
  [8, 5]
];

var matrix1rotated = [
  [8, 4],
  [5, 12]
];

var matrix2 = [
  [55, 32, 1],
  [8, 4, 96],
  [-4, 0, 2]
];

var matrix2rotated = [
  [-4, 8, 55],
  [0, 4, 32],
  [2, 96, 1]
]

describe('1.7 Rotate Matrix | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('2x2 Matrix Input: matrix1', function() {
    it('should return matrix1rotated', done => {
      expect(rotate(matrix1)).to.deep.equal(matrix1rotated);
      done();
    })
  })

  describe('3x3 Matrix Input: matrix2', function() {
    it('should return matrix2rotated', done => {
      expect(rotate(matrix2)).to.deep.equal(matrix2rotated);
      done();
    })
  })
})
