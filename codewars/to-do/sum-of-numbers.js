'use strict';

const expect = require('chai').expect;

/*
Beginner Series #3 Sum of Numbers

7kyu

Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

Note! a and b are not ordered!

Example:
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function GetSum(a,b) { // capitalization not indiciative of constructor function, just code wars notation for this particular problem

}

describe('Sum of Numbers | Code Wars | 7kyu', function() {
  describe('Input 0 -1', function() {
    it('should return -1', done => {
      expect(GetSum(0, -1)).to.equal(-1);
      done();
    })
  })

  describe('Input 0 1', function() {
    it('should return 1', done => {
      expect(GetSum(0, 1)).to.equal(1);
      done();
    })
  })

  describe('Input -1 2', function() {
    it('should return 2', done => {
      expect(GetSum(-1, 2)).to.equal(1);
      done();
    })
  })
})
