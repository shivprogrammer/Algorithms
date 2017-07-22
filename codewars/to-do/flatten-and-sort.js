'use strict';

const expect = require('chai').expect;

/*
Flatten and Sort

7 kyu

Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

function flattenAndSort(array) {
  return mergeSort([].concat.apply([], array));
}

// WHOOOOOOOOOOOOOOOTTTTTTT YEAAAAA BOY GETTING THAT MERGE SORT SHIT DOWNNNNNN
// Time complexity is O(N*log(N)) because of merge sort
// Space complexity is O(N) because of the resulting array that was created

describe('Flatten and Sort Problem from Code Wars', function() {
  describe('Input: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]', function() {
    it('Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]', done => {
      expect(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      done();
    })
  })

  describe('Input: [[6, 7, 8, 9], [2, 1, -1, 5], [11, 12, 145]]', function() {
    it('Expected: [-1, 1, 2, 5, 6, 7, 8, 9, 11, 12, 145]', done => {
      expect(flattenAndSort([[6, 7, 8, 9], [2, 1, -1, 5], [11, 12, 145]])).to.deep.equal([-1, 1, 2, 5, 6, 7, 8, 9, 11, 12, 145]);
      done();
    })
  })
})
