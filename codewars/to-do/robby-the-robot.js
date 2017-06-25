'use strict';

const expect = require('chai').expect;

/*
Robby, the Robot

2kyu

Robby, the robot, wants to find his way back home. Unfortunately his power is pretty low, so he needs to find the shortest way from his Start point (S) to the Target cell (T).

When Robby starts, he always looks into north direction. He has a limited command set and each command costs him 1 unit of power. The commands are:

Commands = {
  "TURN_RIGHT": "r", // turn right by 90°
  "TURN_LEFT": "l", // turn left by 90°
  "MOVE_FORWARDS": "f" // move one field forwards into current direction
};
The field, Robby is moving on, is defined by a string, which may have different dimensions, but is always squared.

Example for a 3x3 field:

field = 'S.......T';
// which means:
field =
  'S..' +
  '...' +
  '..T';
Each cell of the field is described by a character:

Fields = {
  "WALKABLE": ".", // Robby may walk on this
  "BLOCKED": "#", // Robby must not walk on this
  "START": "S", // Robby is starting here, he may also walk here
  "TARGET": "T" // The target cell, Robby has to reach
};
Your task is to write a function, which returns the list of commands, Robby has to do in order to reach the target cell and save as much power as possible. If Robby is not able to reach the target with the remaining power, the function should return an empty list.

Example:

getCommands('T.S.', 5); // -> ['f'], because he just has to move forward
getCommands('S.......T', 10); // -> ['r', 'f', 'f', 'r', 'f', 'f']
getCommands('S.......T', 5); // -> [], because he needs at least 6 units of power
getCommands('S#.##...T', 20); // => [], because the target can not be reached (with an arbitrary amount of power)
Additional notes:

There is exactly one Start point (S)
There is exactly one Target point (T)
Each test case has exactly one solution (= only one shortest command list)
*/

function getCommands(field, power) {
  var moves = '';
  var sideLength = Math.sqrt(field.length);
  var startPosition;
  var targetPosition;
  var temp;
  let gameField = field.split('');

  for (let i = 0; i < field.length; i++) {
    if (field.charAt(i) === 'S') {
      startPosition = i;
    }
    if (field.charAt(i) === 'T') {
      targetPosition = i;
    }
  }

  if (startPosition != targetPosition) {
    if (startPosition > targetPosition) {
      moves += 'f';
      temp = startPosition;
      startPosition = startPosition - sideLength;
      gameField[startPosition] = 'S';
      gameField[temp] = '.';
    }
  }

  if (!gameField.includes('T')) {
    if (moves.length <= power) {
      return moves;
    }
    else {
      return '';
    }
  }
}

describe('Robby, the Robot | Code Wars | 2kyu', function() {
  describe('Input: "T.S.", 10', function() {
    it('Expected: "f"', done => {
      expect(getCommands('T.S.', 10)).to.equal('f');
      done();
    })
  })

  describe('Input: "S.......T", 10', function() {
    it('Expected: "rffrff"', done => {
      expect(getCommands('S.......T', 10)).to.equal('rffrff');
      done();
    })
  })

  describe('Input: "S.......T", 5', function() {
    it('Expected: "rffrff"', done => {
      expect(getCommands('S.......T', 5)).to.equal('');
      done();
    })
  })

  describe('Input: "S#.##...T", 20', function() {
    it('Expected: ""', done => {
      expect(getCommands('S#.##...T', 20)).to.equal('');
      done();
    })
  })
})
