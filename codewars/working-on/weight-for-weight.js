'use strict';

const expect = require('chai').expect;

/*
Weight for Weight

5 kyu

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.
*/

function orderWeight(string) {

  if (!string || string === '') {
    return '';
  }

  var array = string.split(' ').map(Number);
  var result = [];
  var output = '';


  for (let i = 0; i < array.length; i++) {
    var weight = 0;
    // console.log(array[i], array[i].toString().length)

    for(let x = 0; x < array[i].toString().length; x++) {
      // console.log(parseInt(array[i].toString().charAt(x)))
      weight += parseInt(array[i].toString().charAt(x))
      // console.log(weight)
    }
    result.push([weight, parseInt(array[i])])
    console.log(result)
  }

  var sorted = result.sort(weightSort);

  for (var z = 0; z < sorted.length; z++) {
    if (z === 0) {
      output += sorted[z][1];
      console.log(output)
    } else {
      output += ' ' + sorted[z][1];
      console.log(output)
    }
  }
  console.log(output)
  return output;
}

/*
FUCK THIS WAS A MOTHERFUCKER. But I got it ;)
Time Complexity - Map: O(N), results for loop: O(N), weightSort: O(N * log(N)), making outputString O(N/(avg word length))
Time Complexity: O(N) + O(N) + O(N * log(N)) + O(N/(avg word length))
FINAL TIME COMPLEXITYY: O(N * log(N)) // DAYMNNNN THAT'S PRETTY GOOOOOOD
Space Complexity - Array: O(N) + Result O(N) + Output: O(1)
FINAL SPACE COMPLEXITY: O(2N + 1) => O(N)
*/

function weightSort(a, b) {
  if (a[0] === b[0]) {
    return (a[1].toString() < b[1].toString()) ? -1 : 1;
  }
  else {
    return (a[0] < b[0]) ? -1 : 1;
  }
}

describe('Weight for weights problem from code wars', function() {
  describe('Input: none', function() {
    it ('Expected: empty string', done => {
      expect(orderWeight()).to.equal('');
      done();
    })
  })

  describe('Input: empty string', function() {
    it ('Expected: empty string', done => {
      expect(orderWeight('')).to.equal('');
      done();
    })
  })

  describe('Input: 103 123 4444 99 2000', function() {
    it ('Expected: 2000 103 123 4444 99', done => {
      expect(orderWeight('103 123 4444 99 2000')).to.equal('2000 103 123 4444 99');
      done();
    })
  })

  describe('Input: 2000 10003 1234000 44444444 9999 11 11 22 123', function() {
    it ('Expected: 11 11 2000 10003 22 123 1234000 44444444 9999', done => {
      expect(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')).to.equal('11 11 2000 10003 22 123 1234000 44444444 9999');
      done();
    })
  })
})
