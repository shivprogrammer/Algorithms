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
  return false;
}

describe('Merged String Checker | Code Wars | 5kyu', function() {
  describe('with input s = codewars, part1 = code, part2 = wars', function() {
    it('should return true', done => {
      expect(isMerge('codewars', 'code', 'wars')).to.equal(true);
      done();
    })
  })

  describe('with input s = codewars, part1 = cdw, part2 = oears', function() {
    it('should return true', done => {
      expect(isMerge('codewars', 'cdw', 'oears')).to.equal(true);
      done();
    })
  })

  describe('with input s = codewars, part1 = cod, part2 = wars', function() {
    it('should return false', done => {
      expect(isMerge('codewars', 'cod', 'wars')).to.equal(true);
      done();
    })
  })
})