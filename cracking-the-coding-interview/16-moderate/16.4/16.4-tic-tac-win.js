'use strict';

/*
Tic Tac Win

Design an Algorithm to figure out if someone has won a game of tic-tac-toe.
*/

fucking ticTacWin(matrix) {

}

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

var matrix3 = [
  ['O', '', 'X'],
  ['', 'O', 'X'],
  ['X', 'O', 'X']
];

describe('16.4 Tic Tac Win | Cracking the Coding Interview | Chapter 16 - Moderate', function() {
  describe('Input: matrix1', function() {
    it('should return false', done => {
      expect(ticTacWin(matrix1)).to.equal(false);
      done();
    })
  })

  describe('Input: matrix2', function() {
    it('should return true', done => {
      expect(ticTacWin(matrix2)).to.equal(true);
      done();
    })
  })

  describe('Input: matrix3', function() {
    it('should return false', done => {
      expect(ticTacWin(matrix3)).to.equal(false);
      done();
    })
  })

  describe('Input: matrix4 -- results in winning game but with some inputs left empty', function() {
    it('should return true', done => {
      expect(ticTacWin(matrix4)).to.equal(true);
      done();
    })
  })
})
