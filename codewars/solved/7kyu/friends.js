'use strict';

const expect = require('chai').expect

/*
Friends

7 kyu

Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/

function friend(friends) {
  var result = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      result.push(friends[i]);
    }
  }
  return result;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

describe('Friends Problem From Code Wars', function() {
  describe('Input: ["Ryan", "Kieran", "Mark"]', function() {
    it('Expected: ["Ryan", "Mark"]', done => {
      expect(friend(["Ryan", "Kieran", "Mark"])).to.deep.equal(["Ryan", "Mark"]);
      done();
    })
  })

  describe('Input: ["Ryan", "Jimmy", "123", "4", "Cool Man"]', function() {
    it('Expected: ["Ryan"]', done => {
      expect(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])).to.deep.equal(["Ryan"]);
      done();
    })
  })

  describe('Input: ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]', function() {
    it('Expected: ["Jimm", "Cari", "aret"]', done => {
      expect(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])).to.deep.equal(["Jimm", "Cari", "aret"]);
      done();
    })
  })

  describe('Input: ["Love", "Your", "Face", "1"]', function() {
    it('Expected: ["Love", "Your", "Face"]', done => {
      expect(friend(["Love", "Your", "Face", "1"])).to.deep.equal(["Love", "Your", "Face"]);
      done();
    })
  })
})
