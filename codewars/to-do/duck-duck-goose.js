'use strict';

const expect = require('chai').expect;

/*
Duck Duck Goose

8kyu

The objective of 'Duck, duck, goose' is to walk in a circle, tapping on each player's head until one is finally chosen.

Task: Given an array of Player objects and an index (1-based), return the name of the chosen Player.

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
*/

function duckDuckGoose(players, goose) {
  var x = goose % players.length;
  if (x === 0) {
    return players[players.length - 1];
  }
  else {
    return players[x - 1];
  }
}

describe('duck duck goose question from code wars', function() {
  describe('with an array and 1', function() {
    it('should return a', done => {
      expect(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 1)).to.equal('a');
      done();
    })
  })

  describe('with same array and goose > players.length', function() {
    it('should return z', done => {
      expect(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 30)).to.equal('z');
      done();
    })
  })
})
