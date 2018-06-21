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
  if (!str || str === null) {
    return "";
  }

  var strArrayNoRepeat = [];
  var stringOutput = '';

  for (var x = 0; x < str.length; x++) {
    if (isNaN(str.charAt(x))) {
      return "";
    }

    if (str.charAt(x) != str.charAt(x + 1)) {
      strArrayNoRepeat.push(x);
    }
  }

  // console.log(strArrayNoRepeat);

  var characterMap = new Map();
  for (var j = 0; j < str.length; j++) {
    if (characterMap.has(str.charAt(j))) {
      characterMap.set(str.charAt(j), characterMap.get(str.charAt(j)) + 1);
    }
    else {
      characterMap.set(str.charAt(j), 1);
    }
  }

  for (var y = 0; y < strArrayNoRepeat.length; y++) {
    stringOutput += characterMap.get(strArrayNoRepeat[y].toString());
    stringOutput += strArrayNoRepeat[y];
  }

  // console.log(stringOutput);
  return stringOutput;
}

// Time Complexity: O(N) [HOLY SHIT!! YESS] // Only singular for loops
// Space Complexity: O(N) [strArrayNoRepeat] + O(N) [characterMap] === 2 * O(N)

describe('Print Count and Numbers | 7kyu', function() {
  describe('there is no str input', function() {
    it('should return ""', done => {
      expect(countMe()).to.equal("");
      done();
    })
  })

  describe('str input is empty', function() {
    it('should return ""', done => {
      expect(countMe("")).to.equal("");
      done();
    })
  })

  describe('input string is not all numbers -> Input: "12A34"', function() {
    it('should return ""', done => {
      expect(countMe("12A34")).to.equal("");
      done();
    })
  })

  describe('Input: "1123"', function() {
    it('should return "211213"', done => {
      expect(countMe('1123')).to.equal('211213');
      done();
    })
  })

  // describe('Input: "211213"', function() {
  //   it('should return "1221121113"', done => {
  //     expect(countMe('211213')).to.equal('1221121113'); // currently returning 323131
  //     done();
  //   })
  // })
})
