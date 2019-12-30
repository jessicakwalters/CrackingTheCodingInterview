'use strict';

const LinkedList = require('./Linked_List');

function partition(list, p){
  let leftMostGreaterThanP = list.head;
  let current = list.head.next;

  while(current != null){
    if(current.value < p){
      let temp = leftMostGreaterThanP.value;
      leftMostGreaterThanP.value = current.value;
      current.value = temp;
      while(leftMostGreaterThanP.value < p){
        leftMostGreaterThanP = leftMostGreaterThanP.next;
      }
      current = leftMostGreaterThanP.next;
    } else {
      current = current.next;
    }
  }
}

const testList = new LinkedList();
testList.append(3);
testList.append(5);
testList.append(2);
testList.append(5);
testList.append(10);
testList.append(20);
testList.append(1);
testList.append(1);
testList.append(10);

console.log(testList.toString());
partition(testList, 5);
console.log(testList.toString());