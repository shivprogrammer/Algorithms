'use strict';

const expect = require('chai').expect;

/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

function feast(beast, dish) {
  if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) {
    return true;
  }
  return false;
}

// Time Complexity: O(1)
// Space Complexity: O(1)

describe('The Feast of Many Beasts | Codewars | 8kyu', function() {
  describe('Input: "great blue heron", "garlic naan"', function() {
    it('Output: true', done => {
      expect(feast("great blue heron", "garlic naan")).to.equal(true);
      done();
    })
  })

  describe('Input: "chickadee", "chocolate cake"', function() {
    it('Output: true', done => {
      expect(feast("chickadee", "chocolate cake")).to.equal(true);
      done();
    })
  })

  describe('Input: "brown bear", "bear claw"', function() {
    it('Output: true', done => {
      expect(feast("brown bear", "bear claw")).to.equal(false);
      done();
    })
  })
})
