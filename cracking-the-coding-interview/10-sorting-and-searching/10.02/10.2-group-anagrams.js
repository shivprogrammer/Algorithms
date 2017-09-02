'use strict';

const expect = require('chai').expect;

/*
10.02 - Group Anagrams

Write a method to sort an array of strings so that all the anagrams are next to each other.
*/

function groupAnagrams(array) {

}

var wordList = ['lookouts', 'nameless', 'notices', 'outlooks', 'ripples', 'salesmen', 'section', 'slipper', 'serves', 'verses'];

var sortedAnagrams = ['lookouts', 'outlooks',   'nameless', 'salesmen', 'notices', 'section', 'ripples', 'slipper', 'serves', 'verses'];

describe('10.2 - Group Anagrams | Cracking the Coding Interview | Chapter 10 - Sorting & Searching', function() {
  describe('Input: wordList', function() {
    it('should return sortedAnagrams', done => {
      expect(groupAnagrams(wordList)).to.deep.equal(sortedAnagrams);
      done();
    })
  })
})
