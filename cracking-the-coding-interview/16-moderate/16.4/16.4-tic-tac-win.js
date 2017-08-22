'use strict';

const expect = require('chai').expect;

/*
Tic Tac Win

Design an Algorithm to figure out if someone has won a game of tic-tac-toe.
*/

function ticTacWin(matrix) {
  // matching columns
  if ((matrix[0][0] === 'X' || matrix[0][0] === 'O') && (matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0])) {
    return true;
  }
  else if ((matrix[0][0] === 'X' || matrix[0][0] === 'O') && (matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1])) {
    return true;
  }
  else if ((matrix[0][0] === 'X' || matrix[0][0] === 'O') && (matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2])) {
    return true;
  }
  // matching rows
  else if ((matrix[0][0] === 'X' || matrix[0][0] === 'O') && (matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2])) {
    return true;
  }
  else if ((matrix[0][0] === 'X' || matrix[0][0] === 'O') && (matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2])) {
    return true;
  }
  else if ((matrix[0][0] === 'X' || matrix[0][0] === 'O') && (matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2])) {
    return true;
  }
  // matching diagonals
  else if ((matrix[0][0] === 'X' || matrix[0][0] === 'O') && (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2])) {
    return true;
  }
  else if ((matrix[0][0] === 'X' || matrix[0][0] === 'O') && (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0])) {
    return true;
  }
  else {
    return false;
  }
}

// Time Complexity: O(1)
// Space Complexity: O(1)

// *NOTE: CHALLENGE: What if you needed to design this problem for an NxN Board?

//-----------------TESTS----------------
var matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

var matrix1 = [
  ['O', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'X', 'O']
];

var matrix2 = [
  ['O', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X']
];

var matrix3 = [
  ['X', 'O', 'X'],
  ['X', 'X', 'O'],
  ['O', 'X', 'O']
];

var matrix4 = [
  ['O', '', 'X'],
  ['', 'O', 'X'],
  ['X', 'O', 'X']
];

var matrix5 = [
  ['O', 'X', 'X'],
  ['X', 'O', 'O'],
  ['X', 'O', 'X']
];

describe('16.4 Tic Tac Win | Cracking the Coding Interview | Chapter 16 - Moderate', function() {
  describe('Input: empty matrix', function() {
    it('should return false', done => {
      expect(ticTacWin(matrix)).to.equal(false);
      done();
    })
  })

  describe('Input: matrix1 -- left to right diagonal win with "O"', function() {
    it('should return true', done => {
      expect(ticTacWin(matrix1)).to.equal(true);
      done();
    })
  })

  describe('Input: matrix2 -- 2nd column win with "O"', function() {
    it('should return true', done => {
      expect(ticTacWin(matrix2)).to.equal(true);
      done();
    })
  })

  describe('Input: matrix3 -- tie game', function() {
    it('should return false', done => {
      expect(ticTacWin(matrix3)).to.equal(false);
      done();
    })
  })

  describe('Input: matrix4 -- 3rd column win with "X", but some emtpy inputs left', function() {
    it('should return true', done => {
      expect(ticTacWin(matrix4)).to.equal(true);
      done();
    })
  })

  describe('Input: matrix5 -- tie game', function() {
    it('should return false', done => {
      expect(ticTacWin(matrix5)).to.equal(false);
      done();
    })
  })
})
