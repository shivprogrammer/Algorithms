'use strict';

/*
Word count

8kyu

Can you realize a function that returns word count from a given string?

You have to ensure that spaces in string is a whitespace for real.

What we want and finish of work:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
What kind of tests we got for your code:

Function have to count words, but not spaces, so be sure that it does right.
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
Be sure that words with chars like -, ', ` are counted right.
*/

describe('Word Count | 8kyu', function() {
  describe('Input: Hello', function() {
    it('should return 1', done => {
      expect(countWords("Hello")).to.equal(1);
      done();
    })
  })

  describe('Input: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', function() {
    it('should return 19', done => {
      expect(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).to.equal(19);
      done();
    })
  })

  describe('input has multiple spaces in between words', function() {
    it('should return 8', done => {
      expect(countWords("Dear   Victoria, I love  to press   space button.")).to.equal(8);
      done();
    })
  })
})
