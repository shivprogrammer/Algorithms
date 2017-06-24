'use strict';

/*
Shortest Word

7kyu

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
}

describe('Shorted Word | Code Wars | 7kyu', function() {
  describe('Input: "bitcoin take over the world maybe who knows perhaps"', function() {
    it('should return 3', done => {
      expect(findShort('bitcoin take over the world maybe who knows perhaps')).to.equal(3);
      done();
    })
  })

  describe('Input: "turns out random test cases are easier than writing out basic ones"', function() {
    it('should return 3', done => {
      expect(findShort('turns out random test cases are easier than writing out basic ones')).to.equal(3);
      done();
    })
  })
})
