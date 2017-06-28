'use strict';

const expect = require('chai').expect;

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(input) {
  var words = input.split(' ');
  var output = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length < 5) {
      output += words[i] + ' ';
    }
    else {
      output += words[i].split('').reverse().join('') + ' ';
    }
  }

  return output.slice(0, output.length - 1);
}

// Time Complexity: O(N)
// Space Complexity: O(N)

describe('Stop Spinning my Words', function() {
  describe('Input: "Hey fellow warriors"', function() {
    it('should return "Hey wollef sroirraw"', done => {
      expect(spinWords('Hey fellow warriors')).to.equal('Hey wollef sroirraw');
      done();
    })
  })
})
