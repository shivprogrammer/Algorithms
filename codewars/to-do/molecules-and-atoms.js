'use strict';

const expect = require('chai').expect;

/*
Molecules and Atoms

3kyu

For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object.

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.
*/

function conversion(str)
  var chemicalMap = new Map();

  var bracesStack = [];
  var bracesMap = new Map();
  bracesMap.set('[', ']');
  bracesMap.set('(', ')');

  for (let i = 0; i < str.length; i++) {
    if (!chemicalMap.has(str.charAt(i))) {
      chemicalMap.set(str.charAt(i), 1);

      if (parseInt(str.charAt(i + 1))) {
        chemicalMap.set(str.charAt(i), parseInt(str.charAt(i + 1)) - 1);
      }
    }
  }
}

describe('Molecules and Atoms | 3kyu', function() {
  describe('Input: H2O', function() {
    it('should return {H: 2, O: 1}', done => {
      expect(conversion('H2O')).to.deep.equal({H: 2, O: 1});
      done();
    })
  })

  describe('Input: Mg(OH)2', function() {
    it('should return {Mg: 1, O: 2, H: 2}', done => {
      expect(conversion('Mg(OH)2')).to.deep.equal({Mg: 1, O: 2, H: 2});
      done();
    })
  })

  describe('Input: K4[ON(SO3)2]2', function() {
    it('should return {K: 4, O: 14, N: 2, S: 4}', done => {
      expect(conversion('K4[ON(SO3)2]2')).to.deep.equal({K: 4, O: 14, N: 2, S: 4});
      done();
    })
  })
})
