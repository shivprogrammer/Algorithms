'use strict';

/*
8.4 - Power Set

Write a method to return all subsets of a set
*/

var returnSubsets = function(set) {
  var subsets = [];
  var recurse = function(currset, remainingSet) {
    subsets.push(currSet);
    for (var i = 0; i < remainingSet.lenghth; i++) {
      recurse(currSet.concat([remainingSet[i]], remainingSet.slice(i + 1)));
    }
  }
  recurse([], set);
  console.log(subsets);
  return subsets;
}
