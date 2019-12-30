'use strict';

const LinkedList = require('./Linked_List');

function sumLists(list1, list2){
  //initialize a reference to the head of each list
  let current1 = list1.head;
  let current2 = list2.head;
  //initialize a counter
  let count = 0;
  //initialize a sum tracker
  let sum = 0;
  while(current1 != null && current2 != null){
    //grab the values, and sum, multiple by 10^counter, add to sum tracker
    sum += (current1.value + current2.value)*(Math.pow(10, count));
    //advance the counter
    count++;
    //advance each reference unless it's null
    current1 = current1.next;
    current2 = current2.next;
  }
  while(current1 != null){
    sum += current1.value * 10^count;
    current1 = current1.next;
    count++;
  }
  while(current2 != null){
    sum += current2.value * 10^count;
    current2 = current2.next;
    count++;
  }

  //now we have a sum, while sum !=0
  let sumList = new LinkedList();
  while(sum != 0){
    let digit = sum % 10;
    sum = Math.floor(sum/10);
    sumList.append(digit);
  }
  //find sum % 10, add to new list

  return sumList;
}

const testList1 = new LinkedList();
testList1.append(7);
testList1.append(1);
testList1.append(6);

const testList2 = new LinkedList();
testList2.append(5);
testList2.append(9);
testList2.append(2);

console.log(testList1.toString());
console.log(testList2.toString());

console.log(sumLists(testList1, testList2).toString());