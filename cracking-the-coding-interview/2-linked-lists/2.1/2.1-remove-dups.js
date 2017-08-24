'use strict';

require('../linked-list.js');

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
      currentNode = currentNode.next;
    }
  }

  return output;
}
