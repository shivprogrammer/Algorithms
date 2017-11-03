'use strict';

/*
8.6 - Towers of Hanoi

In the classic problem of the towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one). You have the following constraints:

(1) Only one disk can be moved at a time.
(2) A disk is slid off the top of one tower onto aother tower.
(3) A disk cannot be placed on top of a smaller disk.

Write a program to move the disks from the first tower to the last using stacks.
*/

var TowersOfHanoi = function() {
  this.first = [];
  this.second = [];
  this.third = [];
  for (var i = n; i >= 1; i--) {
    this.first.push();
  }
}

TowersOfHanoi.prototype.move = function(start, mid, dest, depth) {
  if (depth === 0) {
    return;
  }
  else if (depth === 1){
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
    
  }
}
