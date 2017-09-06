'use strict';

const expect = require('chai').expect;

/*
4.7 Build Order

You are given a list of properties and a list of dependencies (which is a list of pairs of projects where the second project is dependent on the first project). All of a project's dependencies must be built before the proejct is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.
*/

function Node(parent, name) {
  this.name = name;
  this.parent = null;
  this.children = [];
}

function findBuildOrder(projects, dependencies) {
  var output = [];
  var dependMap = new Map();

  for (let i = 0; i < dependencies.length; i++) {
    dependencies[i][0].children.push(dependencies[i][1]);
    dependencies[i][1].parent = dependencies[i][0];
  }

  for (let x = 0; x < projects.length; x++) {
    if (projects[x].parent === null) {
      output.push(projects[x]);
    }
  }

  console.log(output);
  return output;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

describe('4.7 Build Order | Cracking the Coding Interview | Chapter 4 - Trees and Graphs', function() {
  describe('Projects: [a, b, c, d, e, f] & Dependencies: [[a, d], [f, b], [b, d], [f, a], [d, c]]', function() {
    it('should return [f, e, a, b, d, c]', done => {
      expect(findBuildOrder([a, b, c, d, e, f], [[a, d], [f, b], [b, d], [f, a], [d, c]])).to.deep.equal([f, e, a, b, d, c]);
      done();
    })
  })
})
