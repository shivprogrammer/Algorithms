'use strict';

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
