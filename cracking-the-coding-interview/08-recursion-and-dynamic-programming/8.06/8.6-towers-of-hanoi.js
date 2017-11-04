'use strict';

const expect = require('chai').expect;

/*
8.6 - Towers of Hanoi

In the classic problem of the towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one). You have the following constraints:

(1) Only one disk can be moved at a time.
(2) A disk is slid off the top of one tower onto aother tower.
(3) A disk cannot be placed on top of a smaller disk.

Write a program to move the disks from the first tower to the last using stacks.
*/

var TowersOfHanoi = function(n) {
  this.first = [];
  this.second = [];
  this.third = [];
  for (var i = n; i >= 1; i--) {
    this.first.push(i);
  }
}

TowersOfHanoi.prototype.move = function(start, mid, dest, depth) {
  if (depth === 0) {
    return;
  }
  else if (depth === 1) {
    dest.push(start.pop());
  }
  else {
    var currDepth = depth;
    var shortTower;
    var placePiece;
    if (depth % 2 === 0) {
      shortTower = mid;
      placePiece = dest;
    }
    else {
      shortTower = dest;
      placePiece = mid;
    }
    var shortTowerDepth = 0;
    shortTower.push(start.pop());
    shortTowerDepth++;
    currDepth--;
    var towerSwap1;
    var towerSwap2;
    while (currDepth > 0) {
      placePiece.push(start.pop());
      currDepth--;
      this.move(shortTower, start, placePiece, shortTowerDepth);
      shortTowerDepth++;
      towerSwap1 = shortTower;
      towerSwap2 = placePiece;
      shortTower = towerSwap2;
      placePiece = towerSwap1;
    }
  }
}

describe('8.6 - Towers of Hanoi | Cracking the Coding Interview | Chapter 8 - Recursion & Dynamic Programming', function() {
  describe('tower1 | BEFORE THE MOVE', function() {
    var tower1 = new TowersOfHanoi(5);
    it('should return tower1.first === [5, 4, 3, 2, 1], tower1.second && tower1.third === []', done => {
      expect(tower1.first).to.deep.equal([5, 4, 3, 2, 1]);
      expect(tower1.second).to.deep.equal([]);
      expect(tower1.third).to.deep.equal([]);
      done();
    })
  })

  describe('tower1 AFTER THE MOVE', function() {
    var tower1 = new TowersOfHanoi(5);
    tower1.move(tower1.first, tower1.second, tower1.third, tower1.first.length);
    it('should return tower1.first && tower1.second === [], tower1.third === [5, 4, 3, 2, 1]', done => {
      expect(tower1.first).to.deep.equal([]);
      expect(tower1.second).to.deep.equal([]);
      expect(tower1.third).to.deep.equal([5, 4, 3, 2, 1]);
      done();
    })
  })

  describe('tower1 | BEFORE THE MOVE', function() {
    var tower2 = new TowersOfHanoi(6);
    it('should return tower2.first === [6, 5, 4, 3, 2, 1], tower2.second && tower2.third === []', done => {
      expect(tower2.first).to.deep.equal([6, 5, 4, 3, 2, 1]);
      expect(tower2.second).to.deep.equal([]);
      expect(tower2.third).to.deep.equal([]);
      done();
    })
  })

  describe('tower2 AFTER THE MOVE', function() {
    var tower2 = new TowersOfHanoi(6);
    tower2.move(tower2.first, tower2.second, tower2.third, tower2.first.length);
    it('should return tower2.first && tower2.second === [], tower2.third === [6, 5, 4, 3, 2, 1]', done => {
      expect(tower2.first).to.deep.equal([]);
      expect(tower2.second).to.deep.equal([]);
      expect(tower2.third).to.deep.equal([6, 5, 4, 3, 2, 1]);
      done();
    })
  })
})
