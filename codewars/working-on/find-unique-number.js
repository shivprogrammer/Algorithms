'use strict';

const expect = require('chai').expect;

/*
Find the Unique Number

6kyu

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.
*/

function findUniq(arr) {

}

describe('Find the Unique Number | Code Wars | 6kyu', function() {
  describe('input [0, 1, 0]', function() {
    it('should return 1', done => {
      expect(findUniq([0, 1, 0])).to.equal(1);
      done();
    })
  })

  describe('input [ 1, 1, 1, 2, 1, 1 ]', function() {
    it('should return 2', done => {
      expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).to.equal(2);
      done();
    })
  })
})
