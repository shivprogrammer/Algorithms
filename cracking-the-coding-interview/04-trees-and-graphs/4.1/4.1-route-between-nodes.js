'use strict';

const expect = require('chai').expect;

/*
4.1 Route Between Nodes

Given a directed graph, design an algorithm to find out whether there is a route between two nodes
*/

function Graph(node) {
  this.root = node;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function routeBetweenNodes(node, start, end) {
  var nodeValues = [];

  var nodeFinder = 0;

  for (let i = 0; i < nodeValues.length; i++) {
    if (nodeValues[i] === start.value || nodeValues[i] === end.value) {
      nodeFinder++;
    }
  }

  return nodeFinder === 2 ? true : false;
}

function inOrderTraversal(node) {
  if (node) {
    inOrderTraversal(node.left);
    console.log(node.value)
    inOrderTraversal(node.right);
  }
}

var ten = new Node(10);
var seven = new Node(7);
var twenty = new Node(20);
var seventeen = new Node(17);
var twentySeven = new Node(27);

var unicorn = new Node('not on graph bruh');

ten.left = seven;
ten.right = twenty;

twenty.left = seventeen;
twenty.right = twentySeven;

var coolGraph = new Graph(ten);

describe('4.1 - Route Between Nodes | Cracking the Coding Interview | Chapter 4 - Trees and Graphs', function() {
  describe('If (node = coolGraph.root, start = ten, end = seventeen)', function() {
    it('return true', done => {
      expect(routeBetweenNodes(coolGraph.root, ten, seventeen)).to.equal(true);
      done();
    })
  })

  describe('If (node = coolGraph.root, start = ten, end = unicorn)', function() {
    it('return false', done => {
      expect(routeBetweenNodes(coolGraph.root, ten, unicorn)).to.equal(false);
      done();
    })
  })
})
