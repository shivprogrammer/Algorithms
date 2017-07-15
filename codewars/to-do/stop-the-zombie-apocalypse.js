'use strict';

const expect = require('chai').expect;

/*
Stop the Zombie Apocalypse!

5kyu

You are a number. But that's good for you since you live in the beautiful world, where the only living creatures are numbers. Unfortunately, a nasty zombie virus is spreading out in the digital cities. You work at the digital CDC and your job is to look over the city maps and tell which areas are contaminated by the zombie virus so the digital army would know where to drop the bombs. They are the new kind of digital zombies which can travel only in vertical and horizontal directions and infect only numbers same as them, but don't let it fool you, they're still very dangerous. Time is running out...

You'll be given two-dimensional array with numbers in it. For some mysterious reason patient zero is always found in north west area of the city (element [0][0] of the matrix) and the plague spreads from there to other cells by moving left, right, up or down. You must create a function that returns a map (2-dimensional array) with all the contaminated areas marked as 1 and virus-free marked as 0.

In other words: find all the matrix elements with the same value as [0][0] that you can go to by moving only down, up, right or left from [0][0] - without going into a field storing any other value.

For example:

var city1 = [
    [7, 2, 3],
    [7, 2, 3],
    [1, 2, 7]
];

var contaminatedInCity1 = [
    [1, 0, 0],
    [1, 0, 0],
    [0, 0, 0]
];// number 7 is a zombie, but the 7 in bottom right corner is not a zombie yet - the virus didn't get there.

var city2 = [
    [9, 1, 2],
    [9, 9, 9],
    [7, 4, 9],
    [7, 9, 7]
];

var contaminatedInCity2 = [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 0]
];//infection inflicted the 9s, but the virus didn't get to the one in the south of the city yet.
*/

function findZombies(matrix) {
  var zombie = matrix[0][0];
  var output = [];
  var temp = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 && j === 0) {
        temp.push(1);
      }
      else if (i === 0) {
        if (matrix[i][j - 1] === zombie && matrix[i][j - 1] === matrix[i][j]) {
          temp.push(1);
        }
        else {
          temp.push(0);
        }
      }
      else if ((matrix[i - 1][j] === zombie && matrix[i - 1][j] === matrix[i][j]) || (matrix[i][j - 1] === zombie && matrix[i][j - 1] === matrix[i][j])) {
        temp.push(1);
      }
      else {
        temp.push(0);
      }
    }
    output.push(temp);
    temp = [];
  }

  return output;
}

describe('Stop the Zombie Apocalypse! | 5kyu', function() {
  describe('Input: [[8, 2, 3],[8, 2, 3],[1, 2, 8]]', function() {
    it('should return [[1, 0, 0],[1, 0, 0],[0, 0, 0]]', done => {
      expect(findZombies([[8, 2, 3],[8, 2, 3],[1, 2, 8]])).to.deep.equal([[1, 0, 0],[1, 0, 0],[0, 0, 0]]);
      done();
    })
  })

  describe('Input: [[7, 2, 3],[7, 2, 3],[1, 2, 7]]', function() {
    it('should return [[1, 0, 0],[1, 0, 0],[0, 0, 0]]', done => {
      expect(findZombies([[7, 2, 3],[7, 2, 3],[1, 2, 7]])).to.deep.equal([[1, 0, 0],[1, 0, 0],[0, 0, 0]]);
      done();
    })
  })

  describe('Input: [[9, 1, 2],[9, 9, 9],[7, 4, 9],[7, 9, 7]]', function() {
    it('should return [[1, 0, 0],[1, 1, 1],[0, 0, 1],[0, 0, 0]]', done => {
      expect(findZombies([[9, 1, 2],[9, 9, 9],[7, 4, 9],[7, 9, 7]])).to.deep.equal([[1, 0, 0],[1, 1, 1],[0, 0, 1],[0, 0, 0]]);
      done();
    })
  })
})
