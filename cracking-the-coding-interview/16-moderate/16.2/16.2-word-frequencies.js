'use strict';

const expect = require('chai').expect;

/*
16.2 Word Frequencies

Design a method to find the frequency of occurrences of any given word in a book. What if we were runnning this algorithm multiple times?
*/

function wordFreq(book, word) {
  var bookWords = book.split(' ');

  var bookMap = new Map();
  for (let i = 0; i < bookWords.length; i++) {
    if (bookMap.has(bookWords[i])) {
      bookMap.set(bookWords[i], bookMap.get(bookWords[i]) + 1);
    }
    else {
      bookMap.set(bookWords[i], 1);
    }
  }

  if (bookMap.has(word)) {
    return bookMap.get(word);
  }
  else {
    return 0;
  }
}

var aBook = 'So this is the tale of a land that was far, far away, where a crazy young gentlemen was working his ass off to be the best programmer that he could be. Despite the trials and tribulations, he knew that there was a shitload of money involved, and he grew to enjoy this meticulous art the more time he spent on it.';

// console.log(wordFreq(aBook, 'titties'));

describe('16.2 Word Frequences | Cracking the Coding Interview | Chapter 16 - Moderate', function() {
  describe('Input: aBook, "programmer"', function() {
    it('should return 1', done => {
      expect(wordFreq(aBook, 'programmer')).to.equal(1);
      done();
    })
  })

  describe('Input: aBook, "far"', function() {
    it('should return 2', done => {
      expect(wordFreq(aBook, 'far')).to.equal(2);
      done();
    })
  })

  describe('Input: aBook, "bruh"', function() {
    it('should return 0', done => {
      expect(wordFreq(aBook, 'bruh')).to.equal(0);
      done();
    })
  })
})
