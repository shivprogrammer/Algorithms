'use strict';

const expect = require('chai').expect;

/*
Human Readable Time

5kyu

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable(seconds) {
}

describe('Human Readble Time | Code Wars | 5kyu', function() {
  describe('Input: 0', function() {
    it('should return "00:00:00"', done => {
      expect(humanReadable(0)).to.equal('00:00:00');
      done();
    })
  })

  describe('Input: 5', function() {
    it('should return "00:00:05"', done => {
      expect(humanReadable(5)).to.equal('00:00:05');
      done();
    })
  })

  describe('Input: 60', function() {
    it('should return "00:01:00"', done => {
      expect(humanReadable(60)).to.equal('00:01:00');
      done();
    })
  })

  describe('Input: 86399', function() {
    it('should return "23:59:59"', done => {
      expect(humanReadable(86399)).to.equal('23:59:59');
      done();
    })
  })

  describe('Input: 359999', function() {
    it('should return "99:59:59"', done => {
      expect(humanReadable(359999)).to.equal('99:59:59');
      done();
    })
  })
})
