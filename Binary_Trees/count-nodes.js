'use strict';

const BinaryTree = require('./Binary-Tree');
const BTNode = require('./Node');

function countNodes(node){
  if(node === null){
    return 0;
  }
  return 1 + countNodes(node.right) + countNodes(node.left);
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

ten.right = one;
ten.left = twenty;
one.right = two;
two.left = three;
twenty.right = thirty;
twenty.left = forty;

console.log(countNodes(tree.root));