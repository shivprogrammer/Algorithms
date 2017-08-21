'use strict';

const expect = require('chai').expect;

/*
Mumbling

7 kyu

This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  var output = '';

  for(let i = 0; i < s.length; i++) {
    let acc = i;
    output += s[i].toUpperCase();

    while (acc > 0) {
      output += s[i].toLowerCase();
      acc--;
    }

    output += '-';
  }

  return output.substring(0, output.length - 1);
}

// Time Complexity: O(N)
// Space Complexity: O(1)

describe('Mumbling function from code wars', function() {
  describe('with input of ZpglnRxqenU', function() {
    it('return Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu', done => {
      expect(accum('ZpglnRxqenU')).to.equal('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
      done();
    })
  })

  describe('with input of NyffsGeyylB', function() {
    it('return Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu', done => {
      expect(accum('NyffsGeyylB')).to.equal('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
      done();
    })
  })
})
