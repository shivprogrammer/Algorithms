'use strict';

const expect = require('chai').expect;

/*
Two to One

7kyu

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
*/

function longest(s1, s2) {
  var alphabetMap = new Map();
  var output = '';

  for (let i = 0; i < s1.length; i++) {
    if (!alphabetMap.has(s1.charAt(i))) {
      output += s1.charAt(i);
    }
    alphabetMap.set(s1.charAt(i), alphabetMap.get(s1.charAt(i)) + 1);
  }

  for (let j = 0; j < s2.length; j++) {
    if (!alphabetMap.has(s2.charAt(j))) {
      output += s2.charAt(j)
    }
    alphabetMap.set(s2.charAt(j), alphabetMap.get(s2.charAt(j)) + 1);
  }

  return output.split('').sort().join('');
}

describe('Two to One | 7kyu', function() {
  describe('with inputs "aretheyhere", "yestheyarehere"', function() {
    it('should return "aehrsty"', done => {
      expect(longest('aretheyhere', 'yestheyarehere')).to.equal('aehrsty');
      done();
    })
  })

  describe('with inputs "loopingisfunbutdangerous", "lessdangerousthancoding"', function() {
    it('should return "abcdefghilnoprstu"', done => {
      expect(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).to.equal('abcdefghilnoprstu');
      done();
    })
  })

  describe('with inputs "inmanylanguages", "theresapairoffunctions"', function() {
    it('should return "acefghilmnoprstuy"', done => {
      expect(longest('inmanylanguages', 'theresapairoffunctions')).to.equal('acefghilmnoprstuy');
      done();
    })
  })
})
