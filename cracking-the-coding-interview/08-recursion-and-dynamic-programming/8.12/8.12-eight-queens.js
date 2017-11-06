'use strict';

/*
8.12 - Eight Queens

Write an algorithm to print all ways of arranging eight queens on a 8x8 chess board so that none of them share the same row, column, or diagonal. In this case, "diagonal" means all diagonas, not just the two that bisect the board.
*/

var changeChar = function(string, position, char) {
  var answer = string.split('');
  answer[position] = char;
  return answer.join('');
}

var bitwiseOp = function(binaryString, n, callback) {
  var base10 = parseInt(binaryString, 2);
  base10 = callback(base10);
  var base2 = base10.toString(2);
  if (base2.length <= n) {
    var front = '';
    for (var i = base2.length; i < n; i++) {
      front += '0';
    }
    return front + base2;
  }
  else {
    return base2.slice(base2.length - n);
  }
}

var leftShift = function(binaryString, n) {
  return bitwiseOp(binaryString, n, (number) => number << 1);
}

vr rightShift = function(binaryString, n) {
  return bitwiseOp(binaryString, n, (number) => number >>> 1);
}
