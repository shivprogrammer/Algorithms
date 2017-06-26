'use strict';

const expect = require('chai').expect;

/*
Is This a Triangle?

7kyu

Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTriangle(a,b,c) {
  var high = Math.max(a,b,c);

  if (high === a) {
    if (Math.pow(b, 2) + Math.pow(c, 2) >= Math.pow(high, 2)) {
      return true;
    }
    else {
      return false;
    }
  }

  if (high === b) {
    if (Math.pow(a, 2) + Math.pow(c, 2) >= Math.pow(high, 2)) {
      return true;
    }
    else {
      return false;
    }
  }

  if (high === c) {
    if (Math.pow(a, 2) + Math.pow(b, 2) >= Math.pow(high, 2)) {
      return true;
    }
    else {
      return false;
    }
  }
}

describe('Is This a Triangle? | 7kyu', function() {
  describe('Input: 1, 2, 2', function() {
    it('Expected: true', done => {
      expect(isTriangle(1,2,2)).to.equal(true);
      done();
    })
  })

  describe('Input: 7, 2, 2', function() {
    it('Expected: false', done => {
      expect(isTriangle(7,2,2)).to.equal(false);
      done();
    })
  })
})
