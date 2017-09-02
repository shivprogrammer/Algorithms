'use strict';

const expect = require('chai').expect;

/*
2.6 Palindrome

Implement a function to check if a linked list is a palindrome
*/

function LinkedList(node) {
  this.head = node;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

function palindrome(linkedList) {
  var listLength = 0;
  var currentNode = linkedList.head;
  var output = [];

  while (currentNode) {
    listLength++;
    output.push(currentNode.value);
    currentNode = currentNode.next;
  }

  var mid = Math.ceil(listLength / 2);
  var left = output.splice(0, mid);

  for (let i = 0; i < output.length; i++) {
    if (left[i] != output[output.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Time Complexity: O(N) [length of the LinkedList]
// Space Complexity: O(N) [output] + O(X) [left]

var node1 = new Node('A');
var node2 = new Node('B');
var node3 = new Node('C');
var node4 = new Node('B');
var node5 = new Node('A');
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
var awesomeList = new LinkedList(node1);

var noder1 = new Node('A');
var noder2 = new Node('B');
var noder3 = new Node('C');
var noder4 = new Node('C');
var noder5 = new Node('A');
noder1.next = noder2;
noder2.next = noder3;
noder3.next = noder4;
noder4.next = noder5;
var noderList = new LinkedList(noder1);

describe('2.6 - Palindrome | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: awesomeList', function() {
    it('should return true', done => {
      expect(palindrome(awesomeList)).to.equal(true);
      done();
    })
  })

  describe('Input: noderList', function() {
    it('should return false', done => {
      expect(palindrome(noderList)).to.equal(false);
      done();
    })
  })
})
