'use strict';

const expect = require('chai').expect;

/*
Given a string and 3 ints, return the new string that you receive for the airport transition ticket
*/

var tickets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

function airport(str, a, b, c) {
  var alphabetMap = new Map();
  alphabetMap.set('A', 0);
  alphabetMap.set('B', 1);
  alphabetMap.set('C', 2);
  alphabetMap.set('D', 3);
  alphabetMap.set('E', 4);
  alphabetMap.set('F', 5);
  alphabetMap.set('G', 6);
  alphabetMap.set('H', 7);
  alphabetMap.set('I', 8);
  alphabetMap.set('J', 9);
  alphabetMap.set('K', 10);
  alphabetMap.set('L', 11);
  alphabetMap.set('M', 12);
  alphabetMap.set('N', 13);
  alphabetMap.set('O', 14);
  alphabetMap.set('P', 15);
  alphabetMap.set('Q', 16);
  alphabetMap.set('R', 17);
  alphabetMap.set('S', 18);
  alphabetMap.set('T', 19);
  alphabetMap.set('U', 20);
  alphabetMap.set('V', 21);
  alphabetMap.set('W', 22);
  alphabetMap.set('X', 23);
  alphabetMap.set('Y', 24);
  alphabetMap.set('Z', 25);
  alphabetMap.set('1', 26);
  alphabetMap.set('2', 27);
  alphabetMap.set('3', 28);
  alphabetMap.set('4', 29);
  alphabetMap.set('5', 30);
  alphabetMap.set('6', 31);
  alphabetMap.set('7', 32);
  alphabetMap.set('8', 33);
  alphabetMap.set('9', 34);
  alphabetMap.set('0', 35);

  var letterIndex = [alphabetMap.get(str.charAt(0)), alphabetMap.get(str.charAt(1)), alphabetMap.get(str.charAt(2))];

  for (let i = 0; i < letterIndex.length; i++) {
    letterIndex[i] += a;
  }

  for (let j = 1; j < letterIndex.length; j++) {
    letterIndex[j] += b;
  }

  letterIndex[2] += c;

  var output = tickets.charAt(letterIndex[0]) + tickets.charAt(letterIndex[1]) + tickets.charAt(letterIndex[2]);

  return output;
}

describe('Airport problem', function() {
  describe('Input: AAA, 1, 1, 1', function() {
    it('should return BCD', done => {
      expect(airport('AAA', 1, 1, 1)).to.equal('BCD');
      done();
    })
  })

  describe('Input: ABC, 1, 5, 10', function() {
    it('should return BHS', done => {
      expect(airport('ABC', 1, 5, 10)).to.equal('BHS');
      done();
    })
  })
})
