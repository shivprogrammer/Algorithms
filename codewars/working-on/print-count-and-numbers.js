'use strict';

const expect = require('chai').expect;

/*
Print Count and Numbers

7kyu

Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

Example: countMe('1123')

Here 1 comes twice so <count><integer> will be "21"
then 2 comes once so <count><integer> will be "12"
then 3 comes once so <count><integer> will be "13"
hence output string will be "211213".

Similarly countMe('211213') will return '1221121113' (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings
*/

function countMe(str) {
  if (!str) {
    return "";
  }

  var strArray = [];
  var strArrayNoRepeat = [];
  var output = [];
  var stringOutput = '';

  for (var i = 0; i < str.length; i++) {
    strArray.push(str.charAt(i));
  }

  console.log(strArray);

  for (var x = 0; x < strArray.length; x++) {
    if (strArray[x] != strArray[x + 1]) {
      strArrayNoRepeat.push(x);
    }
  }

  console.log(strArrayNoRepeat);

  var characterMap = new Map();
  for (var j = 0; j < strArray.length; j++) {
    if (characterMap.has(strArray[j])) {
      characterMap.set(strArray[j], characterMap.get(strArray[j]) + 1);
    }
    else {
      characterMap.set(strArray[j], 1);
    }
  }

  console.log(characterMap.get('1'));

  for (var y = 0; y < strArrayNoRepeat.length; y++) {
    output.push(characterMap.get(strArrayNoRepeat[y].toString()));
    output.push(strArrayNoRepeat[y]);
  }

  console.log(output);

  for (var z = 0; z < output.length; z++) {
    stringOutput += output[z].toString();
  }

  return stringOutput;
}

// Time Complexity: O(N) [HOLY SHIT!! YESS] // There's a lot of for loops, but there are only singular for loops, there is never a double for loop
// Space Complexity: O(N) [strArray] + O(N) [strArrayNoRepeat] + O(N) [output] + O(N) [characterMap] === 4 * O(N) [Horrible Time Complexity though]

describe('Print Count and Numbers | 7kyu', function() {
  describe('Input: "1123"', function() {
    it('should return "211213"', done => {
      expect(countMe('1123')).to.equal('211213');
      done();
    })
  })
})

  describe('Input: "211213"', function() {
    it('should return "1221121113"', done => {
      expect(countMe('211213')).to.equal('1221121113'); // currently returning 323131
      done();
    })
  })
})
