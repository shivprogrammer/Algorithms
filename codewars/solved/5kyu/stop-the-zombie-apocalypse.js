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
  var output = [];
  var temp = [];
  var round2 = [];
  var contaminated = matrix[0][0];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 && j === 0) {
        temp.push(1);
      }
      else if (temp[temp.length - 1] === 1 && matrix[i][j] === contaminated) {
        temp.push(1);
      }
      else if (i != 0) {
        if (output[i - 1][j] === 1 && matrix[i][j] === contaminated) {
          temp.push(1);
        }
        else {
          temp.push(0);
        }
      }
      else {
        temp.push(0);
      }
    }
    output.push(temp);
    temp = [];
  }

  for (let x = output.length - 1; x >= 0; x--) {
    for (let y = output.length - 1; y >= 0; y--) {
      if (x != output.length - 1) {
        if (output[x + 1][y] === 1 && matrix[x][y] === contaminated) {
          output[x][y] = 1;
        }
      }
      if (y != output[0].length - 1) {
        if (output[x][y + 1] === 1 && matrix[x][y] === contaminated) {
          output[x][y] = 1;
        }
      }
    }
  }

  return output;
}

// Time Complexity: O(N Squared)
// Space Complexity: O(N) + O(N) + O(N)

var city1 = [
  [8, 8, 8],
  [14, 3, 2],
  [-1, 0, 1]
];

var city1Contaminated = [
  [1, 1, 1],
  [0, 0, 0],
  [0, 0, 0]
];

var city2 = [
  [10, 10, 1],
  [10, 4, 8],
  [112, -44, 1]
];

var city2Contaminated = [
  [1, 1, 0],
  [1, 0, 0],
  [0, 0, 0]
];

var luckyGuy = [
  [100, 100, 100, 100, 100],
  [100, 1, 1, 100, 1],
  [100, -12, 4, 100, 9],
  [100, 13, 44, 54, 10],
  [100, 100, 100, 0, 100]
];

var luckyGuyContaminated = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0]
];

var unluckyGuy = [
  [0, 1, 0],
  [0, 0, 0],
  [18, 5, 4]
];

var unluckyGuyContaminated = [
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
];

var snakeCity = [
  [10, 8, 10, 10],
  [10, -1, 2, 10],
  [10, -8, 9, 10],
  [10, 10, 10, 10]
];

var snakeCityContaminated = [
  [1, 0, 1, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1]
];

var current = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 1, 1]
]

var current = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1]
]

// problem has become that output can no longer be referenced in order to continue the snake
// reference has be to become temp

describe('Stop the Zombie Apocalypse! | 5kyu', function() {
  describe('Input -- contaminated in only top row: city1', function() {
    it('should return city1Contaminated', done => {
      expect(findZombies(city1)).to.deep.equal(city1Contaminated);
      done();
    })
  })

  describe('Input -- contamination in rows and columns: city2', function() {
    it('should return city2Contaminated', done => {
      expect(findZombies(city2)).to.deep.equal(city2Contaminated);
      done();
    })
  })

  describe('Input -- one lucky sap has the contaminate number but nobody is touching him: luckyGuy', function() {
    it('should return luckyGuyContaminated', done => {
      expect(findZombies(luckyGuy)).to.deep.equal(luckyGuyContaminated);
      done();
    })
  })

  describe('Input -- one jackass got contaminated late: unluckyGuy', function() {
    it('should return unluckyGuyContaminated', done => {
      expect(findZombies(unluckyGuy)).to.deep.equal(unluckyGuyContaminated);
      done();
    })
  })

  describe('Input -- a domino effect of contaminants: snakeCity', function() {
    it('should return snakeCityContaminated', done => {
      expect(findZombies(snakeCity)).to.deep.equal(snakeCityContaminated);
      done();
    })
  })
})
