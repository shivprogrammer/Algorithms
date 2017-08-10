'use strict';

const expect = require('chai').expect;

/*
1.7 Rotate Matrix

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

function rotate(matrix) {
  if (matrix.length === 0 || matrix.length != matrix[0].length) {
    return 'you didn\'t input a square matrix you dunce';
  }

  var outputMatrix = [];

  var dimension = matrix.length;
  for (var col = 0; col < dimension; col++) {
    var inner = [];
    for (var row = 0; row < dimension; row++) {
      var element = matrix[row][col];
      inner.unshift(element);
    }
    outputMatrix.push(inner);
  }

  return outputMatrix;
}

// Time Complexity: O(N squared)
// Space Complexity: O(N)

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
];

var notSquareMatrix = [
  [1, 2, 3],
  [4, 5, 6]
];

var matrix3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

var matrix3rotated = [
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4]
];

describe('1.7 Rotate Matrix | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('Input: empty matrix', function()  {
    it ('Output: "you didn\'t input a square matrix you dunce"', done => {
      expect(rotate([])).to.equal("you didn\'t input a square matrix you dunce");
      done();
    })
  })

  describe('Input: not square matrix', function()  {
    it ('Output: "you didn\'t input a square matrix you dunce"', done => {
      expect(rotate(notSquareMatrix)).to.deep.equal("you didn\'t input a square matrix you dunce");
      done();
    })
  })

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

  describe('4x4 Matrix Input: matrix3', function() {
    it('should return matrix3rotated', done => {
      expect(rotate(matrix3)).to.deep.equal(matrix3rotated);
      done();
    })
  })
})
