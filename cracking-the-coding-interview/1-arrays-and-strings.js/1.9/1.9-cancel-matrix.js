'use strict';

const expect = require('chai').expect;

/*
Given matrix, if a cell has a 0, then make sure that all other cells in that row and column are also translated to zeros
*/

function cancel(matrix) {
  var matrixFlags = [];
  var temp = [];
  var temp2 = [];
  var zeroRow = [];
  var zeroColumn = [];
  var outputMatrix = [];
  var rowPointer;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        temp.push(1);
        if (!zeroRow || zeroRow[zeroRow.length - 1] != i) {
          zeroRow.push(i);
        }
        if (!zeroColumn || zeroColumn[zeroColumn.length - 1] != j) {
          zeroColumn.push(j);
        }
      }
      else {
        temp.push(0);
      }
      matrixFlags.push(temp);
      temp = [];
    }
  }

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (zeroRow[0] === x) {
        temp2.push(0);
      }
      else if (zeroColumn[0] === y) {
        temp2.push(0);
      }
      else {
        temp.push(matrix[x][y]);
      }
    }
    outputMatrix.push(temp2);
    temp2 = [];
  }

  console.log(outputMatrix);
}

var matrix1 = [
  [1, 2, 0],
  [5, 10, 12],
  [32, 11, 1]
];

var matrix1result = [
  [0, 0, 0],
  [5, 10, 0],
  [32, 11, 0],
];

describe('Matrix Cancellation', function() {
  describe('Input: matrix1', function() {
    it('should return matrix1result', done => {
      expect(cancel(matrix1)).to.deep.equal(matrix1result);
      done();
    })
  })
})
