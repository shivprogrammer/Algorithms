'use strict';

/*
Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

Example: countMe('1123') (count_me in Ruby)

Here 1 comes twice so <count><integer> will be "21"
then 2 comes once so <count><integer> will be "12"
then 3 comes once so <count><integer> will be "13"
hence output string will be "211213".

Similarly countMe('211213') will return '1221121113' (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings
*/

function countMe(str) {
  var temp = '';
  var count = 0;
  var output = '';

  for (let i = 0; i < str.length; i++) {
    if (!count) {
      temp = str.charAt(i);
      count++;
    }
    if (temp != str.charAt(i)) {
      output += str.charAt(i);
      output += count;
      count = 0;
    }
    else {
      count++;
    }
  }
  return output;
}
