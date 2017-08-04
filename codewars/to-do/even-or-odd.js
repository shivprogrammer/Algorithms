'use strict';

const expect = require('chai').expect;

/*
Even Or Odd

8kyu

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) { // not camelCase because function name from code wars
  return number % 2 === 0 ? 'Even' : 'Odd';
}

// Time Complexity: O(1)
// Space Complexity: O(1)

describe('Even Or Odd Code Wars 8kyu', function() {
  describe('with input 2', function() {
    it('should return even', done => {
      expect(even_or_odd(2)).to.equal('Even');
      done();
    })
  })

  describe('with input 7', function() {
    it('should return odd', done => {
      expect(even_or_odd(7)).to.equal('Odd');
      done();
    })
  })
})
