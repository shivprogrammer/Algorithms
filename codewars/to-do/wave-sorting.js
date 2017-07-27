'use strict';

const expect = require('chai').expect;

/*
Wave Sorting

6kyu
*/

function waveSort(arr) {
  if (!arr | arr.length > 1) {
    return false;
  }

  var isFirstNumBig;

  if (arr[0] > arr[1]) {
    isFirtNumBig = 1;
  }
  else {
    isFirstNumBig = 0;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (isFirstNumBig) {
      if (arr[i] > arr[i + 1]) {
      isFirstNumBig = 0;
      }
      else {
        return false;
      }
    }
    if (!isFirstNumBig) {
      if (arr[i] < arr[i - 1]) {
        isFirstNumBig = 1;
      }
      else {
        return false;
      }
    }
  }

  return true;
}

describe('Wave Sorting | 6kyu', function() {
  describe('Input: [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]', function() {
    it('should return false', done => {
      expect(waveSort([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4])).to.equal(false);
      done();
    })
  })

  describe('Input: [1, 7, 5, 14, 10, 12, 9]', function() {
    it('should return true', done => {
      expect(waveSort([1, 7, 5, 14, 10, 12, 9])).to.equal(true);
      done();
    })
  })
})
