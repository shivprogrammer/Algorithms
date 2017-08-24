'use strict';

const expect = require('chai').expect;

/*
2.2 Return Kth to Last

Implement an algorithm to find the kth to last element of a singly linked list
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

function kthToLast(linkedList, kth) {
  var positionMap = new Map();
  var listLength = 0;
  var currentNode = linkedList.head;

  while (currentNode.next) {
    positionMap.set(listLength, currentNode);
    listLength++;
    currentNode = currentNode.next;
  }

  positionMap.set(listLength, currentNode);

  if (kth >= 0 && kth <= listLength) {
    return positionMap.get(listLength - kth);
  }
  else {
    return 'element is not in linked list';
  }
}

describe('2.2 - Return Kth to Last', function() {
  describe('Input: theList, 1', function() {
    it('should return node5', done => {
      expect(kthToLast(theList, 1)).to.equal(node5);
      done();
    })
  })

  describe('Input: theList, 0', function() {
    it('should return node6', done => {
      expect(kthToLast(theList, 0)).to.equal(node6);
      done();
    })
  })

  describe('Input: theList, 5', function() {
    it('should return node1', done => {
      expect(kthToLast(theList, 5)).to.equal(node1);
      done();
    })
  })

  describe('Input: theList, 10', function() {
    it('should return "element is not in linked list"', done => {
      expect(kthToLast(theList, 10)).to.equal('element is not in linked list');
      done();
    })
  })
})
