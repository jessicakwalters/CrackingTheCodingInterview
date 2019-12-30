'use strict';

const LinkedList = require('./Linked_List');

function isPalindrome(list){
  let listcopy = new LinkedList();
  let current = list.head;
  while(current != null){
    listcopy.append(current.value);
    current = current.next;
  }
  list.reverse();
  let copyCurrent = listcopy.head;
  current = list.head;
  while(current != null){
    if(current.value != copyCurrent.value){
      return false;
    }
    current = current.next;
    copyCurrent = copyCurrent.next;
  }
  return true;
}

const testList1 = new LinkedList();
testList1.append(7);
testList1.append(1);
testList1.append(6);
testList1.append(7);
testList1.append(6);
testList1.append(1);
testList1.append(7);

console.log(testList1.toString());

console.log(isPalindrome(testList1));