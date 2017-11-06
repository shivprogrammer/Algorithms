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
