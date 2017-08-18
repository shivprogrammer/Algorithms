'use strict';

const expect = require('chai').expect;

/*
Write a function that accepts two square matrices (nxn two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size nxn (square), containing only integers.

How to sum two matrices:
Take each cell [n][m] from the first matrix, and add it with the [n][m] cell from the second matrix. This will be cell [n][m] in the solution matrix.

Visualization:
|1 2 3|
|3 2 1|
|1 1 1|
+
|2 2 1|
|3 2 3|
|1 1 3|
=
|3 4 4|
|6 4 4|
|2 2 4|

Example function call:
matrixAddition( [ [1, 2, 3], [3, 2, 1,], [1, 1, 1] ], [ [2, 2, 1], [3, 2, 3], [1, 1, 3] ] );
returns [ [3, 4, 4], [6, 4, 4], [2, 2, 4] ]
*/

function matrixAddition(matrix1, matrix2) {
  if (matrix1.length != matrix2.length && matrix1[0].length != matrix2[0].length) {
    return false;
  }

  var outputMatrix = [];
  var temp = [];

  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      var cell = matrix1[i][j] + matrix2[i][j];
      temp.push(cell);
    }
    outputMatrix.push(temp);
    temp = [];
  }

  return outputMatrix;
}

var matrix1 = [
  [1, 2],
  [1, 2]
];

var matrix2 = [
  [2, 3],
  [2, 3]
];

var matrix1plus2 = [
  [3, 5],
  [3, 5]
];

var matrix3 = [
  [1, 2, 3],
  [3, 2, 1],
  [1, 1, 1]
];

var matrix4 = [
  [2, 2, 1],
  [3, 2, 3],
  [1, 1, 3]
];

var matrix3plus4 = [
  [3, 4, 4],
  [6, 4, 4],
  [2, 2, 4]
];

describe('Matrix Addition | Code Wars | 6kyu', function() {
  describe('Input: matrix1 & matrix2', function() {
    it('should return matrix1plus2', done => {
      expect(matrixAddition(matrix1, matrix2)).to.deep.equal(matrix1plus2);
      done();
    })
  })

  describe('Input: matrix3 & matrix4', function() {
    it('should return matrix3plus4', done => {
      expect(matrixAddition(matrix3, matrix4)).to.deep.equal(matrix3plus4);
      done();
    })
  })
})
