'use strict';

const expect = require('chai').expect;

/*
'X' marks the spot

##Task:
Given a two dimensional array, return the co-ordinates of 'x'.
The co-ordinates should be zero indexed.
You should assume you will always get an array as input.

Example test cases:
'Return an empty array if input is an empty array' => []
[]

'Return an empty array if no x found' => []
[['o', 'o'],
['o', 'o']]

'Return an empty array if more than one x found' => []
[['x', 'o'],
['o', 'x']]

'Return [0,0] when x at top left' => [0, 0]
[['x', 'o'],
['o', 'o']]

'Return [4,6] for the example below' => [4, 6]
[['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']]

'Return [4,6] for the example below' => [4, 6]
[['t', 't', 't', 'o', 'o', 'o', '~', 'o'],
  ['o', 'r', 'o', 'o', 'o', 'o', 't', 'o'],
  ['o', 'o', 'o', 's', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'c', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'a', 'a', 'a', 'o', 'x', 'o'],
  ['d', 'o', 'o', 'o', 'o', 'o', 'o', 'o']]
*/

function xMarksTheSpot(matrix) {
  var output = [];
  var xCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'x') {
        xCount++;
        output.push(i);
        output.push(j);
      }
      if (xCount > 1) {
        output = [];
      }
    }
  }

  return output;
}

// Time Complexity: O(M * N)
// Space Complexity: O(X) [Chose X to specific that is it not based on M or N, it's a different variable]

describe('X Marks the Spot | 7kyu', function() {
  describe('Input with no x: [["o", "o"],["o", "o"]]', function() {
    it('should return []', done => {
      expect(xMarksTheSpot([["o", "o"],["o", "o"]])).to.deep.equal([]);
      done();
    })
  })

  describe('Input with multiple x: [["x", "o"],["o", "x"]]', function() {
    it('should return []', done => {
      expect(xMarksTheSpot([["x", "o"],["o", "x"]])).to.deep.equal([]);
      done();
    })
  })

  describe('Input with multiple x: [["x", "o"],["o", "o"]]', function() {
    it('should return [0,0]', done => {
      expect(xMarksTheSpot([["x", "o"],["o", "o"]])).to.deep.equal([0,0]);
      done();
    })
  })
})
