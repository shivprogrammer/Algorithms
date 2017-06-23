'use strict';

/*
You're a Square!

7kyu

A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples

isSquare(-1) // => false
isSquare( 3) // => false
isSquare( 4) // => true
isSquare(25) // => true
isSquare(26) // => false
*/

function isSquare(n) {

}

describe('You\'re a Square! | Code Wars | 7kyu', function() {
  describe('Input -1', function() {
    it('should return false', done => {
      expect(isSquare(-1)).to.equal(false);
      done();
    })
  })

  describe('Input 3', function() {
    it('should return false', done => {
      expect(isSquare(3)).to.equal(false);
      done();
    })
  })

  describe('Input 4', function() {
    it('should return true', done => {
      expect(isSquare(4)).to.equal(true);
      done();
    })
  })

  describe('Input 25', function() {
    it('should return true', done => {
      expect(isSquare(25)).to.equal(true);
      done();
    })
  })

  describe('Input 26', function() {
    it('should return false', done => {
      expect(isSquare(26)).to.equal(false);
      done();
    })
  })
})
