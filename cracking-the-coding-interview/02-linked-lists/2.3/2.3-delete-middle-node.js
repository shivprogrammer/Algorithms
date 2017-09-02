'use strict';

const expect = require('chai').expect;

/*
2.3 Delete Middle Node

Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessairly the exact middle), given only access to that node.

EXAMPLE

Input: the node c from the linked list a -> b -> c -> d -> e -> f
Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f
*/

function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

var nodeA = new Node('nodeA');
var nodeB = new Node('nodeB');
var nodeC = new Node('nodeC');
var nodeD = new Node('nodeD');
var nodeE = new Node('nodeE');
var nodeF = new Node('nodeF');

var theList = new LinkedList();
theList.head = nodeA;

nodeA.next = nodeB;

nodeB.prev = nodeA;
nodeB.next = nodeC;

nodeC.prev = nodeB;
nodeC.next = nodeD;

nodeD.prev = nodeC;
nodeD.next = nodeE;

nodeE.prev = nodeD;
nodeE.next = nodeF;

nodeF.prev = nodeE;

function deleteMiddleNode(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;

  return 'the previous node\'s next is: ' + node.prev.next.value + ' and the next node\'s previous is: ' + node.next.prev.value;
}

describe('2.3 - Delete Middle Node | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: nodeC', function() {
    it('should return "the previous node\'s next is: nodeD and the next node\'s previous is: nodeB"', done => {
      expect(deleteMiddleNode(nodeC)).to.equal('the previous node\'s next is: nodeD and the next node\'s previous is: nodeB');
      done();
    })
  })
})
