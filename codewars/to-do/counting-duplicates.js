'use strict';

const expect = require('chai').expect;

/*
Counting Duplicates

6 kyu

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

Example:
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'
"aa11" -> 2 # 'a' and '1'
*/

// The naive solution for this would be an N squared time because you check each varible, see if it exists in your temparary holding array, and then return the length of that holding array.
// Better solution:

function duplicateCount(text) {
  console.log(text)
  var result = '';

  var sorted = text.toLowerCase().split('').sort().join('');
  console.log(sorted);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1] && sorted[i] != result.slice(-1)) {
      result += sorted[i]
    }
  }
  console.log(result)
  return result.length;
}

/*
Solution works! Had to make sure to change all of the letters to lower case before sorting.
TIME COMPLEXITY: O(N * log(N) + 2N) first part is for the sort, then the second is for looking through the for loop. Is 2N because each element is getting checked twice.
FINAL TIME COMPLEXITY: O(N * log(N))
There are solutions that I need to check out from codewars. The best practice involves regex and then the second best practice is something that involves filter. It seem as if I've come up with a unique solution which is actually pretty cool.
SPACE COMPLEXITY: O(N)
*/

describe('Duplicate Count Question -- Code Wars', function() {
  describe('Input: abcde', function() {
    it('Expected: 0', done => {
      expect(duplicateCount('abcde')).to.equal(0);
      done();
    })
  })

  describe('Input: aabbcde', function() {
    it('Expected: 2', done => {
      expect(duplicateCount('aabbcde')).to.equal(2);
      done();
    })
  })

  describe('Input: aabbcdeB', function() {
    it('Expected: 2', done => {
      expect(duplicateCount('aabbcdeB')).to.equal(2);
      done();
    })
  })

  describe('Input: Indivisibilities', function() {
    it('Expected: 2', done => {
      expect(duplicateCount('Indivisibilities')).to.equal(2);
      done();
    })
  })

  describe('Input: indivisibility', function() {
    it('Expected: 1', done => {
      expect(duplicateCount('indivisibility')).to.equal(1);
      done();
    })
  })

  describe('Input: aa11', function() {
    it('Expected: 2', done => {
      expect(duplicateCount('aa11')).to.equal(2);
      done();
    })
  })

  describe('Input: aa11 ?', function() {
    it('Expected: 2', done => {
      expect(duplicateCount('aa11 ?')).to.equal(2);
      done();
    })
  })
})
