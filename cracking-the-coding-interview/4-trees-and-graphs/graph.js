'use strict';

const expect = require('chai').expect;

/*
Practice file for graphs
*/

function Graph(node) {
  this.root = node;
}

function Node(name) {
  this.name = name;
  this.left = null;
  this.right = null;
}

function inOrderTraversal(node) {
  if (node != null) {
    inOrderTraversal(node.left);
    console.log(node);
    inOrderTraversal(node.right);
  }
}

var ten = new Node(10);
var seven = new Node(7);
var twenty = new Node(20);
var seventeen = new Node(17);
var twentySeven = new Node(27);

ten.left = seven;
ten.right = twenty;

twenty.left = seventeen;
twenty.right = twentySeven;

var coolGraph = new Graph(ten);

describe('Practice File for Graphs | Cracking the Coding Interview | Chapter 4 - Trees and Graphs', function() {
  describe('Input: coolGraph', function() {
    it('will return the in ordre traversal of coolGraph', done => {
      expect(inOrderTraversal(coolGraph)).to.equal();
      done();
    })
  })
})
