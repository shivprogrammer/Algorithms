'use strict';

const expect = require('chai').expect;

/*
8.2 Robots in a Grid

Imagine a robot sitting on the upper left corner of a grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
*/

function robotGrid(matrix) {

}

var matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1]
];

var noPathMatrix = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 1]
];

describe('8.2 - Robots in a Grid | Cracking the Coding Interview | Chapter 8 - Recursion and Dynamic Programming', function() {
  describe('Input: matrix1', function() {
    it('should return [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]', done => {
      expect(robotGrid(matrix1)).to.deep.equal([[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]);
      done();
    })
  })
})
