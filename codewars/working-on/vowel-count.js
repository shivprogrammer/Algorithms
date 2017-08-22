'use strict';

const expect = require('chai').expect;

/*
Vowels count

7yu

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/

function getCount(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
        break;
      }
    }
  }
  return vowelsCount;
}

describe('Vowels Count Code Wars 7kyu', function() {
  describe('with input abracadabra', function() {
    it('should return 5', done => {
      expect(getCount('abracadabra')).to.equal(5);
      done();
    })
  })
})
