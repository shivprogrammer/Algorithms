'use strict';

/*
8.7 - Permutation without Dups

Write a method to compute all permutations of a string of unique characters.
*/

var permuteString = function(string) {
  var answers = [];
  var recurse = function(currPerm, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currPerm);
    }
    else {
      for (var i = 0; i < remainingChars.length; i++) {
        recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i + 1));
      }
    }
  }

  recurse('', string);
  return answers;
}
