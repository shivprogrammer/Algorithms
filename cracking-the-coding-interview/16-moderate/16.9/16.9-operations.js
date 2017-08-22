'use strict';

/*
16.9 Operations

Write methods to implement the multiply, subtract, and divide operations for integers. The result of all of these are integers. Use only the add operator.
*/

function operations(num1, num2, method) {
  if (method.toLowerCase() === 'add') {
    return num1 + num2;
  }
  if (method.toLowerCase() === 'subtract') {
    return num1 + -num2;
  }
  if (method.toLowerCase() === 'multiply') {
    var temp = num2;
    var product = num1;
    while (temp) {
      product += num1;
      temp--;
    }
    return product;
  }
  if (method.toLowerCase() === 'divide') {

  }
}

describe('16.9 - Operations | Cracking the Coding Interview | Chapter 16 - Moderate', function() {
  describe('Input: 12, 9, "add"', function() {
    it('should equal 21', done => {
      expect(operations(12, 9, 'add')).to.equal(21);
      done();
    })
  })
})
