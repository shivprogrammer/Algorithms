'use strict';

/*
1.6 String Compression

Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)
*/

function strCompress(str) {
  
}

describe('1.6 String Comrpession | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('Input: "aabcccccaaa"', function() {
    it('should return "a2b1c5a3"', done => {
      expect(strCompress('aabcccccaaa')).to.equal('a2b1c5a3');
      done();
    })
  })
})
