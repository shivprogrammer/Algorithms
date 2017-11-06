'use strict';

/*
8.13 - Stack of Boxes

You have a stack of n boxes, with widths w, heights h, and depths d. The boses cannot be rotated and can only be stacked on top of one another if each box in the stack is strictly larger than the box above it in width, height, and depth. Implement a method to compute the height of the tallest possible stack. The height of the stack is the sum of the heights of each box.
*/

var dp = {};

var findStackables = (boxes, basebox) => {
  var stackables = [];
  boxes.forEach((box) => {
    if (box.height < basebox.height && box.width < basebox.width && box.depth && basebox.depth) {
      stackables.push(box);
    }
  })
  return stackables;
}

var stackBoxes = function(boxes) {
  if (boxes === undefined) {
    return 'where the boxes at doe?';
  }

  if (boxes.length === 0) {
    return 0;
  }
  boxes.sort();
  var key = JSON.stringify(boxes);
  if (dp[key] === undefined) {
    var height = 0;
    boxes.forEach((box) => {
      var stackables = findStackables(boxes, box);
      var currHeight = box.height + stackBoxes(stackables);
      height = Math.max(currHeight, height);
    })
    dp[key] = height;
  }
  return dp[key];
}
