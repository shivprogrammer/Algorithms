'use strict';

const expect = require('chai').expect;

/*
3.5 Sort Stack

Write a program to sort a stack such that the smallest items are on top. You can use an additional empty stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
*/

function sortStack(input) {
}

describe('3.5 - Sort Stack', function() {
  describe('Input: [2, 12, 8, 7, 5, 4, 10]', function() {
    it('should return []', done => {
      expect(sortStack([2, 12, 8, 7, 5, 4, 10])).to.deep.equal([2, 4, 5, 7, 8, 10, 12]);
      done();
    })
  })
})
