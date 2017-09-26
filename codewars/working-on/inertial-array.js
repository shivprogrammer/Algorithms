'use strict';

const expect = require('chai').expect;

/*
Inertial Array

7kyu

An array is defined to be inertialif the following conditions hold:

a. it contains at least one odd value
b. the maximum value in the array is even
c. every odd value is greater than every even value that is not the maximum value.
eg:-

So [11, 4, 20, 9, 2, 8] is inertial because
a. it contains at least one odd value [11,9]
b. the maximum value in the array is 20 which is even
c. the two odd values (11 and 9) are greater than all the even values that are not equal to 20 (the maximum), i.e., [4, 2, 8]
Write a function called isInertial that accepts an integer array and returns true if the array is inertial; otherwise it returns false.
*/

function isInertial(input) {
  var maxInt = -Infinity;
  var evens = [];
  var odds = [];
  var oddsBiggerThanEvens = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > maxInt) {
      maxInt = input[i];
    }
    if (input[i] % 2 != 0) {
      odds.push(input[i])
    }
    if (input[i] % 2 === 0) {
      evens.push(input[i]);
    }
  }

  if (odds.length < 1 || maxInt % 2 != 0) {
    return false;
  }

  for (let j = 0; j < evens.length; j++) {
    if (evens[j] === maxInt) {
      evens.splice(j, 1);
    }
  }

  for (let x = 0; x < odds.length; x++) {
    for (let y = 0; y < evens.length; y++) {
      if (odds[x] < evens[y]) {
        return false;
      }
    }
  }

  return true;
}

// Time Complexity: O(N squared) [for the evens and odds nested for loops]
// Space Complexity: O(X) [evens] + O(Y) [odds]

describe('Inertial Array | Code Wars = 7kyu', function() {
  describe('Input: [11, 4, 20, 9, 2, 8]', function() {
    it('should return true', done => {
      expect(isInertial([11, 4, 20, 9, 2, 8])).to.equal(true);
      done();
    })
  })
})
