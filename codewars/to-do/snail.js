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

function snail(matrix) {
  var output = [];
  var completedMatrix = [];
  var temp = [];
  var row = matrix.length;
  var col = matrix[0].length;

  for (let a = 0; a < matrix.length; a++) {
    for (let b = 0; b < matrix[0].length; b++) {
      temp.push('');
    }
    completedMatrix.push(temp);
    temp = [];
  }

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      completedMatrix[x][y] = true;
      output.push(matrix[x][y]);
    }
    row--;
  }

  console.log(completedMatrix);
  console.log(output);
}

var matrix1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

var matrix2 = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
];

describe('Snail | Code Wars | 4kyu', function() {
  describe('Input: matrix1', function() {
    it('should return [1,2,3,6,9,8,7,4,5]', done => {
      expect(snail(matrix1)).to.deep.equal([1,2,3,6,9,8,7,4,5]);
      done();
    })
  })

  describe('Input: matrix2', function() {
    it('should return [1,2,3,4,5,6,7,8,9]', done => {
      expect(snail(matrix2)).to.deep.equal([1,2,3,4,5,6,7,8,9]);
      done();
    })
  })
})

// var width = array.length;
// // console.log(width);
// var height = array[0].length;
// // console.log(height);
// var output = [];
//
// for (let j = 0; j < array[0].length; j++) {
//   output.push(array[0][j]);
//   array[0][j] = '';
// }
//
// for (let i = 0; i < array.length; i++) {
//   output.push(array[i][array[0].length - 1]);
//   array[i][array[0].length - 1] = '';
// }
//
// for (let j = array[array.length - 1].length; j > 0; j--) {
//   output.push(array[array.length - 1][j]);
//   array[array.length - 1][j] = '';
// }
//
// console.log(array);
// return output;
