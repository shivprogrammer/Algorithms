'use strict';

/*
8.4 - Power Set

Write a method to return all subsets of a set
*/

var returnSubsets = function(set) {
  var subsets = [];
  var recurse = function(currSet, remainingSet) {
    subsets.push(currSet);
    for (var i = 0; i < remainingSet.length; i++) {
      recurse(currSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
    }
  }
  recurse([], set);
  return subsets;
}

console.log(returnSubsets([1, 2, 3, 4]));
