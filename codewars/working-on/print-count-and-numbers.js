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

  var count = 1;
  var output = '';

  for (var i = 0; i < str.length; i++) {
    if (isNaN(str.charAt(i))) {
      return "";
    }

    while (str.charAt(i) === str.charAt(i + 1)) {
      count++;
      i++;
    }

    output += count;
    output += str.charAt(i);
    count = 1;
  }

  // console.log(output);
  return output;
}

// Time Complexity: O(N) [the while loop is still progressing the variable i, there are not two concurrent loops]
// Space Complexity: O(1)

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

  describe('Input: "211213"', function() {
    it('should return "1221121113"', done => {
      expect(countMe('211213')).to.equal('1221121113');
      done();
    })
  })
})
