'use strict';

const expect = require('chai').expect;

/*
Convert number to reversed array of digits

8kyu

Given a random number:
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
}

describe('Convert Number to Reversed Array of Digits | Code Wars | 8kyu', function() {
  describe('Input: 35231', function() {
    it('should return [1,3,2,5,3]', done => {
      expect(digitize(35231)).to.equal([1,3,2,5,3]);
      done();
    })
  })
})
