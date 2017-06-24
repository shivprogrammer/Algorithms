'use strict';

const expect = require('chai').expect;

/*
Sum Strings as Numbers

4kyu

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) {
}

describe('Sum Strings as Numbers | Code Wars | 4kyu', function() {
  describe('Input: "123", "456"', function() {
    it('Expect: "579"', done => {
      expect(sumStrings('123','456')).to.equal('579');
      done();
    })
  })
})
