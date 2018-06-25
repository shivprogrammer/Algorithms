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

// YOOOOOOOOOO you can look at the relationship BETWEEN all of the numbers, for example when moving in the x direction everything is incremented just by one, BUT when moving in the y direction, you are actually the amount of the dimensions in the matrix [when considering a square matrix]
// The previous dimension theory will work, every single motion in the y direction will move in the increment of the dimensions of the matrix [considering square matrices],whereas all of the movement of x direction will only increment by 1;

function snail(matrix) {
  var output = [];
  var xPointer = 0;
  var yPointer = matrix.length;
  // var xAscent = true;
  // var yAscent = false;
  var xTotalMoves = matrix[0].length;
  var yTotalMoves = matrix.length;

  // 1ST LOOP: This loop will make the first horizontal move (x row left -> right)
  for (var x = 0; x < matrix[0].length; x++) {
    output.push(matrix[xPointer][x]);
  }
  xPointer++;
  xTotalMoves--;
  console.log('AFTER 1ST LOOP');
  console.log('xPointer:' +xPointer);
  console.log('yPointer:' + yPointer);
  console.log('xTotalMoves:' + xTotalMoves);
  console.log('yTotalMoves:' + yTotalMoves);
  console.log('-------------------');

  // 2ND LOOP: This loop is the first y traversal, incrementing up in the y values because you're going from matrix[0] to matrix.length
  for (var y = xPointer; y < yTotalMoves; y++) {
    output.push(matrix[y][xTotalMoves]);
  }
  yTotalMoves--;
  yPointer--;
  console.log('AFTER 2ND LOOP');
  console.log('xPointer:' +xPointer);
  console.log('yPointer:' + yPointer);
  console.log('xTotalMoves:' + xTotalMoves);
  console.log('yTotalMoves:' + yTotalMoves);
  console.log('-------------------');

  // 3RD LOOP: This loop goes back to x axis on the last row going right -> left
  for (var i = xTotalMoves - 1; i >= 0; i--) {
    output.push(matrix[xTotalMoves][i]);
  }
  xPointer++;
  xTotalMoves--;
  console.log('AFTER 3RD LOOP');
  console.log('xPointer:' +xPointer);
  console.log('yPointer:' + yPointer);
  console.log('xTotalMoves:' + xTotalMoves);
  console.log('yTotalMoves:' + yTotalMoves);
  console.log('-------------------');

  // 4TH LOOP: The following loop is going to be to move back in the y direction from down -> up
  // for (var j = yTotalMoves; y >= yPointer; y--) {
    output.push(matrix[1][0]);
  // }
  yTotalMoves--;

  // 5TH LOOP: The following loop is to grab the last piece of the 3x3 matrix, the center piece
  // for {
    output.push(matrix[1][1]);
  // }
  xTotalMoves;

  // console.log('-------------------');
  // console.log('output:' +  output);
  return output;
}

/*
NOTE* THIS IS THE LOOP THAT ALL OF THE FOR LOOPS WILL BE WRAPPED WITHIN
while (xTotalMoves >= 1 && yTotalMoves >= 1)
*/

// var matrix2A = [
//   [7, 4],
//   [3, 2]
// ];
//
// var matrix2x3 = [
//   [7, 4],
//   [3, 2],
//   [5, 8]
// ];

var matrix3A = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
// matrix[2][0]
// matrix[1][0]

var matrix3B = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
];

// var matrix4 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];
//
// var matrix4B = [
//   [44, 11, 2, 8],
//   [30, 1, 6, 15],
//   [17, 12, 0, 25],
//   [19, 7, 2, 8]
// ];
//
// var matrix5 = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]
// ];

describe('Snail', function() {
  // describe('Input: matrix2A', function() {
  //   it('should return [7, 4, 2, 3]', done => {
  //     expect(snail(matrix2A)).to.deep.equal([7, 4, 2, 3]);
  //     done();
  //   })
  // })

  // describe('Input: matrix2x3', function() {
  //   it('should return [7, 4, 2, 8, 5, 3]', done => {
  //     expect(snail(matrix2x3)).to.deep.equal([7, 4, 2, 8, 5, 3]);
  //     done();
  //   })
  // })

  describe('Input: matrix3A', function() {
    it('should return [1, 2, 3, 6, 9, 8, 7, 4, 5]', done => {
      expect(snail(matrix3A)).to.deep.equal([1, 2, 3, 6, 9, 8, 7, 4, 5]);
      done();
    })
  })

  // describe('Input: matrix3B', function() {
  //   it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', done => {
  //     expect(snail(matrix3B)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  //     done();
  //   })
  // })

  // describe('Input: matrix4', function() {
  //   it('should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]', done => {
  //     expect(snail(matrix4)).to.deep.equal([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  //     done();
  //   })
  // })
  //
  // describe('Input: matrix4', function() {
  //   it('should return [44, 11, 2, 8, 15, 25, 8, 2, 19, 17, 30, 1, 6, 0, 12]', done => {
  //     expect(snail(matrix4)).to.deep.equal([44, 11, 2, 8, 15, 25, 8, 2, 19, 17, 30, 1, 6, 0, 12]);
  //     done();
  //   })
  // })

  // describe('Input: matrix5', function() {
  //   it('should return [[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]', done => {
  //     expect(snail(matrix5)).to.deep.equal([[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  //     done();
  //   })
  // })
})
