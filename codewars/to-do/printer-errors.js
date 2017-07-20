'use strict';

const expect = require('chai').expect;

/*
Printer Errors

7kyu

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

#Examples:

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
*/

function printerError(s) {
  var count = 0;
  var dicMap = new Map();
  dicMap.set('a', 1);
  dicMap.set('b', 1);
  dicMap.set('c', 1);
  dicMap.set('d', 1);
  dicMap.set('e', 1);
  dicMap.set('f', 1);
  dicMap.set('g', 1);
  dicMap.set('h', 1);
  dicMap.set('i', 1);
  dicMap.set('j', 1);
  dicMap.set('k', 1);
  dicMap.set('l', 1);
  dicMap.set('m', 1);

  for (let i = 0; i < s.length; i++) {
    if (!dicMap.has(s.charAt(i))) {
      count++;
    }
  }

  return count + '/' + s.length;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

describe('Printer Errors | 7kyu', function() {
  describe('Input: "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"', function() {
    it('should return "3/56"', done => {
      expect(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")).to.equal('3/56');
      done();
    })
  })
})
