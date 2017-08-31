'use strict';

const expect = require('chai').expect;

/*
Buying a Car

6kyu

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore the percent of loss increases by a fixed 0.5 percent at the end of every two months.

Example of percents lost per month:

If, for example, at the end of first month the percent of loss is 1, end of second month percent of loss is 1.5, end of third month still 1.5, end of 4th month 2 and so on ...

Can you help him? Our man finds it difficult to make all these calculations.

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

Parameters and return of function:

parameter (positive int, guaranteed) startPriceOld (Old car price)
parameter (positive int, guaranteed) startPriceNew (New car price)
parameter (positive int, guaranteed) savingperMonth
parameter (positive float or int, guaranteed) percentLossByMonth

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to '766.158...' .

Note: Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
We don't take care of a deposit of savings in a bank:-)
*/

function nbMonths(startPriceOld, startPriceNew, savingsPerMonth, percentLossByMonth) {
  var output = [];
  var months = 0;
  var savings = 0;


  var currentTotal = startPriceOld;
  var currentOldCarPrice = startPriceOld;
  var currentNewCarPrice = startPriceNew;
  var newPercent = percentLossByMonth;

  while (currentTotal < currentNewCarPrice) {
    if ((months + 1) % 2 === 0) {
      newPercent + 0.5;
    }

    currentTotal += savingsPerMonth;
    currentOldCarPrice = currentOldCarPrice - (currentOldCarPrice * newPercent);
    currentNewCarPrice = currentNewCarPrice - (currentNewCarPrice * newPercent);
    months++;
  }

  savings = Math.floor(currentTotal - currentNewCarPrice);
  output.push(months);
  output.push(savings);
  return output;
}

describe('Buying a Car | Code Wars | 6kyu', function() {
  describe('startPriceOld: 2000 | startPriceNew: 8000 | savingsPerMonth: 1000 | percentLossByMonth: 1.5', function() {
    it('should return [6, 766]', done => {
      expect(nbMonths(2000, 8000, 1000, 1.5)).to.deep.equal([6, 766]);
      done();
    })
  })

  describe('startPriceOld: 12000 | startPriceNew: 8000 | savingsPerMonth: 1000 | percentLossByMonth: 1.5', function() {
    it('should return [0, 4000]', done => {
      expect(nbMonths(12000, 8000, 1000, 1.5)).to.deep.equal([0, 4000]);
      done();
    })
  })
})
