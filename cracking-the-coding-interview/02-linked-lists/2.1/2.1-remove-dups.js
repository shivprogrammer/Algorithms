'use strict';

const expect = require('chai').expect;

/*
2.1 Remove Dups

Write code to remove duplicates from an unsorted linked list
*/

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

function removeDups(linked) {
  var valMap = new Map();
  var currentNode = linked.head;
  var output = [];

  while (currentNode.next) {
    if (!valMap.has(currentNode.value)) {
      valMap.set(currentNode.value, 1);
      output.push(currentNode);
      currentNode = currentNode.next;
    }
    else {
      currentNode.next = currentNode.next.next;
      currentNode = currentNode.next;
    }
  }

  return output;
}

// Time Complexity: O(N)
// Space Complexity: O(M) [valMap] +  O(X) [output]

describe('2.1 Remove Dups | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: theList', function() {
    it('should return [node1, node2, node3, node4, node5]', done => {
      expect(removeDups(theList)).to.deep.equal([node1, node2, node3, node4, node5]);
      done();
    })
  })
})
