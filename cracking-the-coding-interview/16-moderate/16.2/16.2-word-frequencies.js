'use strict';

/*
16.2 Word Frequencies

Design a method to find the frequency of occurrences of any given word in a book. What if we were runnning this algorithm multiple times?
*/

function wordFreq(book, word) {

}

var book = 'So this is the tale of a land that was far, far away, where a crazy young gentlemen was working his ass off to be the best programmer that he could be. Despite the trials and tribulations, he knew that there was a shitload of money involved, and he grew to enjoy this meticulous art the more time he spent on it.';

describe('16.2 Word Frequences | Cracking the Coding Interview | Chapter 16 - Moderate', function() {
  describe('Input: book, "programmer"', function() {
    it('should return 1', done => {
      expect(wordFreq(book, 'programmer')).to.equal(1);
      done();
    })
  })

  describe('Input: book, "far"', function() {
    it('should return 2', done => {
      expect(wordFreq(book, 'far')).to.equal(2);
      done();
    })
  })

  describe('Input: book, "bruh"', function() {
    it('should return 0', done => {
      expect(wordFreq(book, 'bruh')).to.equal(0);
      done();
    })
  })
})
