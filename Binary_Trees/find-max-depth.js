'use strict';

const BinaryTree = require('./Binary-Tree');
const BTNode = require('./Node');

function findMaxDepth(node){
  if(node === null){
    return 0;
  }
  if(node.right === null && node.left === null){
    return 1;
  }
  else{
    return 1 + Math.max(findMaxDepth(node.right), findMaxDepth(node.left));
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

console.log(findMaxDepth(tree.root));