'use strict';

const expect = require('chai').expect;

/*
16.2 Word Frequencies

Design a method to find the frequency of occurrences of any given word in a book. What if we were runnning this algorithm multiple times?
*/

function wordFreq(book, word) {
  var letterMap = new Map();
  letterMap.set('a', 1);
  letterMap.set('b', 1);
  letterMap.set('c', 1);
  letterMap.set('d', 1);
  letterMap.set('e', 1);
  letterMap.set('f', 1);
  letterMap.set('g', 1);
  letterMap.set('h', 1);
  letterMap.set('i', 1);
  letterMap.set('j', 1);
  letterMap.set('k', 1);
  letterMap.set('l', 1);
  letterMap.set('m', 1);
  letterMap.set('n', 1);
  letterMap.set('o', 1);
  letterMap.set('p', 1);
  letterMap.set('q', 1);
  letterMap.set('r', 1);
  letterMap.set('s', 1);
  letterMap.set('t', 1);
  letterMap.set('u', 1);
  letterMap.set('v', 1);
  letterMap.set('w', 1);
  letterMap.set('x', 1);
  letterMap.set('y', 1);
  letterMap.set('z', 1);

  var bookWords = book.split(' ');
  console.log(bookWords);

  var bookMap = new Map();
  for (let i = 0; i < bookWords.length; i++) {
    if (!letterMap.has(bookWords[i][bookWords[i].length - 1])) {
      bookWords[i] = bookWords[i].slice(0, bookWords[i].length - 1).toLowerCase();
      if (bookMap.has(bookWords[i])) {
        bookMap.set(bookWords[i], bookMap.get(bookWords[i] + 1));
      }
      else {
        bookMap.set(bookWords[i], 1);
      }
    }
    if (bookMap.has(bookWords[i].toLowerCase())) {
      bookMap.set(bookWords[i].toLowerCase(), bookMap.get(bookWords[i].toLowerCase()) + 1);
    }
    else {
      bookMap.set(bookWords[i].toLowerCase(), 1);
    }
  }

  if (bookMap.has(word.toLowerCase())) {
    return bookMap.get(word.toLowerCase());
  }
  else {
    return 0;
  }
}

var aBook = 'So this is the tale of a land that was far, far away, where a crazy young gentlemen was working his ass off to be the best programmer that he could be. Despite the trials and tribulations, he knew that there was a shitload of money involved, and he grew to enjoy this meticulous art the more time he spent on it. far';

// console.log(wordFreq(aBook, 'titties'));

describe('16.2 Word Frequences | Cracking the Coding Interview | Chapter 16 - Moderate', function() {
  // describe('Input: aBook, "programmer"', function() {
  //   it('should return 1', done => {
  //     expect(wordFreq(aBook, 'programmer')).to.equal(1);
  //     done();
  //   })
  // })

  describe('Input: aBook, "far"', function() {
    it('should return 2', done => {
      expect(wordFreq(aBook, 'far')).to.equal(2);
      done();
    })
  })

  // describe('Input: aBook, "bruh"', function() {
  //   it('should return 0', done => {
  //     expect(wordFreq(aBook, 'bruh')).to.equal(0);
  //     done();
  //   })
  // })
})
