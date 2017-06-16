'use strict';

const expect = require('chai').expect;

/*
Complementary DNA

7kyu

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
DNAStrand ("ATTGC") # return "TAACG"
DNAStrand ("GTAT") # return "CATA"
*/

function DNAStrand(dna){
  var output = '';

  var dnaMap = new Map();
  dnaMap.set('A', 'T');
  dnaMap.set('T', 'A');
  dnaMap.set('C', 'G');
  dnaMap.set('G', 'C');

  for (let i = 0; i < dna.length; i++) {
    if (dnaMap.has(dna.charAt(i))) {
      output += dnaMap.get(dna.charAt(i));
    }
  }

  return output;
}

// Time Complexity: O(N) [Length of dna input string]
// Space Complexity: O(M) [Size of dnaMap]

describe('Complentary DNA | Code Wars | 7kyu', function() {
  describe('Input AAAA', function() {
    it('should return TTTT', done => {
      expect(DNAStrand('AAAA')).to.equal('TTTT');
      done();
    })
  })

  describe('Input ATTGC', function() {
    it('should return TAACG', done => {
      expect(DNAStrand('ATTGC')).to.equal('TAACG');
      done();
    })
  })

  describe('Input GTAT', function() {
    it('should return CATA', done => {
      expect(DNAStrand('GTAT')).to.equal('CATA');
      done();
    })
  })
})
