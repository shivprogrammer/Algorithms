'use strict';

const expect = require('chai').expect;

/*
4.7 Build Order

You are given a list of properties and a list of dependencies (which is a list of pairs of projects where the second project is dependent on the first project). All of a project's dependencies must be built before the proejct is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.
*/

function Node(parent, name) {
  this.parent = parent;
  this.name = name;
}

function findBuildOrder(projects, dependencies) {
  var nodeFamily = [];

  var projectsMap = new Map();

  for (let i = 0; i < projects.length; i++) {
    if (!projectsMap.has(projects[i])) {
      projectsMap.set(projects[i], 1);
    }
  }

  for (let x = 0; x < dependencies.length; x++) {
    var nodeName = x;
    var nodeName = new Node(dependencies[x][0], dependencies[x][1]);
    nodeFamily.push(x);
  }

  console.log(nodeFamily);
}

describe('4.7 Build Order | Cracking the Coding Interview | Chapter 4 - Trees and Graphs', function() {
  describe('Projects: [a, b, c, d, e, f] & Dependencies: [[a, d], [f, b], [b, d], [f, a], [d, c]]', function() {
    it('should return [f, e, a, b, d, c]', done => {
      expect(findBuildOrder([a, b, c, d, e, f], [[a, d], [f, b], [b, d], [f, a], [d, c]])).to.deep.equal([f, e, a, b, d, c]);
      done();
    })
  })
})
