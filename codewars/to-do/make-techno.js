'use strict';

const expect = require('chai').expect;

/*
Make Techno

7kyu

German music producer Herbert Von Klunkerkunt has been using the same formula to make industrial techno for over twenty years. Producing at 120 beats per minute, each 4-beat bar contains:

4 kick drum hits
8 hihat hits
2 clap hits

Write a programme that takes the number of minutes and returns the number of "kicks", "hihats" and "claps" Klunkerkunt will need to fill each bar of his new track with percussion in an array. The total number of kicks, hihats and claps should be rounded to the nearest integer.

function perc (3) {}
-> should return ["360 kicks", "720 hihats", "180 claps"]
The function should return "invalid track time" if the number of minutes is:

less than 1
more than 100
not a number
function perc (0.22) {}
-> should return "invalid track time"
*/

function perc(mins) {
  if (isNaN(mins) || (mins < 1 || mins > 100)) {
    return 'invalid track time';
  }

  var kicks = Math.round(mins * 120);
  var hats = Math.round(mins * 240);
  var claps = Math.round(mins * 60);

  var output = [kicks + ' kicks', hats + ' hihats', claps + ' claps'];

  return output;
}

describe('Make Techno | 7kyu', function() {
  describe('Input: 3', function() {
    it('should return ["360 kicks", "720 hihats", "180 claps"]', done => {
      expect(perc(3)).to.deep.equal(["360 kicks", "720 hihats", "180 claps"]);
      done();
    })
  })

  describe('Input: 99.9999', function() {
    it('should return ["12000 kicks", "24000 hihats", "6000 claps"]', done => {
      expect(perc(99.9999)).to.deep.equal(["12000 kicks", "24000 hihats", "6000 claps"]);
      done();
    })
  })

  describe('Input: "a"', function() {
    it('should return "invalid track time"', done => {
      expect(perc('a')).to.equal('invalid track time');
      done();
    })
  })

  describe('Input: 0.1', function() {
    it('should return invalid track time', done => {
      expect(perc(0.1)).to.equal('invalid track time');
      done();
    })
  })
})
