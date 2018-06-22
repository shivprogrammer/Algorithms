'use strict';

const expect = require('chai').expect;

/*
Snail Sort

4kyu

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

// AYOOOO POSSIBLE SOLUTION: YOU MIGHT BE ABLE TO DO A BOOLEAN TRIGGER FOR WHETHER OR NOT YOU ARE TOWARDS THE BEGINNING VALUES OF THE MATRIX, OR YOU ARE TOWARDS THE FINAL VALUES OF THE MATRIX

function snail(matrix) {
  var output = [];
  var xPointer = 0;
  var yPointer = matrix[0].length - 1; // console.log(yPointer);

  // This loop will make the first horizontal move (x row left -> right)
  for (var x = 0; x < matrix[0].length; x++) {
    output.push(matrix[0][x]); //console.log(output);
  }
  xPointer++;

  // This loop begins the y descent, should capture the value 2
  for (var y = yPointer; y >= 0; y--) {
    output.push(matrix[yPointer][y]) // console.log(output);
  }
  yPointer--;

  // console.log(output);
  return output;
}

var matrix2A = [
  [7, 4],
  [3, 2]
];

var matrix2x3 = [
  [7, 4],
  [3, 2],
  [5, 8]
];

// var matrix3A = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
//
// var matrix3B = [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ];

describe('Snail', function() {
  describe('Input: matrix2A', function() {
    it('should return [7, 4, 2, 3]', done => {
      expect(snail(matrix2A)).to.deep.equal([7, 4, 2, 3]);
      done();
    })
  })

  describe('Input: matrix2x3', function() {
    it('should return [7, 4, 2, 8, 5, 3]', done => {
      expect(snail(matrix2x3)).to.deep.equal([7, 4, 2, 3]);
      done();
    })
  })

  // describe('Input: matrix3A', function() {
  //   it('should return [1,2,3,6,9,8,7,4,5]', done => {
  //     expect(snail(matrix1)).to.deep.equal([1,2,3,6,9,8,7,4,5]);
  //     done();
  //   })
  // })
  //
  // describe('Input: matrix3B', function() {
  //   it('should return [1,2,3,4,5,6,7,8,9]', done => {
  //     expect(snail(matrix2)).to.deep.equal([1,2,3,4,5,6,7,8,9]);
  //     done();
  //   })
  // })
})
