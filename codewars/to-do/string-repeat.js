'use strict';

const expect = require('chai').expect;

/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
}

describe('String Repeat Code Wars', function() {
  describe('input: 3, *', function() {
    it('expect: ***', done => {
      expect(repeatStr(3, '*')).to.equal('***');
      done();
    })
  })

  describe('input: 5, #', function() {
    it('expect: ######', done => {
      expect(repeatStr(5, "#")).to.equal('#####');
      done();
    })
  })

  describe('input: 2, "ha "', function() {
    it('expect: ha ha ', done => {
      expect(repeatStr(2, "ha ")).to.equal('ha ha ');
      done();
    })
  })
})
