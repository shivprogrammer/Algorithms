'use strict';

const expect = require('chai').expect;
/*
Remove the Minimum

7kyu

The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/

function removeSmallest(numbers) {
}

describe('Remove the Minimum | 7kyu', function() {
  describe('base case empty list input: []', function() {
    it('should return empty list: []', done => {
      expect(removeSmallest([])).to.deep.equal([]);
      done();
    })
  })

  describe('Input has min at 0 index: [1, 2, 3, 4, 5]', function() {
    it('should return input with 1 removed: [2, 3, 4, 5]', done => {
      expect(removeSmallest([1, 2, 3, 4, 5])).to.deep.equal([2, 3, 4, 5]);
      done();
    })
  })

  describe('Input is 1 at 3rd index: [5, 3, 2, 1, 4]', function() {
    it('should return input with 1 removed: [5, 3, 2, 4]', done => {
      expect(removeSmallest([5, 3, 2, 1, 4]))).to.deep.equal([5, 3, 2, 4]);
      done();
    })
  })

  describe('Input has 2 mins: [2, 2, 1, 2, 1]', function() {
    it('should remove min at preceding index: [2, 2, 2, 1]', done => {
      expect(removeSmallest([2, 2, 1, 2, 1]))).to.deep.equal([2, 2, 2, 1]);
      done();
    })
  })
})
