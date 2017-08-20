'use strict';

const expect = require('chai').expect;

/*
Sort the Odd

6kyu

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(arr) {

}

describe('Odd Sort Code Wars', function() {
  describe('Input: [5, 3, 2, 8, 1, 4]', function() {
    it('Should return: [1, 3, 2, 8, 5, 4]', done => {
      expect(sortArray([5, 3, 2, 8, 1, 4])).to.deep.equal([1, 3, 2, 8, 5, 4]);
      done();
    })
  })
})
