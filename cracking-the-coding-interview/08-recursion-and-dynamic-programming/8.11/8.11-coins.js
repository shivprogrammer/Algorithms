'use strict';

const expect = require('chai').expect;

/*
8.11 - Coins

Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate the number of ways representing n cents.
*/

var dp = {};

var coins = function(value, currCoin) {
  if (currCoin === undefined) {
    currCoin = 1;
  }
  if (value < 0) {
    return 0;
  }
  else {
    var key = `${value}:${currCoin}`;
    if (dp[key] === undefined) {
      if (value === 0) {
        dp[key] = 1;
      }
      else {
        var ways = 0;
        if (currCoin <= 1) {
          ways += coins(value - 1, 1);
        }
        if (currCoin <= 5) {
          ways += coins(value - 5, 5);
        }
        if (currCoin <= 10) {
          ways += coins(value - 10, 10);
        }
        if (currCoin <= 25) {
          ways += coins(value - 25, 25);
        }
        dp[key] = ways;
      }
    }
    return dp[key];
  }
}

describe('8.11 - Coins | Cracking the Coding Interview | Chapter 8 - Recursion & Dynamic Programming', function() {
  describe('Input: 0', function() {
    it('should return 1', done => {
      expect(coins(0)).to.equal(1);
      done();
    })
  })
})
