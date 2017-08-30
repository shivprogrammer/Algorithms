'use strict';

const expect = require('chai').expect;

/*
8.2 Robots in a Grid

Imagine a robot sitting on the upper left corner of a grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
*/

function robotGrid(matrix) {
  var path = [];
  var lastRow = matrix.length - 1;
  var lastCol = matrix[0].length - 1;

  var checkPath = function(row, col, currPath) {
    if (row === lastRow && col === lastCol) {
      path.push(currPath.concat([[row, col]]));
    }
    else if (row <= lastRow && col <= lastCol) {
      if (row <= lastRow && row != 0) {
        path.push(currPath.concat([[row, col]]))
        checkPath(row + 1, col, currPath)
      }
      else if (col <= lastCol && col != 0) {
        path.push(currPath.concat([[row, col]]));
        checkPath(row, col + 1, currPath);
      }
    }
  }
  checkPath(0, 0, []);
  console.log(path);
  return path;
}

var noPathMatrix = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 1]
];

var onePathMatrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1]
];

var twoPathMatrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];

describe('8.2 - Robots in a Grid | Cracking the Coding Interview | Chapter 8 - Recursion and Dynamic Programming', function() {
  describe('Input: noPathMatrix', function() {
    it('should return []', done => {
      expect(robotGrid(noPathMatrix)).to.deep.equal([]);
      done();
    })
  })

  // describe('Input: onePathMatrix', function() {
  //   it('should return [[[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]]', done => {
  //     expect(robotGrid(onePathMatrix)).to.deep.equal([[[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]]);
  //     done();
  //   })
  // })
  //
  // describe('Input: twoPathMatrix', function() {
  //   it('should return [[[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]], [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]]', done => {
  //     expect(robotGrid(twoPathMatrix)).to.deep.equal([[[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]], [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]]);
  //     done();
  //   })
  // })
})
