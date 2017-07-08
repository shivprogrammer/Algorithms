'use strict';

const expect = require('chai').expect;

/*
Who Likes It?

6kyu

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
*/

function likes(names) {
  var extras = names.length - 2;
  
  if (names.length === 0) {
    return 'no one likes this';
  }

  if (names.length === 1) {
    return names[0] + ' likes this';
  }

  if (names.length === 2) {
    return names[0] + ' and ' + names[1] + ' like this';
  }

  if (names.length === 3) {
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  }

  if (names.length >= 4) {
    return names[0] + ', ' + names[1] + ' and ' + extras + ' others like this';
  }
}

describe('Who Likes It? | 6kyu', function() {
  describe('Input: []', function() {
    it('should return: "no one likes this"', done => {
      expect(likes([])).to.equal('no one likes this');
      done();
    })
  })

  describe('Input: ["Peter"]', function() {
    it('should return: "Peter likes this"', done => {
      expect(likes(['Peter'])).to.equal('Peter likes this');
      done();
    })
  })

  describe('Input: ["Jacob", "Alex"]', function() {
    it('should return: "Jacob and Alex like this"', done => {
      expect(likes(['Jacob', 'Alex'])).to.equal('Jacob and Alex like this');
      done();
    })
  })

  describe('Input: ["Max", "John", "Mark"]', function() {
    it('should return: "Max, John and Mark like this"', done => {
      expect(likes(['Max', 'John', 'Mark'])).to.equal('Max, John and Mark like this');
      done();
    })
  })

  describe('Input: ["Alex", "Jacob", "Mark", "Max"]', function() {
    it('should return: "Alex, Jacob and 2 others like this"', done => {
      expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).to.equal('Alex, Jacob and 2 others like this');
      done();
    })
  })
})
