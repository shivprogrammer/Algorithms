'use strict';

const expect = require('chai').expect;

/*
Vowels count

7yu

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/

function getCount(str) {
  var vowelMap = new Map();
  vowelMap.set('a', 1);
  vowelMap.set('e', 1);
  vowelMap.set('i', 1);
  vowelMap.set('o', 1);
  vowelMap.set('u', 1);

  var vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowelMap.has(str.charAt(i))) {
      vowelCount++;
    }
  }
  return vowelCount;
}

// Time Complexity: O(N)
// Space Complexity: O(M)

describe('Vowels Count Code Wars 7kyu', function() {
  describe('with input abracadabra', function() {
    it('should return 5', done => {
      expect(getCount('abracadabra')).to.equal(5);
      done();
    })
  })
})
