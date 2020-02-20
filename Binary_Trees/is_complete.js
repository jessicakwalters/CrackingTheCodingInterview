'use strict';

const BinaryTree = require('./Binary-Tree');
const BTNode = require('./Node');

function isComplete(){
  return isCompleteHelper(tree.root) != -1;
}

function isCompleteHelper(node){
  if(node == null){
    return 0;
  }

  let left = isCompleteHelper(node.left);
  if(left == -1){
    return -1;
  }
  let right = isCompleteHelper(node.right);
  if(right == -1){
    return -1;
  }
  if(left != right){
    return -1;
  }

  return left + 1;
}

let tree = new BinaryTree();
let ten = new BTNode(10);
tree.root = ten;
let fifteen = new BTNode(15);
let twenty = new BTNode(20);
let thirty = new BTNode(30);
let forty = new BTNode(40);
let one = new BTNode(1);
let two = new BTNode(2);
let three = new BTNode(3);
let four = new BTNode(4);
let five = new BTNode(5);
let six = new BTNode(6);

ten.right = twenty;
ten.left = four;
four.right = five;
four.left = three;
//three.left = six; //makes tree false
twenty.right = thirty;
twenty.left = fifteen;
thirty.right = forty;

console.log(isComplete());