'use strict';

const LinkedList = require('./Linked_List');

function removeDuplicates(list){
  let items = new Set();
  if(list.head === null){
    return list;
  }
  let current = list.head.next;
  let previous = list.head;
  items.add(list.head.value);
  while(current != null){
    if(items.has(current.value)){
      previous.next = current.next;
    } else {
      items.add(current.value);
      previous = previous.next;
    }
    current = current.next;
  }
}

const testList = new LinkedList();
testList.append(10);
testList.append(20);
testList.append(10);
testList.append(30);
testList.append(10);
testList.append(10);
testList.append(20);
testList.append(10);
testList.append(30);
testList.append(10);

console.log(testList.toString());
removeDuplicates(testList);
console.log(testList.toString());