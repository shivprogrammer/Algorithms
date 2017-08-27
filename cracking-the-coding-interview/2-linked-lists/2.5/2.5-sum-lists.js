'use strict';

const expect = require('chai').expect;

/*
2.5 Sum Lists

You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a functoin that adds the two numbers and returns the sum as a linked list.

EXAMPLE:
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
Output: 2 -> 1 -> 9. That is, 912.

FOLLOW UP:
Suppose the digits are stored in forward order. Repeat the above problem.

EXAMPLE:
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
output: 9 -> 1 -> 2. That is, 912.
*/

function LinkedList(node) {
  this.head = node;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

function reversedLinkedListSum(linkedList1, linkedList2) {

}

var node7 = new Node(7);
var node1 = new Node(1);
var node6 = new Node(6);
node7.next = node1;
node1.next = node6;
var linkedList1 = new linkedList(node7);

var node5 = new Node(5);
var node9 = new Node(9);
var node2 = new Node(2);
node5.next = node9;
node9.next = node2;
var linkedList2 = new linkedList(node5);

describe('2.5 - Sum Lists | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: linkedList1, linkedList2', function() {
    it('should return a linkedList with nodes with values (2 -> 1 -> 9)', done => {
      expect(reversedLinkedListSum(linkedList1, linkedList2)).to.equal();
      done();
    })
  })
})
