'use strict';

const BinaryTree = require('./Binary-Tree');
const BTNode = require('./Node');

function isBST(node){
 if(!node.left && !node.right){
   return true;
 }
 else if (node.left && node.left.value < node.value){
   return isBST(node.left);
 } else if (node.right && node.right.value > node.value){
   return isBST(node.right);
 } else {
   return false;
 }
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
// three.left = six;
twenty.right = thirty;
twenty.left = fifteen;
thirty.right = forty;

console.log(isBST(tree.root));