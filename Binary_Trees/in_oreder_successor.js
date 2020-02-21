'use strict';

const BinaryTree = require('./Binary-Tree');
const BTNode = require('./Node');

function inOrderSuccessor(node, key){
  if(node === null){
    return null;
  }
 if(key.value < node.value){
   return inOrderSuccessor(node.left, key) || node;
 } else {
   return inOrderSuccessor(node.right, key);
 }
}

let tree = new BinaryTree();
let ten = new BTNode(10);
tree.root = ten;
let twenty = new BTNode(20);
let thirty = new BTNode(30);
let forty = new BTNode(40);
let one = new BTNode(1);
let two = new BTNode(2);
let three = new BTNode(3);
let four = new BTNode(4);

ten.right = one;
ten.left = twenty;
one.right = two;
two.left = three;
three.right = four;
twenty.right = thirty;
twenty.left = forty;

console.log(inOrderSuccessor(tree.root, twenty));