'use strict';

const BinaryTree = require('./Binary-Tree');
const BTNode = require('./Node');

function isBalanced(node){
  if(node === null){
    return 0;
  }
    let rightHeight = isBalanced(node.right);
    if(rightHeight === false){
      return false;
    }
    let leftHeight = isBalanced(node.left);
    if(leftHeight === false){
      return false;
    }

    if((leftHeight - rightHeight) > 1 || (leftHeight - rightHeight) < -1){
      return false;
    } else {
      return Math.max(rightHeight, leftHeight) + 1;
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
// two.left = three;
// three.right = four;
twenty.right = thirty;
twenty.left = forty;

console.log(isBalanced(tree.root));