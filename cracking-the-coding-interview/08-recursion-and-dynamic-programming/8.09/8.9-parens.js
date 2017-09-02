'use strict';

const expect = require('chai').expect;

/*
8.9 - Parens

Implement an algorithm to print all valid (e.g., properly open and close) combinations of n pairs of parentheses

EXAMPLE:
Input: 3
Output: ((())), (()()), (())(), ()(()), ()()()
*/

function parens(n) {
  var combos = [];

  var generateParens = function(currParens, remainingPairs) {
    if (remainingPairs === 0) {
      combos.push(currParens);
    }
    else {
      var used = {};
      if (!used[`($currParens)`]) {
        used[`(${currParens})`] = true;
        generateParens(`(${currParens})`, remainingPairs - 1);
      }
      if (!used[`()${currParens}`]) {
        used[`()${currParens}`] = true;
        generateParens(`()${currParens}`, remainingPairs - 1);

      }
      if (!used[`${currParens}()`]) {
        used[`${currParens}()`] = true;
        generateParens(`${currParens}()`, remainingPairs - 1);
      }
    }
  }
  generateParens('', n)
  console.log(combos);
  return combos;
}

describe('8.9 - Parens | Cracking the Coding Interview | Chapter 8 - Recursion & Dynamic Programming', function() {
  describe('Function: parens | Input: 1', function() {
    it('should return ["()"]', done => {
      expect(parens(1)).to.deep.equal(['()']);
      done();
    })
  })

  describe('Function: parens | Input: 2', function() {
    it('should return ["(())", "()()"]', done => {
      expect(parens(2)).to.deep.equal(['(())', '()()']);
      done();
    })
  })

  describe('Function: parens | Input: 3', function() {
    it('should return ["((()))", "()(())", "(())()", "(()())", "()()()"]', done => {
      expect(parens(3)).to.deep.equal(['((()))', '()(())', '(())()', '(()())', '()()()']);
      done();
    })
  })
})
