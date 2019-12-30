'use strict';

const LinkedList = require('./Linked_List');

function removeNode(list, value){
  //initialize a reference to the head of the list
  let previous = list.head;
  //initialize a reference to head.next
  let current = list.head.next;
  //advance both references until our first reference finds the value
  while(current != null){
    if(current.value === value){
      previous.next = current.next;
      return true;
    } else {
      current = current.next;
      previous = previous.next;
    }
  }
  return false;
}

const testList = new LinkedList();
testList.append(10);
testList.append(20);
testList.append(30);
testList.append(40);
testList.append(50);
testList.append(60);

console.log(testList.toString());

console.log(removeNode(testList, 30));
console.log(removeNode(testList, 90));

console.log(testList.toString());