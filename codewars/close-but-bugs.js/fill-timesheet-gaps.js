// LOTS OF BUGS ON CODEWARS. MAIN PROBLEM IS CONSECUTIVE NULLS. WILL NEED TO REFACTOR

'use strict';

const expect = require('chai').expect;

/*
Fill the Gaps in my timesheet

6kyu

Background:
At work I need to keep a timesheet, by noting which project I was working on every 15 minutes. I have an timer that beeps every 15 minutes to prompt me to note down what I was working on at that point, but sometimes when I'm away from my desk or working continuously on one project, I don't note anything down and these get recorded as null.

Task:

Help me populate my timesheet by replacing any null values in the array with the correct project name which is given by surrounding matching values.

Examples:

fill_gaps([1,null,1]) -> [1,1,1]   # Replace nulll values surrounded by matching values
fill_gaps([1,null,null,null,1]) -> [1,1,1,1,1]  # There may be multiple nulls
fill_gaps([1,null,1,2,null,2]) -> [1,1,1,2,2,2]  # There may be multiple replacements required
fill_gaps([1,null,2,null,2,null,1]) -> [1,null,2,2,2,null,1]  # No nesting.
fill_gaps([1,null,2]) -> [1,null,2] # No replacement if ends don't match
fill_gaps([null,1,null]) -> [null,1,null] # No replacement if ends don't match off the ends of the array
fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work']) -> ["codewars", "codewars", "codewars", "codewars", "real work", "real work", "real work", "real work"] # Works with strings too
*/

function fill_gaps(timesheet) {
  var output = [];

  for (let i = 0; i < timesheet.length; i++) {
    if (timesheet[i] === null) {
      if (timesheet[i - 1] === timesheet[i + 1]) {
        output.push(timesheet[i - 1]);
      }
      else if (timesheet[i + 1] === null && timesheet[i + 2] === null) {
        if (timesheet[i - 1] === timesheet[i + 3]) {
          output.push(timesheet[i - 1]);
          output.push(timesheet[i - 1]);
          output.push(timesheet[i - 1]);
          i += 2;
        }
      }
      else if (timesheet[i + 1] === null) {
        if (timesheet[i - 1] === timesheet[i + 2]) {
          output.push(timesheet[i - 1]);
          output.push(timesheet[i + 2]);
          i++;
        }
      }
      else {
        output.push(timesheet[i]);
      }
    }

    else {
      output.push(timesheet[i]);
    }
  }

  return output;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

describe('Fill Timesheetp Gaps | 6kyu', function() {
  describe('Input: [1,null,1]', function() {
    it('should return [1,1,1]', done => {
      expect(fill_gaps([1,null,1])).to.deep.equal([1,1,1]);
      done();
    })
  })

  describe('Input: [1,null,null,null,1]', function() {
    it('should return [1,1,1,1,1]', done => {
      expect(fill_gaps([1,null,null,null,1])).to.deep.equal([1,1,1,1,1]);
      done();
    })
  })

  describe('Input: [1,null,2,null,2,null,1]', function() {
    it('should return [1,null,2,2,2,null,1]', done => {
      expect(fill_gaps([1,null,2,null,2,null,1])).to.deep.equal([1,null,2,2,2,null,1]);
      done();
    })
  })

  describe('Input: [1,null,2]', function() {
    it('should return [1,null,2]', done => {
      expect(fill_gaps([1,null,2])).to.deep.equal([1,null,2]);
      done();
    })
  })

  describe('Input: [null,1,null]', function() {
    it('should return [null,1,null]', done => {
      expect(fill_gaps([null,1,null])).to.deep.equal([null,1,null]);
      done();
    })
  })

  describe('Input: ["codewars", null, null, "codewars", "real work", null, null, "real work"]', function() {
    it('should return ["codewars", "codewars", "codewars", "codewars", "real work", "real work", "real work", "real work"]', done => {
      expect(fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work'])).to.deep.equal(["codewars", "codewars", "codewars", "codewars", "real work", "real work", "real work", "real work"]);
      done();
    })
  })
})
