'use strict';

const expect = require('chai').expect;

/*
Where my Anagrams At?

5kyu

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
  var output = [];
  var wordMap = new Map();
  var anagramCheck = new Map();

  for (let i = 0; i < word.length; i++) {
    if (wordMap.get(word[i])) {
      wordMap.set(word[i], wordMap.get(word[i]) + 1);
    }
    else {
      wordMap.set(word[i], 1);
    }
  }

  for (let x = 0; x < words.length; x++) {
    for (let y = 0; y < words[x].length; y++) {
      if (anagramCheck.get(words[x][y])) {
        anagramCheck.set(words[x][y], anagramCheck.get(words[x][y]) + 1);
      }
      else {
        anagramCheck.set(words[x][y], 1);
      }
    }

    if (compareMaps(wordMap, anagramCheck)) {
      output.push(words[x]);
    }

    anagramCheck.clear();
  }

  return output;
}

function compareMaps(map1, map2) {
  var tempVal;

  if (map1.size != map2.size) {
    return false;
  }

  for (var [key, val] of map1) {
    tempVal = map2.get(key);

    if (tempVal != val || (!map2.has(key) && tempVal === undefined)) {
      return false;
    }
  }
  return true;
}

describe('Where my Anagrams At? | Code Wars | 5kyu', function() {
  describe('with no anagrams', function() {
    it('return empty string', done => {
      expect(anagrams('laser', ['lazing', 'lazy', 'lacer'])).to.deep.equal([]);
      done();
    })
  })

  describe('Input: abba [aabb abcd bbaa dada]', function() {
    it('should return [aabb bbaa]', done => {
      expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).to.deep.equal(['aabb', 'bbaa']);
      done();
    })
  })

  describe('Input: racer [crazer carer racar caers]', function() {
    it('should return [carer racer]', done => {
      expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).to.deep.equal(['carer', 'racer']);
      done();
    })
  })
})
