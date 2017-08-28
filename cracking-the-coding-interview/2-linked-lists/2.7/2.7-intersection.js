'use strict';

const expect = require('chai').expect;

/*
2.7 - Intersection:

Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.
*/

function LinkedList(node) {
  this.head = node;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

function intersection(linkedList1, linkedList2) {
  var nodeMap = new Map();
  var currentNode = linkedList1.head;

  while (currentNode) {
    nodeMap.set(currentNode, currentNode.value);
    currentNode = currentNode.next;
  }

  currentNode = linkedList2.head;

  while (currentNode.next) {
    if (nodeMap.has(currentNode)) {
      return currentNode;
    }
    else {
      currentNode = currentNode.next;
    }
  }

  if (nodeMap.has(currentNode)) {
    return currentNode;
  }
  else {
    return false;
  }
}

// Time Complexity: O(N)
// Space Complexity: O(N)

var nodeThree = new Node(3);
var nodeOne = new Node(1);
var nodeFive = new Node(5);
var nodeNine = new Node(9);

var nodeSeven = new Node(7);
var nodeTwo = new Node(2);
var lastNode = new Node(1);

var nodeFour = new Node(4);
var nodeSix = new Node(6);

nodeThree.next = nodeOne;
nodeOne.next = nodeFive;
nodeFive.next = nodeNine;
nodeNine.next = nodeSeven;
nodeSeven.next = nodeTwo;
nodeTwo.next = lastNode;

nodeFour.next = nodeSix;
nodeSix.next = nodeSeven;
nodeSeven.next = nodeTwo;
nodeTwo.next = lastNode;

var list1 = new LinkedList(nodeThree);
var list2 = new LinkedList(nodeFour);

describe('2.7 - Intersection | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: list1 & list2', function() {
    it('should return nodeSeven', done => {
      expect(intersection(list1, list2)).to.equal(nodeSeven);
      done();
    })
  })
})
