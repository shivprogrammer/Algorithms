'use strict';

const expect = require('chai').expect;

/*
List Filtering

7kyu

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
  var output = [];

  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      output.push(l[i]);
    }
  }

  return output;
}

describe('List Filtering | 7kyu', function() {
  describe('Input: [1,2,"a","b"]', function() {
    it('Expected Output: [1,2]', done => {
      expect(filter_list([1,2,'a','b'])).to.deep.equal([1,2]);
      done();
    })
  })

  describe('Input: [1,"a","b",0,15]', function() {
    it('Expected Output: [1,0,15]', done => {
      expect(filter_list([1,'a','b',0,15])).to.deep.equal([1,0,15]);
      done();
    })
  })

  describe('Input: [1,2,"aasf","1","123",123]', function() {
    it('Expected Output: [1,2,123]', done => {
      expect(filter_list([1,2,'aasf','1','123',123])).to.deep.equal([1,2,123]);
      done();
    })
  })
})
