'use strict';

const expect = require('chai').expect;

/*
Average Array

7kyu

ASC Week 1 Challenge 5 (Medium #2)

Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

For Example:

avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]); // => [3, 4, 5, 6]
avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]); // => [22.5, 11, 38.75, 38.25, 19.5]
*/

function avgArray(arr) {
  var height = arr.length;
  var width = arr[0].length;
  var temp = 0;
  var count = 0;
  var output = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      temp += arr[j][i];
      count++;
    }
    output.push(temp / count);
    temp = 0;
    count = 0;
  }

  return output;
}

describe('Average Array | 7kyu', function() {
  describe('Input: [[1, 2, 3, 4], [5, 6, 7, 8]]', function() {
    it('should return [3, 4, 5, 6]', done => {
      expect(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]])).to.deep.equal([3, 4, 5, 6]);
      done();
    })
  })

  describe('Input: [[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]', function() {
    it('should return [22.5, 11, 38.75, 38.25, 19.5]', done => {
      expect(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]])).to.deep.equal([22.5, 11, 38.75, 38.25, 19.5]);
      done();
    })
  })
})
