// 20 PASSING TESTS AND 1 FAILING TEST ON CODE WARS WTF
'use strict';

const expect = require('chai').expect;

/*
Vasya - Clerk

6kyu

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

###Examples:

// === JavaScript ==

tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
*/

function tickets(peopleInLine) {
  var moneyMap = new Map();
  moneyMap.set(25, 0);
  moneyMap.set(50, 0);
  moneyMap.set(100, 0);

  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      moneyMap.set(25, moneyMap.get(25) + 1);
    }
    if (peopleInLine[i] === 50) {
      if (moneyMap.get(25) >= 1) {
        moneyMap.set(25, moneyMap.get(25) - 1);
        moneyMap.set(50, moneyMap.get(50) + 1);
      }
      else {
        return 'NO';
      }
    }
    if (peopleInLine[i] === 100) {
      if (moneyMap.get(25) >= 3) {
        moneyMap.set(25, moneyMap.get(25) - 3);
        moneyMap.set(100, moneyMap.get(100) + 1);
      }
      else if (moneyMap.get(25) >= 1 && moneyMap.get(50) >= 1) {
        moneyMap.set(25, moneyMap.get(25) - 1);
        moneyMap.set(50, moneyMap.get(50) - 1);
        moneyMap.set(100, moneyMap.get(100) + 1);
      }
      else {
        return 'NO';
      }
    }
  }

  return 'YES';
}

describe('Vasya - Clerk | 6kyu', function() {
  describe('Input: [25, 25, 50, 50]', function() {
    it('should return "YES"', done => {
      expect(tickets([25, 25, 50, 50])).to.equal('YES');
      done();
    })
  })

  describe('Input: [25, 100]', function() {
    it('should return "NO"', done => {
      expect(tickets([25, 100])).to.equal('NO');
      done();
    })
  })

  describe('Input: [25,50,25,100,25,25,25,100,25,25,50,100,25,25,50,100,25,50,25,100]', function() {
    it('should return "YES"', done => {
      expect(tickets([25,50,25,100,25,25,25,100,25,25,50,100,25,25,50,100,25,50,25,100])).to.equal('YES');
      done();
    })
  })
})
