'use strict';

const expect = require('chai').expect;

/*
Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

describe('Simple Pig Latin', function() {
  describe('Input: Pig Latin is cool', function() {
    it('Expected: igPay atinlay siay oolcay', done => {
      expect(pigIt('Pig latin is cool')).to.equal('igPay atinlay siay oolcay');
      done();
    })
  })

  describe('Input: This is my string', function() {
    it('Expected: hisTay siay ymay tringsay', done => {
      expect(pigIt('This is my string')).to.equal('hisTay siay ymay tringsay');
      done();
    })
  })
})
