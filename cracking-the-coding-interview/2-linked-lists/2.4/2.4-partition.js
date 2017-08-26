'use strict';

/*
2.4 Partition

Write code to partition a linked list aorund a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need ot be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
[partition = 5]
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

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

  return output.join(bigBoys);
}

describe('2.4 Partition | Cracking the Coding Interview | Chapter 2 - Linked Lists',)
