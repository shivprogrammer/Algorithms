'use strict';

const expect = require('chai').expect;

/*
3.5 Sort Stack

Write a program to sort a stack such that the smallest items are on top. You can use an additional empty stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
*/

function sortStack(input) {
  var stack1 = [];
  var stack2 = [];
  var low = Infinity;
  var temp;
  var popCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] < low) {
      low = input[i];
    }
  }

  for (let j = 0; j < input.length; j++) {
    if (input[j] === low) {
      stack1.push(input[j]);
    }
    else {
      stack2.push(input[j]);
    }
  }

  temp = stack2.pop();

  while (stack1.length != input.length) {
    while (temp < stack1[stack1.length - 1]) {
      stack2.push(stack1.pop());
      popCount++;
    }
    stack1.push(temp);

    while (popCount) {
      stack1.push(stack2.pop());
      popCount--;
    }
    temp = stack2.pop();
  }

  return stack1;
}

// Time Complexity: O(N)
// Space Complexity: O(N squared)

describe('3.5 - Sort Stack', function() {
  describe('Input: [2, 12, 8, 7, 5, 4, 10]', function() {
    it('should return [2, 4, 5, 7, 8, 10, 12]', done => {
      expect(sortStack([2, 12, 8, 7, 5, 4, 10])).to.deep.equal([2, 4, 5, 7, 8, 10, 12]);
      done();
    })
  })

  describe('Input: [15, -4, 3, 12, 8]', function() {
    it('should return [-4, 3, 8, 12, 15]', done => {
      expect(sortStack([15, -4, 3, 12, 8])).to.deep.equal([-4, 3, 8, 12, 15]);
      done();
    })
  })

  describe('Input with Repeat Numbers: [15, -4, 12, 3, 12, 8, 8]', function() {
    it('should return [-4, 3, 8, 8, 12, 12, 15]', done => {
      expect(sortStack([15, -4, 12, 3, 12, 8, 8])).to.deep.equal([-4, 3, 8, 8, 12, 12, 15]);
      done();
    })
  })
})
