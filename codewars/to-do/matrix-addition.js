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

function matrixAddition(a, b){
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

describe('Matrix Addition | Code Wars | 6kyu', function() {
  describe('Input: matrix1 & matrix2', function() {
    it('should return matrix1plus2', done => {
      expect(matrixAddition(matrix1, matrix2)).to.deep.equal(matrix1plus2);
      done();
    })
  })
})
