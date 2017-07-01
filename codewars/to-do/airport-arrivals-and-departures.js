'use strict';

/*
Given a string and 3 ints, return the new string that you receive for the airport transition ticket
*/
var tickets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

function airport(str, a, b, c) {
}

describe('Airport problem', function() {
  describe('Input: ABC, 1, 5, 10', function() {
    it('should return BGR', done => {
      expect(airport('ABC', 1, 5, 10)).to.equal('BGR');
      done();
    })
  })

  describe('Input: ABC, 1, 5, 10', function() {
    it('should return BGR', done => {
      expect(airport('ABC', 1, 5, 10)).to.equal('BGR');
      done();
    })
  })
})

B G R
