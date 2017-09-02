'use strict';

const expect = require('chai').expect;

/*
10.02 - Group Anagrams

Write a method to sort an array of strings so that all the anagrams are next to each other.
*/

function groupAnagrams(array) {
  var words = [];
  var output = [];

  for (let i = 0; i < array.length; i++) {
    words.push([array[i].split('').sort().join(''), array[i]]);
  }

  words.sort(matrixSort);

  for (let x = 0; x < words.length; x++) {
    output.push(words[x][1]);
  }

  console.log(output);
  return output;
}

function matrixSort(a, b) {
  if (a[0] === b[0]) {
    return 0;
  }
  else {
    return a[0] < b[0] ? -1 : 1;
  }
}

var wordList = ['lookouts', 'nameless', 'notices', 'outlooks', 'ripples', 'salesmen', 'section', 'slipper', 'serves', 'verses'];

var sortedAnagrams = ['nameless', 'salesmen', 'notices', 'section', 'serves', 'verses', 'ripples', 'slipper', 'lookouts', 'outlooks'];


describe('10.2 - Group Anagrams | Cracking the Coding Interview | Chapter 10 - Sorting & Searching', function() {
  describe('Input: wordList', function() {
    it('should return sortedAnagrams', done => {
      expect(groupAnagrams(wordList)).to.deep.equal(sortedAnagrams);
      done();
    })
  })
})
