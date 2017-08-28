'use strict';

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

function routeBetweenNodes(graph) {

}

var ten = new Node(10);
var seven = new Node(7);
var twenty = new Node(20);
var seventeen = new Node(17);
var twentySeven = new Node(27);

ten.children.push(seven, twenty);
twenty.children.push(seventeen, twentySeven);

var coolGraph = new Graph(ten);
