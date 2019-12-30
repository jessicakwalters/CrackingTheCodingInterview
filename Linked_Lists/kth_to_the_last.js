'use strict';

const LinkedList = require('./Linked_List');

function kthFromEnd(list, k){
  //three checks: list empty and k < length of the list, k is positive
  if(list.head === null || k < 0){
    return null;
  }
  //initialize two references to the head of the list
  let first = list.head;
  let kth = list.head;
//advance one k times
  for(let i = 0; i < k; i++){
    first = first.next;
  }
//move both together until the first one reaches the end of the list
  while(first != null){
    first = first.next;
    kth = kth.next;
  }
//return the value from the k-reference
  return kth.value;
}

const testList = new LinkedList();
testList.append(10);
testList.append(20);
testList.append(30);
testList.append(40);
testList.append(50);
testList.append(60);

console.log(testList.toString());

console.log(kthFromEnd(testList, 3));
