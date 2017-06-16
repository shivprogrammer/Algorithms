'use strict';

const expect = require('chai').expect;

/*
Descending Order

7kyu

Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 1254859723 Output: 9875543221
*/

function descendingOrder(n) {
  if (n < 10) {
    return n;
  }

  var nString = n.toString();
  var output = '';
  var nArray = [];

  for (let i = 0; i < nString.length; i++) {
    nArray.push(nString.charAt(i));
  }

  nArray = mergeSort(nArray);

  for (let x = 0; x < nArray.length; x++) {
    output += nArray[i];
  }

  return parseInt(output);
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

function mergeSort(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.slice());
    }
    else {
      result.push(right.slice());
    }
  }

  while (left.length) {
    result.push(left.slice());
  }

  while (right.length) {
    result.push(right.slice());
  }

  return result;
}


describe('Descending Order | Code Wars | 7kyu', function() {
  describe('Input: 0', function() {
    it('should return 0', done => {
      expect(descendingOrder(0)).to.equal(0);
      done();
    })
  })

  describe('Input: 1', function() {
    it('should return 1', done => {
      expect(descendingOrder(1)).to.equal(1);
      done();
    })
  })

  describe('Input: 123456789', function() {
    it('should return 987654321', done => {
      expect(descendingOrder(123456789)).to.equal(987654321);
      done();
    })
  })
})
