'use strict';

const expect = require('chai').expect;

/*
esreveR

7kyu

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
*/

function reverse(array) {
  var output = [];

  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }

  return output;
}

describe('esreveR | Code Wars | 7kyu', function() {
  describe('Input: [1, 2, 3, 4, 5]', function() {
    it('should return [5, 4, 3, 2, 1]', done => {
      expect(reverse([1, 2, 3, 4, 5])).to.deep.equal([5, 4, 3, 2, 1]);
      done();
    })
  })

  describe('Input: ["one", 455, "candles", 0, null]', function() {
    it('should return [null, 0, "candles", 455, "one"]', done => {
      expect(reverse(['one', 455, 'candles', 0, null])).to.deep.equal([null, 0, 'candles', 455, 'one']);
      done();
    })
  })
})
