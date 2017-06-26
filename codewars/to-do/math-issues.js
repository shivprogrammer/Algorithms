'use strict';

const expect = require('chai').expect;
/*
Math Issues

5kyu

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/

Math.round = function(number) {
}

Math.ceil = function(number) {
}

Math.floor = function(number) {
}

describe('Math Issues | Code Wars | 5kyu', function() {
  describe('Math.round(0.4)', function() {
    it('should return 0', done => {
      expect(Math.round(0.4)).to.equal(0);
      done();
    })
  })

  describe('Math.round(0.5)', function() {
    it('should return 1', done => {
      expect(Math.round(0.5)).to.equal(1);
      done();
    })
  })

  describe('Math.ceil(0.4)', function() {
    it('should return 1', done => {
      expect(Math.ceil(0.4)).to.equal(1);
      done();
    })
  })

  describe('Math.ceil(0.5)', function() {
    it('should return 1', done => {
      expect(Math.ceil(0.5)).to.equal(1);
      done();
    })
  })

  describe('Math.floor(0.4)', function() {
    it('should return 0', done => {
      expect(Math.floor(0.4)).to.equal(0);
      done();
    })
  })

  describe('Math.floor(0.5)', function() {
    it('should return 0', done => {
      expect(Math.floor(0.5)).to.equal(0);
      done();
    })
  })
})
