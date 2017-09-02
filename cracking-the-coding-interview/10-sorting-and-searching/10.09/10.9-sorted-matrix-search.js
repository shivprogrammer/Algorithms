'use strict';

const expect = require('chai').expect;

/*
10.9 - Sorted Matrix Search

Given an M + N matrix in which each row and each column is sorted in descending order, write a method to find an element.
*/

function sortedMatrixSearch(matrix, target) {
  var row = 0;
  var col = matrix[0].length;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return target + ' is located at row: ' + row + ', column: ' + column;
    }
    else if (matrix[row][col > target]) {
      col--;
    }
    else {
      row++;
    }
  }

  return 'target is not in matrix';
}

var matrix1 = [
  [15, 20, 40, 85],
  [20, 35, 80, 95],
  [30, 55, 95, 105],
  [40, 80, 100, 120]
];

describe('10.9 - Sorted Matrix Search | Cracking the Coding Interview | Chapter 10 - Sorting and Searching', function() {
  describe('Input: matrix1, 55', function() {
    it('should return "55 is located at row: 3, column: 2"', done => {
      expect(sortedMatrixSearch(matrix1, 55)).to.equal('55 is located at row: 3, column: 2');
      done();
    })
  })

  describe('Input: matrix1, 60', function() {
    it('should return "element is not in matrix"', done => {
      expect(sortedMatrixSearch(matrix1, 60)).to.equal('target is not in matrix');
      done();
    })
  })
})
