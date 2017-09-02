'use strict';

const expect = require('chai').expect;

/*
2.8 Loop Detection

Given a circular linked list, implement an algorithm that returns the node at the beginnign of the loop.

DEFINITION:
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

EXAMPLE:
Input: A -> B -> C -> D -> E -> C [the same C as earlier]
Output: C
*/

function LinkedList(node) {
  this.head = node;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

function loopDetection(linkedList) {
  var nextValues = new Map();
  var currentNode = linkedList.head;

  while (currentNode) {
    if (!nextValues.has(currentNode.next)) {
      nextValues.set(currentNode.next, currentNode);
      currentNode = currentNode.next;
    }
    else {
      return currentNode.next;
    }
  }
}

// Time Complexity: O(N)
// Space Complexity: O(N)

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = C;

var sexyList = new LinkedList(A);

describe('2.8 - Loop Detection | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: sexyList', function() {
    it('should return C', done => {
      expect(loopDetection(sexyList)).to.equal(C);
      done();
    })
  })
})
