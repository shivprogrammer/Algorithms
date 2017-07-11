'use strict';

const expect = require('chai').expect

/*
Title Case

4kyu

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
  var output = '';
  var lowerTitle = '';
  var lowerMinor = '';

  if (!title) {
    return output;
  }

  for (let x = 0; x < title.length; x++) {
    lowerTitle += title.charAt(x).toLowerCase();
  }

  if (!minorWords) {
    for (let z = 0; z < title.length; z++) {
      if (z === 0) {
        output += title.charAt(0).toUpperCase();
      }
      else if (title.charAt(z - 1) === ' ') {
          output += title.charAt(z).toUpperCase();
        }
      else {
        output += title.charAt(z).toLowerCase();
      }
    }

    return output;
  }

  for (let y = 0; y < minorWords.length; y++) {
    lowerMinor += minorWords.charAt(y).toLowerCase();
  }

  var titleArray = lowerTitle.split(' ');
  var minorWordsArray = lowerMinor.split(' ');

  for (let i = 0; i < titleArray.length; i++) {
    if (i === 0) {
      output += titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1, titleArray[i].length);
      titleArray[0] = '';
    }

    for (let j = 0; j < minorWordsArray.length; j++) {
      if (titleArray[i] === minorWordsArray[j]) {
        console.log('do we hit this condition')
        output += titleArray[i].toLowerCase();
        titleArray[i] = '';
      }
    }
    output += titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1, titleArray[i].length) + ' ';
    titleArray[i] = '';
  }

  return output.slice(0, output.length - 1);
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
