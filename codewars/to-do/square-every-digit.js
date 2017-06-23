'use strict';

const expect = require('chai').expect;

/*
Square Every Digit

7kyu

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {
  var output = '';

  for (let i = 0; i < num.toString(); i++) {
    output += Math.pow(parseInt(num.toString().charAt(i)), 2);
  }

  return parseInt(output);
}

describe('Square Every Digit | Code Wars | 7kyu', function() {
  describe('Input: 9119', function() {
    it('return 811181', done => {
      expect(squareDigits(9119)).to.equal(811181);
      done();
    })
  })
})
