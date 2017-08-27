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

  while (currentNode) {
    listLength++;
    currentNode = currentNode.next;
  }
  listLength++;

  return listLength;
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');

A.next = B;
B.next = C;
C.next = B;
B.next = A;

var awesomeList = new LinkedList(A);

describe('2.6 - Palindrome | Cracking the Coding Interview | Chapter 2 - Linked Lists', function() {
  describe('Input: awesomeList', function() {
    it('should return true', done => {
      expect(palindrome(awesomeList)).to.equal(true);
      done();
    })
  })
})
