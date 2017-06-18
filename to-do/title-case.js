'use strict';

const expect = require('chai').expect

/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
  var result = '';
  var output = '';

  if (!title) {
    return output;
  }

  var titleArray = title.split(' ');

  for (let i = 0; i < titleArray.length; i++) {
    for (let j = 0; j < titleArray[i].length; j++) {
      if (j === 0) {
        result += ' ' + titleArray[i][j].toUpperCase();
      }
      else {
        result += titleArray[i][j].toLowerCase();
      }
    }
  }

  if (!minorWords) {
    return result;
  }

  var minorWordsArray = minorWords.split(' ');
  result = result.split(' ');

  for (let x = 1; x < result.length; x++) {
    for (let y = 0; y < minorWordsArray.length; y++) {
      if (x != 1 && result[x].toLowerCase() === minorWordsArray[y].toLowerCase()) {
        output += result[x].toLowerCase() + ' ';
        break;
      }
      else {
        output += result[x] + ' ';
        break;
      }
    }
  }

  return output;
}

describe('Title Case | Code Wars', function() {
  describe('Input: Empty String', function() {
    it('Expected: Empty String', done => {
      expect(titleCase('')).to.equal('');
      done();
    })
  })

  describe('Input: a clash of KINGS, a an the of', function() {
    it('Expected: A Clash of Kings', done => {
      expect(titleCase('a clash of KINGS', 'a an the of')).to.equal('A Clash of Kings');
      done();
    })
  })

  describe('Input: THE WIND IN THE WILLOWS, The In', function() {
    it('Expected: The Wind in the Willows', done => {
      expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).to.equal('The Wind in the Willows');
      done();
    })
  })

  describe('Input: the quick brown fox', function() {
    it('Expected: The Quick Brown Fox', done => {
      expect(titleCase('the quick brown fox')).to.equal('The Quick Brown Fox');
      done();
    })
  })
})
