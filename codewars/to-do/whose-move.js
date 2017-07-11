'use strict';

const expect = require('chai').expect;

/*
Whose Move

8kyu

Task
Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

Input/Output
[input] string lastPlayer
"black" or "white" - whose move it was during the previous round.
[input] boolean win
true if the player who made a move during the previous round won, false otherwise.
[output] a string
Return "white" if white is to move on the next round, and "black" otherwise.

Example
For lastPlayer = "black" and win = false, the output should be "white".
For lastPlayer = "white" and win = true, the output should be "white".
*/

function whoseMove(lastPlayer, win) {
  if (lastPlayer === 'black' && win === true) {
    return 'black';
  }

  if (lastPlayer === 'black' && win === false) {
    return 'white';
  }

  if (lastPlayer === 'white' && win === true) {
    return 'white';
  }

  if (lastPlayer === 'white' && win === false) {
    return 'black';
  }

  else {
    return false;
  }
}

describe('Whose Move Code Wars', function() {
  describe('Input: black, true', function() {
    it('Expect: black', done => {
    expect(whoseMove('black', true)).to.equal('black');
    done();
    })
  })

  describe('Input: black, false', function() {
    it('Expect: white', done => {
    expect(whoseMove('black', false)).to.equal('white');
    done();
    })
  })

  describe('Input: white, true', function() {
    it('Expect: white', done => {
    expect(whoseMove('white', true)).to.equal('white');
    done();
    })
  })

  describe('Input: white, false', function() {
    it('Expect: black', done => {
    expect(whoseMove('white', false)).to.equal('black');
    done();
    })
  })
})
