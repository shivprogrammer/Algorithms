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
  var sum1 = '';
  var sum2 = '';
  var totalSum = 0;
  var currentNode = linkedList1.head;
  var linkedListArray = [];

  while (currentNode.next) {
    sum1 = currentNode.value + sum1;
    currentNode = currentNode.next;
  }
  sum1 = currentNode.value + sum1;
  currentNode = linkedList2.head;

  while (currentNode.next) {
    sum2 = currentNode.value + sum2;
    currentNode = currentNode.next;
  }
  sum2 = currentNode.value + sum2;

  totalSum = parseInt(sum1) + parseInt(sum2);

  for (let i = totalSum.toString().length - 1; i >= 0; i--) {
    if (i === totalSum.toString().length - 1) {
      var nodeName = 'node' + i * Math.random();
      var nodeName = new Node(parseInt(totalSum.toString().charAt(i)));
      linkedListArray.push(nodeName);
      var newList = new LinkedList(nodeName);
    }
    else if (i < totalSum.toString().length - 1){
      var newNodeName = 'node' + i * Math.random();
      var newNodeName = new Node(parseInt(totalSum.toString().charAt(i)));
      linkedListArray.push(newNodeName);
      linkedListArray[totalSum.toString().length - 2 - i].next = newNodeName;
    }
  }
  console.log(linkedListArray);
}

var nodeSeven = new Node(7);
var nodeOne = new Node(1);
var nodeSix = new Node(6);
nodeSeven.next = nodeOne;
nodeOne.next = nodeSix;
var linkedList1 = new LinkedList(nodeSeven);

var nodeFive = new Node(5);
var nodeNine = new Node(9);
var nodeTwo = new Node(2);
nodeFive.next = nodeNine;
nodeNine.next = nodeTwo;
var linkedList2 = new LinkedList(nodeFive);

describe('2.5 - Sum Lists | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: linkedList1 (7 -> 1 -> 6), linkedList2 (5 -> 9 -> 2)', function() {
    it('should return a linkedList with nodes with values (2 -> 1 -> 9)', done => {
      expect(reversedLinkedListSum(linkedList1, linkedList2)).to.equal();
      done();
    })
  })
})
