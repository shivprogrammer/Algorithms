'use strict';

/*
Calculate BMI

8kyu
*/

function bmi(weight, height) {

}

describe('Calculate BMI | 8kyu', function() {
  describe('Weight: 80, height: 1.80', function() {
    it('should return normal', done => {
      expect(bmi(80, 1.80)).to.equal('normal');
      done();
    })
  })
})
