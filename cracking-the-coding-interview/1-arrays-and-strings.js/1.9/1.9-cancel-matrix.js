'use strict';

const expect = require('chai').expect;

/*
Given matrix, if a cell has a 0, then make sure that all other cells in that row and column are also translated to zeros
*/

function cancel(matrix) {

}

var matrix1 = [
  [1, 2, 0],
  [5, 10, 12],
  [32, 11, 1]
];

var matrix1result = [
  [0, 0, 0],
  [5, 10, 0],
  [32, 11, 0];
];

describe('Matrix Cancellation', function() {
  describe('Input: matrix1', function() {
    it('should return matrix1result', done => {
      expect(cancel(matrix1)).to.deep.equal(matrix1result);
      done();
    })
  })
})
