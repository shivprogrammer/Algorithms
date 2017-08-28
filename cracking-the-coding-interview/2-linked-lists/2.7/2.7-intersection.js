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

}

var node3 = new Node(3);
var node4 = new Node(1);
var node5 = new Node(5);
var node9 = new Node(9);

var node7 = new Node(7);
var node2 = new Node(2);
var node1 = new Node(1);

var node4 = new Node(4);
var node6 = new Node(6);

node3.next = node1;
node1.next = node5;
node9.next = node7;
node7.next = node2;
node2.next = node1;

node4.next = node6;
node6.next = node7;
node7.next = node2;
node2.next = node1;

var list1 = new LinkedList(node3);
var list2 = new LinkedList(node4);

describe('2.7 - Intersection | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: list1 & list2', function() {
    it('should return node7', done => {
      expect(intersection(list1, list2)).to.equal(node7);
      done();
    })
  })
})
