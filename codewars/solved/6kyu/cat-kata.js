'use strict';

const expect = require('chai').expect;

/*
Cat Kata, Part 1

6kyu

In this, the first and simplest of a planned trilogy of cat katas :-), all you have to do is determine whether the distances between any visiting cats are large enough to make for a peaceful afternoon, or whether there is about to be an altercation someone will need to deal with by carrying one of them into the house or squirting them with water or what have you.
As input your function will receive a list of strings representing the yard as a grid, and an integer representing the minimum distance needed to prevent problems (considering the cats' current states of sleepiness). A point with no cat in it will be represented by a "-" dash. Lou, Mustache Cat, and Raoul will be represented by an upper case L, M, and R respectively. At any particular time all three cats may be in the yard, or maybe two, one, or even none.
If the number of cats in the yard is one or none, or if the distances between all cats are at least the minimum distance, your function should return True/true/TRUE (depending on what language you're using), but if there are two or three cats, and the distance between at least two of them is smaller than the minimum distance, your function should return False/false/FALSE.
Some examples
(The yard will be larger in the random test cases, but a smaller yard is easier to see and fit into the instructions here.)
In this first example, there is only one cat, so your function should return True.
["------------",
 "------------",
 "-L----------",
 "------------",
 "------------",
 "------------"], 10
In this second example, Mustache Cat is at the point yard[1][3] and Raoul is at the point yard[4][7] -- a distance of 5, so because the distance between these two points is smaller than the specified minimum distance of 6, there will be trouble, and your function should return False.

["------------",
 "---M--------",
 "------------",
 "------------",
 "-------R----",
 "------------"], 6
In this third example, Lou is at yard[0][11], Raoul is at yard[1][2], and Mustache Cat at yard[5][2]. The distance between Lou and Raoul is 9.05538513814, the distance between Raoul and Mustache Cat is 4, and the distance between Mustache Cat and Lou is 10.295630141 -- all greater than or equal to the specified minimum distance of 4, so the three cats will nap peacefully, and your function should return True.

["-----------L",
 "--R---------",
 "------------",
 "------------",
 "------------",
 "--M---------"], 4
*/

function peacefulYard(yard, minDistance) {
  var catlocations = [];

  for (let x = 0; x < yard.length; x++) {
    for (let y = 0; y < yard[x].length; y++) {
      if (yard[x][y] != '-') {
        catlocations.push([x,y]);
      }
    }
  }

  if (catlocations.length < 2) {
    return true;
  }

  if (catlocations.length === 2) {
    var x = Math.abs(catlocations[1][0] - catlocations[0][0]);
    var y = Math.abs(catlocations[1][1] - catlocations[0][1]);
    var distance = Math.sqrt((x * x) + (y * y));

    return distance >= minDistance;
  }

  if (catlocations.length === 3) {

    var xFirst = Math.abs(catlocations[1][0] - catlocations[0][0]);
    var yFirst = Math.abs(catlocations[1][1] - catlocations[0][1]);
    var distance1 = Math.sqrt((xFirst * xFirst) + (yFirst * yFirst));

    var xSecond = catlocations[2][0] - catlocations[1][0];
    var ySecond = catlocations[2][1] - catlocations[1][1];
    var distance2 = Math.sqrt((xSecond * xSecond) + (ySecond * ySecond));

    var xThird = catlocations[2][0] - catlocations[0][0];
    var yThird = catlocations[2][1] - catlocations[0][1];
    var distance3 = Math.sqrt((xThird * xThird) + (yThird * yThird));

    if (distance1 >= minDistance && distance2 >= minDistance && distance3 >= minDistance) {
      return true;
    }
    else {
      return false;
    }
  }
}

// Time Complexity: O(N * M);
// Space Complexity: O(X)

describe('Cat Kata Code Wars', function() {
  describe('with only one cat', function() {
    it('should return true', done => {
      expect(peacefulYard(["------------", "------------", "------------", "------------", "------------", "------------"], 10)).to.equal(true);
      done();
    })
  })

  describe('with only one cat', function() {
    it('should return true', done => {
      expect(peacefulYard(["------------", "------------", "-L----------", "------------", "------------", "------------"], 10)).to.equal(true);
      done();
    })
  })

  describe('2 cats within fighting distance', function() {
    it('should return false', done => {
      expect(peacefulYard(["------------", "---M--------", "------------", "------------", "-------R----", "------------"], 6)).to.equal(false);
      done();
    })
  })

  describe('3 cats on peaceful terms', function() {
    it('should return true', done => {
      expect(peacefulYard(["-----------L", "--R---------", "------------", "------------", "------------", "--M---------"], 4)).to.equal(true);
      done();
    })
  })
})
