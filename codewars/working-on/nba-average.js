'use strict';

const expect = require('chai').expect;

/*
NBA Full 48 Minutes Average

8kyu

An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48
pointsPer48(5, 17) // 14.1
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams!
*/

function pointsPer48(ppg, mpg) {
  return mpg === 0 ? 0 : parseFloat(((ppg * 48) / mpg).toFixed(1));
}

describe('NBA Full 48 Minutes Average | Code Wars | 8kyu', function() {
  describe('function: pointsPer48 | ppg = 12, mpg = 20', function() {
    it('should return 28.8', done => {
      expect(pointsPer48(12, 20)).to.equal(28.8);
      done();
    })
  })

  describe('function: pointsPer48 | ppg = 10, mpg = 10', function() {
    it('should return 48.0', done => {
      expect(pointsPer48(10, 10)).to.equal(48.0);
      done();
    })
  })

  describe('function: pointsPer48 | ppg = 0, mpg = 0', function() {
    it('should return 0', done => {
      expect(pointsPer48(0, 0)).to.equal(0);
      done();
    })
  })

  describe('function: pointsPer48 | ppg = 30.8, mpg = 34.7', function() {
    it('should return 42.6', done => {
      expect(pointsPer48(30.8, 34.7)).to.equal(42.6);
      done();
    })
  })

  describe('function: pointsPer48 | ppg = 22.9, mpg = 33.8', function() {
    it('should return 32.5', done => {
      expect(pointsPer48(22.9, 33.8)).to.equal(32.5);
      done();
    })
  })
})
