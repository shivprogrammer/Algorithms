'use strict';

const expect = require('chai').expect;

/*
Given matrix, if a cell has a 0, then make sure that all other cells in that row and column are also translated to zeros
*/

function cancel(matrix) {
  var temp = [];
  var zeroRow = [];
  var zeroColumn = [];
  var outputMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (!zeroRow || zeroRow[zeroRow.length - 1] != i) {
          zeroRow.push(i);
        }
        if (!zeroColumn || zeroColumn[zeroColumn.length - 1] != j) {
          zeroColumn.push(j);
        }
      }
    }
  }

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (zeroRow[0] === x) {
        temp.push(0);
      }
      else if (zeroColumn[0] === y) {
        temp.push(0);
      }
      else {
        temp.push(matrix[x][y]);
      }
    }
    outputMatrix.push(temp);
    temp = [];
  }

  return outputMatrix;
}

var matrix1 = [
  [1, 2, 0],
  [5, 10, 12],
  [32, 11, 1]
];

var matrix1result = [
  [0, 0, 0],
  [5, 10, 0],
  [32, 11, 0]
];

var matrix2 = [
  [0, 1, 12],
  [15, 18, -32],
  [111, 4, -1]
];

var matrix2result = [
  [0, 0, 0],
  [0, 18, -32],
  [0, 4, -1]
]

var matrix3 = [
  [0, 1, 12, 18],
  [15, 18, -32, 22],
  [111, 4, -1, 7],
  [1, 1, -1, 8]
];

var matrix3result = [
  [0, 0, 0, 0],
  [0, 18, -32, 22],
  [0, 4, -1, 7],
  [0, 1, -1, 8],
];

describe('Matrix Cancellation', function() {
  describe('Input 3x3 matrix with 1 zero: matrix1', function() {
    it('should return matrix1result', done => {
      expect(cancel(matrix1)).to.deep.equal(matrix1result);
      done();
    })
  })

  describe('Input another 3x3 matrix with 1 zero: matrix2', function() {
    it('should return matrix2result', done => {
      expect(cancel(matrix2)).to.deep.equal(matrix2result);
      done();
    })
  })

  describe('Input 4x4 matrix with 1 zero: matrix3', function() {
    it('should return matrix3result', done => {
      expect(cancel(matrix3)).to.deep.equal(matrix3result);
      done();
    })
  })
})
