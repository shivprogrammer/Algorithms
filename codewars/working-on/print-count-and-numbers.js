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
  var strArray = [];
  var strArrayNoRepeat = [];

  for (var i = 0; i < str.length; i++) {
    strArray.push(str.charAt(i));

    if (i === 0) {
      strArrayNoRepeat.push()
    }
  }

  console.log(strArray);

  var characterMap = new Map();

  for (var j = 0; j < strArray.length; j++) {
    if (characterMap.has(strArray[i])) {
      characterMap.set(strArray[i], characterMap.get(strArray[i]) + 1);
    }
    else {
      characterMap.set(strArray[i], 1);
    }
  }

  for ()

  // var output = '';
  // var splitString = str.split(' ');

  // console.log(splitString);
}

describe('Print Count and Numbers | 7kyu', function() {
  describe('Input: "1123"', function() {
    it('should return "211213"', done => {
      expect(countMe('1123')).to.equal('211213');   // currently returning 51
      done();
    })
  })

  describe('Input: "211213"', function() {
    it('should return "1221121113"', done => {
      expect(countMe('211213')).to.equal('1221121113'); // currently returning 323131
      done();
    })
  })
})

///// PREVIOUS SOLUTION
// function countMe(str) {
//   var temp = '';
//   var count = 0;
//   var output = '';
//
//   for (let i = 0; i < str.length; i++) {
//     count++;
//     if (!temp) {
//       temp = str.charAt(i);
//     }
//     if (temp === str.charAt(i)) {
//       count++;
//     }
//     else {
//       output += count;
//       output += temp;
//       count = 0;
//       temp = '';
//     }
//   }
//   console.log(output);
//   return output;
// }
