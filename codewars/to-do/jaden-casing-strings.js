'use strict';

const expect = require('chai').expect;

/*
Jaden Casing Strings

7kyu

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
}

Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

describe('Jaden Casing Strings | Code Wars | 7kyu', function() {
  describe('with input How can mirrors be real if our eyes aren\'t real', function() {
    it('should return How Can Mirrors Be Real If Our Eyes Aren\'t Real', done => {
      expect('How can mirrors be real if our eyes aren\'t real'.toJadenCase()).to.equal('How Can Mirrors Be Real If Our Eyes Aren\'t Real');
      done();
    })
  })
})
