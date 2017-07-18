'use strict';

const expect = require('chai').expect;

/*
4 By 4 Skyscapers

2 KYU -- OH SHIT SON HERE WE GOOOOOOOOO

In a grid of 4 by 4 squares you want to place a skyscraper in each square with only some clues:

The height of the skyscrapers is between 1 and 4
No two skyscrapers in a row or column may have the same number of floors
A clue is the number of skyscrapers that you can see in a row or column from the outside
Higher skyscrapers block the view of lower skyscrapers located behind them

Can you write a program that can solve this puzzle?

Example:

To understand how the puzzle works, this is an example of a row with 2 clues. Seen from the left side there are 4 buildings visible while seen from the right side only 1:

 4	    	    	    	    	 1

There is only one way in which the skyscrapers can be placed. From left-to-right all four buildings must be visible and no building may hide behind another building:

 4	 1	 2	 3	 4	 1

Example of a 4 by 4 puzzle with the solution:

  	    	    	 1	 2

  	  	  	  	  	 2
 1

  	  	  	 3

  	  	  	 1	 2
  	 2	 1	 4	 3
  	 3	 4	 1	 2	 2
 1	 4	 2	 3	 1
  	 1	 3	 2	 4
  	  	  	 3

Task:

Finish:
function solvePuzzle(clues)
Pass the clues in an array of 16 items. This array contains the clues around the clock, index:
  	 0	 1	   2	   3
 15	  	  	  	  	 4
 14	  	  	  	  	 5
 13	  	  	  	  	 6
 12	  	  	  	  	 7
  	11	10	 9	 8
If no clue is available, add value 0
Each puzzle has only one possible solution
SolvePuzzle() returns matrix int[][]. The first indexer is for the row, the second indexer for the column.
*/

function solvePuzzle (clues) {
  var outputMatrix = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']];

  // var optionsMatrix = [[[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]], [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]], [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]], [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]];

  var clueToMatrix = new Map();
  clueToMatrix.set(0, outputMatrix[0][0]);
  clueToMatrix.set(1, outputMatrix[0][1]);
  clueToMatrix.set(2, outputMatrix[0][2]);
  clueToMatrix.set(3, outputMatrix[0][3]);
  clueToMatrix.set(4, outputMatrix[0][3]);
  clueToMatrix.set(5, outputMatrix[1][3]);
  clueToMatrix.set(6, outputMatrix[2][3]);
  clueToMatrix.set(7, outputMatrix[3][3]);
  clueToMatrix.set(8, outputMatrix[3][3]);
  clueToMatrix.set(9, outputMatrix[3][2]);
  clueToMatrix.set(10, outputMatrix[3][1]);
  clueToMatrix.set(11, outputMatrix[3][0]);
  clueToMatrix.set(12, outputMatrix[3][0]);
  clueToMatrix.set(13, outputMatrix[2][0]);
  clueToMatrix.set(14, outputMatrix[1][0]);
  clueToMatrix.set(15, outputMatrix[0][0]);

  for (let i = 0; i < clues.length; i++) {
    if (clues[i] === 1) {
      outputMatrix[clueToMatrix.get(clues[i])] = 4;
    }
  }
  return outputMatrix;
}

// right now the difficulty is that I would like to reference the position in the outputMatrix based on the clue array

describe('Holy fuck balls man this is the big one. 4 x 4 Skyscrapers', function() {
  describe('Input: [2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3]', function() {
    it('should return [[1, 3, 4, 2], [4, 2, 1, 3], [3, 4, 2, 1], [2, 1, 3, 4]]', done => {
      expect(solvePuzzle([2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3])).to.deep.equal([[1, 3, 4, 2], [4, 2, 1, 3], [3, 4, 2, 1], [2, 1, 3, 4]]);
      done();
    })
  })
})
