'use strict';

const expect = require('chai').expect;

/*
Calculate BMI

8kyu

Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  var bmi = weight / Math.pow(height, 2);

  if (bmi <= 18.5) {
    return 'Underweight';
  }
  else if (bmi <= 25) {
    return 'Normal';
  }
  else if (bmi <= 30) {
    return 'Overweight';
  }
  else {
    return 'Obese';
  }
}

// Time Complexity: O(1)
// Space Complexity: O(1)

describe('Calculate BMI | 8kyu', function() {
  describe('Weight: 80, height: 1.80', function() {
    it('should return normal', done => {
      expect(bmi(80, 1.80)).to.equal('Normal');
      done();
    })
  })
})
