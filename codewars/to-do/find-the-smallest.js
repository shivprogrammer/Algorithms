'use strict';

const expect = require('chai').expect;

/*
Find the Smallest

5kyu

You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another place in the number.

Doing so, find the smallest number you can get.

#Task: Return an array or a tuple depending on the language (see "Your Test Cases" Haskell) with

1) the smallest number you got
2) the index i of the digit d you took, i as small as possible
3) the index j (as small as possible) where you insert this digit d to have the smallest number.
Example:

smallest(261235) --> [126235, 2, 0]
126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

smallest(209917) --> [29917, 0, 1]

[29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than
index `i` in [29917, 0, 1].
29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

smallest(1000000) --> [1, 0, 6]
*/

function smallest(n) {
}

describe('Find the Smallest | 5kyu', function() {
  describe('Input: 261235', function() {
    it('return [126235, 2, 0]', done => {
      expect(smallest(261235)).to.equal([126235, 2, 0]);
      done();
    })
  })

  describe('Input: 209917', function() {
    it('return [29917, 0, 1]', done => {
      expect(smallest(209917)).to.equal([29917, 0, 1]);
      done();
    })
  })

  describe('Input: 285365', function() {
    it('return [238565, 3, 1]', done => {
      expect(smallest(285365)).to.equal([238565, 3, 1]);
      done();
    })
  })

  describe('Input: 269045', function() {
    it('return [26945, 3, 0]', done => {
      expect(smallest(269045)).to.equal([26945, 3, 0]);
      done();
    })
  })

  describe('Input: 296837', function() {
    it('return [239687, 4, 1]', done => {
      expect(smallest(296837)).to.equal([239687, 4, 1]);
      done();
    })
  })
})
