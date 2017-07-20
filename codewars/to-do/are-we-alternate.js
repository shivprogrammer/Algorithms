'use strict';

const expect = require('chai').expect;

/*
Are We Alternate?

6kyu

Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/

function isAlt(word) {
  var stack = [];

  var vowels = new Map();
  vowels.set('a', 1);
  vowels.set('e', 1);
  vowels.set('i', 1);
  vowels.set('o', 1);
  vowels.set('u', 1);

  if (vowels.has(word.charAt(0))) {
    for (let i = 0; i < word.length; i++) {
      if (vowels.has(word.charAt(i))) {
         stack.push('yo');
      }
      else {
        stack.pop;
      }
    }
  }
  else {
    for (let i = 0; i < word.length; i++) {
      if (!vowels.has(word.charAt(i))) {
         stack.push('yo');
      }
      else {
        stack.pop;
      }
    }
  }

  return stack.length === 0;
}

describe('Are We Alternate? | 6kyu', function() {
  describe('Input: "amazon"', function() {
    it('should return true', done => {
      expect(isAlt('amazon')).to.equal(true);
      done();
    })
  })

  describe('Input: "apple"', function() {
    it('should return false', done => {
      expect(isAlt('apple')).to.equal(false);
      done();
    })
  })

  describe('Input: "banana"', function() {
    it('should return true', done => {
      expect(isAlt('banana')).to.equal(true);
      done();
    })
  })
})
