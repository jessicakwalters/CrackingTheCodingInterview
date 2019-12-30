'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertAtHead(value){
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  includes(value) {
    let current = this.head;
    while(current !== null){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current !== null){
      string += (current.value + ' ');
      current = current.next;
    }
    return string;
  }

  remove(index) {
    let current = this.head;
    let count = 0;
    let previous = this.head;
    while (current !== null){
      if(count === index){
        previous.next = current.next;
        return current.value;
      }
      previous = current;
      current = current.next;
      count++;
    }
  }

  traverse() {
    let current = this.head;
    while(current !== null) {
      // SOMETHING ELSE n_n
      current = current.next;
    }
  }

  append(value){
    if(this.head === null){
      this.head = new Node(value);
    } else {
      this.appendHelper(value, this.head);
    }
  }

  appendHelper(value, node) {
    let current = node;
    if (!current.next){
      current.next = new Node(value);
    } else {
      this.appendHelper(value, current.next);
    }
  }

  insertBefore(value, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);

    if(this.head === null) {
      this.head = newNode;
    } else if (this.head.value === value){
      newNode.next = this.head;
      this.head = newNode;
    }

    while(current){
      if(!current.next) {
        return -1;
      } else if(current.next.value === value){
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

  }

  insertAfter(value, newVal){
    let current = this.head;
    let newNode = new Node(newVal);

    if(current === null) {
      current = newNode;
    }

    while(current) {
      if (!current){
        current = newNode;
        return;
      } else if(current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

  }

  getFromEnd(k){
    if (k < 0){
      return 'k is invalid';
    }
    let current = this.head;
    let kth = this.head;
    let count = 0;
    if(this.head){
      while (count <= k){
        if(current){
          current = current.next;
          count++;
        } else {
          return 'k is invalid';
        }

      }
      while (current){
        current = current.next;
        kth = kth.next;
      }
    }
    return kth.value;
  }

  reverse(){
    if(!this.head) {
      return 'List is Empty';
    }
    let previous = this.head;
    let current = this.head.next;
    let next = current.next;
    previous.next = null;
    while(current){
      if(!next){
        current.next = previous;
        this.head = current;
        return;
      } else {
        current.next = previous;
        previous = current;
        current = next;
        next = next.next;
      }
    }
  }
}

module.exports = LinkedList;