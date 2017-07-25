'use strict';

/*
Band Name Generator

7kyu

My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.

dolphin -> The Dolphin

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):

alaska -> Alaskalaska

europe -> Europeurope

Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?
*/

function bandNameGenerator(str) {
}

describe('Band Name Generator | 7kyu', function() {
  describe('Input: "knife"', function() {
    it('should return "The Knife"', done => {
      expect(bandNameGenerator('knife')).to.equal('The Knife');
      done();
    })
  })

  describe('Input: "tart"', function() {
    it('should return "Tartart"', done => {
      expect(bandNameGenerator('tart')).to.equal('Tartart');
      done();
    })
  })

  describe('Input: "sandles"', function() {
    it('should return "Sandlesandles"', done => {
      expect(bandNameGenerator('sandles')).to.equal('Sandlesandles');
      done();
    })
  })

  describe('Input: "bed"', function() {
    it('should return "The Bed"', done => {
      expect(bandNameGenerator('bed')).to.equal('The Bed');
      done();
    })
  })
})
