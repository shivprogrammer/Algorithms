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
