'use strict';

const expect = require('chai').expect;

/*
3 and 5 Multiples

6kyu

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

describe('Code Wars 3 and 5 multiples questions', function() {
  describe('With an input of 10', function() {
    it('should return 23', done => {
      expect(solution(10)).to.equal(23);
      done();
    })
  })

  describe('With an input of 20', function() {
    it('should return 78', done => {
      expect(solution(20)).to.equal(78);
      done();
    })
  })
})
