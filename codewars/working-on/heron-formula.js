'use strict';

const expect = require('chai').expect;

/*
Heron's Formula

7kyu

Write function heron which calculates the area of a triangle with sides a, b, and c.

Heron's formula: sqrt (s * (s - a) * (s - b) * (s - c)), where s = (a + b + c) / 2
*/

function heron(a, b, c) {
  var s = (a + b + c) / 2;

  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

describe('Herons Formula | 7kyu', function() {
  describe('Input: 3, 4, 5', function() {
    it('should return 6', done => {
      expect(heron(3, 4, 5)).to.equal(6);
      done();
    })
  })
})
