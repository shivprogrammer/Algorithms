'use strict';

function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(8);
var node4 = new Node(5);
var node5 = new Node(10);
var node6 = new Node(1);

var theList = new LinkedList();
theList.head = node1;

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
