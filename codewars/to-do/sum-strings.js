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
  if (!a) {
    return b;
  }

  if (!b) {
    return a;
  }

  var output = '';
  var loopLength = 0;

  if (b.length > a.length) {
    loopLength = b.length;
  }
  if (b.length < a.length) {
    loopLength = a.length;
  }
  if (a.length === b.length) {
    if (parseInt(a.charAt(0)) + parseInt(b.charAt(0)) >= 10) {
      loopLength = a.length + 1;
    }
    else {
      loopLength = a.length;
    }
  }

  while (loopLength) {
    if (a.length && b.length) {
      output += parseInt(a.charAt(a.length - 1)) + parseInt(b.charAt(b.length - 1));
      a = Math.floor(parseInt(a) / 10);
      b = Math.floor(parseInt(b) / 10);
      loopLength--;
    }
    if (a.length) {
      return a + output;
    }
    if (b.length) {
      return b + output;
    }
  }

  return output;
}

describe('Sum Strings as Numbers | Code Wars | 4kyu', function() {
  describe('one input value is empty string', function() {
    it('Expect: "5"', done => {
      expect(sumStrings('','5')).to.equal('5');
      done();
    })
  })

  describe('Input: "123", "456"', function() {
    it('Expect: "579"', done => {
      expect(sumStrings('123','456')).to.equal('579');
      done();
    })
  })

  describe('Input: "712569312664357328695151392", "8100824045303269669937"', function() {
    it('Expect: "712577413488402631964821329"', done => {
      expect(sumStrings('712569312664357328695151392','8100824045303269669937')).to.equal('712577413488402631964821329');
      done();
    })
  })
})
