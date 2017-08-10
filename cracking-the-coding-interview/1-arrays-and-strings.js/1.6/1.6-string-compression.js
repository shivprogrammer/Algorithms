'use strict';

const expect = require('chai').expect;

/*
1.6 String Compression

Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)
*/

function strCompress(str) {
  var output = '';
  var count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;

    if (i + 1 >= str.length || str.charAt(i) != str.charAt(i + 1)) {
      output += str.charAt(i) + count;
      count = 0;
    }
  }

  return output.length < str.length ? output: str;
}

describe('1.6 String Comrpession | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('Input: "aabcccccaaa"', function() {
    it('should return "a2b1c5a3"', done => {
      expect(strCompress('aabcccccaaa')).to.equal('a2b1c5a3');
      done();
    })
  })
})
