'use strict';

/*
4kyu

Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

function snail(array) {

}

describe('Snail | Code Wars | 4kyu', function() {
  describe('Input: [[1,2,3], [4,5,6], [7,8,9]]', function() {
    it('should return [1,2,3,6,9,8,7,4,5]', done => {
      expect(snail([[1,2,3], [4,5,6], [7,8,9]])).to.deep.equal([1,2,3,6,9,8,7,4,5]);
      done();
    })
  })

  describe('Input: [[1,2,3], [8,9,4], [7,6,5]]', function() {
    it('should return [1,2,3,4,5,6,7,8,9]', done => {
      expect(snail([[1,2,3], [8,9,4], [7,6,5]])).to.deep.equal([1,2,3,4,5,6,7,8,9]);
      done();
    })
  })
})
