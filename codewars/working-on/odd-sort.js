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
  var oddsValues = [];
  var output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddsValues.push(arr[i]);
      output.push(false);
    }

    else {
      output.push(arr[i]);
    }
  }

  oddsValues = mergeSort(oddsValues);

  for (let x = 0; x < output.length; x++) {
    if (output[x] === false) {
      output[x] = oddsValues[0];
      oddsValues.shift();
    }
  }

  return output;
}

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

  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }

  return result;
}

describe('Odd Sort Code Wars', function() {
  describe('Input: [5, 3, 2, 8, 1, 4]', function() {
    it('Should return: [1, 3, 2, 8, 5, 4]', done => {
      expect(sortArray([5, 3, 2, 8, 1, 4])).to.deep.equal([1, 3, 2, 8, 5, 4]);
      done();
    })
  })
})
