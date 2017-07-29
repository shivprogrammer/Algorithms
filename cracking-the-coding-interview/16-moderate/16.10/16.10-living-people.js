'use strict';

/*
16.10 -- Living People

Given a list of people with their birth and death years, implement a method to compute the year with the mosst number of people alive. You may assume that all people were born between 1900 and 2000 (inclusive). If a person was alive during any portion of that year, they should be included in that year's count. For example, Person (birth = 1908, death = 1909) is included in hte counts for both 1908 and 1909.
*/

function living(people) {

}

function Person(born, die) {
  this.birth = born;
  this.death = die;
}

var person1 = new Person(1900, 2000);
var person2 = new Person(1990, 2000);
var person3 = new Person(1999, 2000);

describe('16.10 -- Living People | Cracking the Coding Interview | Chapter 16 -- Moderate', function() {
  describe('Input: [person1, person2, person3]', function() {
    it('should return 1999', done => {
      expect(living(person1, person2, person3)).to.equal(1999);
      done();
    })
  })
})
