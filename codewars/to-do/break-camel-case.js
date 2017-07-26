'use strict';

const expect = require('chai').expect;

/*
Break Camel Case

5kyu

Complete the solution so that the function will break up camel casing, using a space between words.

Example

solution('camelCasing') // => should return 'camel Casing'
*/

function solution(string) {
  var result = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      result.push(string[i]);
    }
    else {
      result.push(' ' + string[i]);
    }
  }

  return result.join('').toString();
}

describe('Break Camel Case Code Wars', function() {
  describe('if input is camelCase', function() {
    it('output to be camel Case', done => {
      expect(solution('camelCase')).to.equal('camel Case');
      done();
    })
  })
})
