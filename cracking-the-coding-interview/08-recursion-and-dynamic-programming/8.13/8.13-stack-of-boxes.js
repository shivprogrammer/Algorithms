'use strict';

const expect = require('chai').expect;

/*
8.13 - Stack of Boxes

You have a stack of n boxes, with widths w, heights h, and depths d. The boses cannot be rotated and can only be stacked on top of one another if each box in the stack is strictly larger than the box above it in width, height, and depth. Implement a method to compute the height of the tallest possible stack. The height of the stack is the sum of the heights of each box.
*/


var dp = {};

var findStackables = (boxes, basebox) => {
  var stackables = [];
  // for each box, check all other boxes for which it is dominant
  boxes.forEach((box) => {
    if (box.height < basebox.height && box.width < basebox.width && box.depth < basebox.depth) {
      stackables.push(box);
    }
  });
  return stackables;
};

var stackBoxes = function(boxes) {
  if (boxes === undefined) {
    return 'where are your boxes?';
  }

  if (boxes.length === 0) {
    return 0;
  }
  boxes.sort();
  var key = JSON.stringify(boxes);
  if (dp[key] === undefined) {
    var height = 0;
    /* find max height of stack by doing the following:
        -for each box
        -find stackables from the remaining box stack
        -add height of box plus a recursive call to stackables
        -if height is larger than the max height so far, set it as max height
    */
    boxes.forEach((box) => {
      var stackables = findStackables(boxes, box);
      var currHeight = box.height + stackBoxes(stackables);
      height = Math.max(currHeight, height);
    });
    dp[key] = height;
  }
  return dp[key];
};

// function Box(width, height, depth) {
//   this.width = width;
//   this.height = height;
//   this.depth = depth;
// }
//
// var box1 = new Box(1, 1, 1);
// var box2 = new Box(2, 2, 2);
// var box3 = new Box(3, 3, 3);

const box1d = {
  width: 1,
  height: 1,
  depth: 1
};
const box2d = {
  width: 2,
  height: 2,
  depth: 2
};
const box3d = {
  width: 3,
  height: 3,
  depth: 3
};

describe('8.13 - Stack of Boxes | Cracking the Coding Interview | Chapter 8 - Recursion & Dynamic Programming', function() {
  describe('Input: box1, box2, box3', function() {
    it('should return a total height of 6', done => {
      expect(stackBoxes(box1d, box2d, box3d)).to.equal(6);
    })
  })
})
