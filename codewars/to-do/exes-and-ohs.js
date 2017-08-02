'use strict';

const expect = require('chai').expect

/*
Exes and Ohs

7 kyu

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  var x = 0;
  var o = 0;

  for(let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      x++;
    }
    if (str[i].toLowerCase() === 'o') {
      o++;
    }
  }

  if (x === o) {
    return true;
  }
  else {
    return false;
  }
}

/*
Solved this actually lightening fast. Was pretty easy really this isn't a difficult problem.
Time Complexity: O(N)
Space Complexity = O(1) // ** WAS O(N) but I made a quick modification so I'm not storing another full string, but still getting the accurate comparison that I need.
*/

describe('Exes and Ohs Question from Code Wars', function() {
  describe('Input: xo', function() {
    it('Expected: true', done => {
      expect(XO('xo')).to.equal(true);
      done();
    })
  })

  describe('Input: xxOo', function() {
    it('Expected: true', done => {
      expect(XO('xxOo')).to.equal(true);
      done();
    })
  })

  describe('Input: xxxm', function() {
    it('Expected: false', done => {
      expect(XO('xxxm')).to.equal(false);
      done();
    })
  })

  describe('Input: Oo', function() {
    it('Expected: false', done => {
      expect(XO('Oo')).to.equal(false);
      done();
    })
  })

  describe('Input: ooom', function() {
    it('Expected: false', done => {
      expect(XO('ooom')).to.equal(false);
      done();
    })
  })
})
