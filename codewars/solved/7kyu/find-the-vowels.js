'use strict';

const expect = require('chai').expect;

/*
Find the Vowels

7kyu

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTE: Vowels in this context refers to English Language Vowels - a e i o u y

NOTE: this is indexed from [1..n] (not zero indexed!)
*/

function vowelIndices(word){
  var vowelsMap = new Map();
  vowelsMap.set('a', 1);
  vowelsMap.set('e', 1);
  vowelsMap.set('i', 1);
  vowelsMap.set('o', 1);
  vowelsMap.set('u', 1);
  vowelsMap.set('y', 1);

  var vowelsArray = [];

  for (let i = 0; i < word.length; i++) {
    if (vowelsMap.has(word[i])) {
      vowelsArray.push(i + 1);
    }
  }

  return vowelsArray;
}

// Time Complexity: O(N)
// Space Complexity: O(X) [vowewlsMap] + O(Y) [vowelsArray]

describe('Find the Vowels | Code Wars - 7kyu', function() {
  describe('Input: "mmm"', function() {
    it('should return []', done => {
      expect(vowelIndices('mmm')).to.deep.equal([]);
      done();
    })
  })

  describe('Input: "apple"', function() {
    it('should return [1,5]', done => {
      expect(vowelIndices('apple')).to.deep.equal([1,5]);
      done();
    })
  })

  describe('Input: "super"', function() {
    it('should return [2,4]', done => {
      expect(vowelIndices('super')).to.deep.equal([2,4]);
      done();
    })
  })

  describe('Input: "orange"', function() {
    it('should return [1,3,6]', done => {
      expect(vowelIndices('orange')).to.deep.equal([1,3,6]);
      done();
    })
  })

  describe('Input: "supercalifragilisticexpialidocious"', function() {
    it('should return [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]', done => {
      expect(vowelIndices('supercalifragilisticexpialidocious')).to.deep.equal([2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
      done();
    })
  })
})
