'use strict';

/*
8.8 - Permutations with Duplicates

Write a method to compute all permutations of a string whose characters are not necessairily unique. The list of permutations should not have duplicates.

*/

var permNoDups = function(string) {
  var answers = [];
  var recurse = function(currPerm, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currPerm);
    }
    else {
      var usedChars = {};
      for (var i = 0; i < remainingChars.length; i++) {
        if (!usedChars[remainingChars.charAt(i)]) {
          usedChars[remainingChars.charAt(i)] = true;
          recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i + 1));
        }
      }
    }
  }
  recurse('', string);
  return answers;
}
