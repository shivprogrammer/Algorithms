// ALL TESTS PASSING LOCALLY AND ON CODE WARS, BUT TIMING OUT ON CODE WARS

'use strict';

const expect = require('chai').expect;

/*
Merged String Checker

5kyu

At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 are in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
*/

function isMerge(s, part1, part2) {
  if (!part1.length) {
    return s === part2;
  }

  if (!part2.length) {
    return s === part1;
  }

  while(part1.length > 0 && part2.length > 0) {

    if (s.charAt(0) === part1.charAt(0)) {
      if (part1.length === 1) {
        return s.slice(1, s.length) === part2;
      }
      else {
        s = s.slice(1, s.length);
        part1 = part1.slice(1, part1.length);
        isMerge(s, part1, part2);
      }
    }

    if (s.charAt(0) === part2.charAt(0)) {
      if (part2.length === 1) {
        return s.slice(1, s.length) === part1;
      }
      else {
        s = s.slice(1, s.length);
        part2 = part2.slice(1, part2.length);
        isMerge(s, part1, part2);
      }
    }
  }

  return false;
}

// function isMerge(s, part1, part2) {
//   var p1 = 0;
//   var p2 = 0;
//
//   for (let i = 0; i < s.length; i++) {
//     if (s.charAt(i) === part1.charAt(p1)) {
//       p1++;
//     }
//     if (s.charAt(i) === part2.charAt(p2)) {
//       p2++;
//     }
//   }
//
//   return ((p1 === part1.length - 1) && (p2 === part2.length - 1));
// }

describe('Merged String Checker | Code Wars | 5kyu', function() {
  describe('part1 is an empty string, and s === part2', function() {
    it('return true', done => {
      expect(isMerge('wars', '', 'wars')).to.equal(true);
      done();
    })
  })

  describe('part2 is an empty string, but s != part1', function() {
    it('return false', done => {
      expect(isMerge('code', 'codes', '')).to.equal(false);
      done();
    })
  })

  describe('if s = "codewars", part1 = "code", part2 = "wars"', function() {
    it('return true', done => {
      expect(isMerge('codewars', 'code', 'wars')).to.equal(true);
      done();
    })
  })

  describe('if s = "codewars", part1 = "cdw", part2 = "oears"', function() {
    it('return true', done => {
      expect(isMerge('codewars', 'cdw', 'oears')).to.equal(true);
      done();
    })
  })

  describe('if s = "codewars", part1 = "cod", part2 = "wars"', function() {
    it('return false', done => {
      expect(isMerge('codewars', 'cod', 'wars')).to.equal(false);
      done();
    })
  })
})
