'use strict';

const expect = require('chai').expect;

/*
Take a Ten Minute walk

5kyu

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
  }

  var stack = [walk[0]];
  var directionsMap = new Map();
  directionsMap.set('w', 'e');
  directionsMap.set('e', 'w');
  directionsMap.set('n', 's');
  directionsMap.set('s', 'n');

  for (let i = 1; i < walk.length; i++) {
    if (directionsMap.get(walk[i]) === stack[stack.length - 1]) {
      stack.pop();
    }
    else  {
      stack.push(walk[i]);
    }
  }

  if (stack.length === 0) {
    return true;
  }
  else {
    return false;
  }
}

// Time Complexity: O(N)
// Space Complexity: O(N) + O(N)

describe('Take a Ten Minute Walk | 6kyu', function() {
  describe('Input: ["n","s","n","s","n","s","n","s","n","s"]', function() {
    it('should return true', done => {
      expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).to.equal(true);
      done();
    })
  })

  describe('Input: ["w","e","w","e","w","e","w","e","w","e","w","e"]', function() {
    it('should return false', done => {
      expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).to.equal(false);
      done();
    })
  })

  describe('Input: ["w"]', function() {
    it('should return false', done => {
      expect(isValidWalk(['w'])).to.equal(false);
      done();
    })
  })

  describe('Input: ["n","n","n","s","n","s","n","s","n","s"]', function() {
    it('should return false', done => {
      expect(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).to.equal(false);
      done();
    })
  })
})
