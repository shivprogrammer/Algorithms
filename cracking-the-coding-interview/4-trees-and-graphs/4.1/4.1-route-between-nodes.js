'use strict';

const expect = require('chai').expect;

/*
4.1 Route Between Nodes

Given a directed graph, design an algorithm to find out whether there is a route between two nodes
*/

function Graph(node) {
  this.root = node;
}

function Node(name) {
  this.name = name;
  this.children = [];
}

// function routeBetweenNodes(graph, start, end) {
//   var nodeFinder = 0;
//
//   for (let i = 0; i < graph.root.children.length; i++) {
//     if (graph.root.child)
//   }
//
//   if (nodeFinder === 2) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

var ten = new Node(10);
var seven = new Node(7);
var twenty = new Node(20);
var seventeen = new Node(17);
var twentySeven = new Node(27);

ten.children.push(seven, twenty);
twenty.children.push(seventeen, twentySeven);

var coolGraph = new Graph(ten);

describe('4.1 - Route Between Nodes | Cracking the Coding Interview | Chapter 4 - Trees and Graphs', function() {
  describe('If (graph = coolGraph, start = ten, end = seventeen)', function() {
    it('return true', done => {
      expect(routeBetweenNodes(coolGraph, ten, seventeen)).to.equal(true);
      done();
    })
  })
})
