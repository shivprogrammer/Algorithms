'use strict';

const expect = require('chai').expect;

/*
2.4 Partition

Write code to partition a linked list aorund a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need ot be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
[partition = 5]
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

function LinkedList(node) {
  this.head = node;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

function partition(linkedList, partition) {
  var output = [];
  var bigBoys = [];
  var currentNode = linkedList.head;

  while (currentNode.next) {
    if (currentNode.value > partition) {
      output.push(currentNode);
    }
    else {
      bigBoys.push(currentNode);
    }
  }

  return output.concat(bigBoys);
}

// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1

var firstNode = new Node(3);
var secondNode = new Node(5);
var thirdNode = new Node(8);
var fourthNode = new Node(5);
var fifthNode = new Node(10);
var sixthNode = new Node(2);
var seventhNode = new Node(1);

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;
fifthNode.next = sixthNode;
sixthNode.next = seventhNode;

var dopeList = new LinkedList(firstNode);

describe('2.4 Partition | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: dopeList', function() {
    expect(partition(dopeList)).to.equal();
    done();
  })
})
