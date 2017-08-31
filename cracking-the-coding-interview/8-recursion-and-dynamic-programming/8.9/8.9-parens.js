'use strict';

const expect = require('chai').expect;

/*
8.9 - Parens

Implement an algorithm to print all valid (e.g., properly open and close) combinations of n pairs of parentheses

EXAMPLE:
Input: 3
Output: ((())), (()()), (())(), ()(()), ()()()
*/

function addParen(list, leftRemainder, rightRemainder, charArray, index) {
  if (leftRemainder < 0 || rightRemainder < leftRemainder) { // if you run out of the left parenthesis or if there are ever more left paranthesis than right parenthesis, then it is not a valid base pair. Left has to be less than right because '(' has to come to before ')' in any proper pairing.
    return;
  }

  if (leftRemainder === 0 && rightRemainder === 0) { // all of the left and right parenthesis have been used
    list.push(charArray);
  }
  else  {
    charArray[index] = '(';
    addParen(list, leftRemainder - 1, rightRemainder, charArray, index + 1);

    charArray[index] = ')';
    addParen(list, leftRemainder, rightRemainder - 1, charArray, index + 1);
  }
}

function generateParens(count) {
  var charArray = [count * 2];
  var list = [];
  addParen(list, count, count, charArray, 0);
  return list;
}

describe('8.9 - Parens | Cracking the Coding Interview | Chapter 8 - Recursion & Dynamic Programming', function() {
  describe('Function: parens | Input: 1', function() {
    it('should return [()]', done => {
      expect(generateParens(1)).to.deep.equal(['()']);
      done();
    })
  })

  // describe('Function: parens | Input: 2', function() {
  //   it('should return [(()), ()()]', done => {
  //     expect(parens(2)).to.deep.equal([(()), ()()]);
  //     done();
  //   })
  // })
  //
  // describe('Function: parens | Input: 3', function() {
  //   it('should return [((())), (()()), (())(), ()(()), ()()()]', done => {
  //     expect(parens(3)).to.deep.equal([((())), (()()), (())(), ()(()), ()()()]);
  //     done();
  //   })
  // })
})
