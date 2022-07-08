class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.val) return undefined;
      if (value < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(20);
tree.insert(20);
tree.insert(20);
tree.insert(20);
tree.insert(20);
tree.insert(20);

// console.log(tree)

/**
 * Definition for a binary tree node.


 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

const searchBST = function (root, val) {
  if (root === null) return null;
  let current = root;

  while (current) {
    if (current.val === val) {
      return current;
    } else if (current.val < val) {
      current = current.right;
    } else {
      current = current.left;
    }
  }

  return null;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const DFSInOrder = (root) => {
  let data = [];

  const traverse = (node) => {

    if (node.left) traverse(node.left);
    data.push(node.val);
    if (node.right) traverse(node.right);
  };

  traverse(root);
  return data;
};



const increasingBST = function (root) {
  if(root.val === null) return null;
  const result = DFSInOrder(root);
  // console.log(result);
  let start = 0;
  const beginner = result[0];
  // console.log(beginner)
  const len = result.length;
  // console.log(len)
  const temp = new TreeNode(beginner);
  let res =  temp;



  for(let i = 1;i < len ;i++){
    res.right = new TreeNode(result[i]);
    res = res.right;
  }
  return temp;
};

console.log(increasingBST(tree.root), "increasingBST");
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  // console.log(arr[mid]);
  let midItem = arr[mid];
  const node = new TreeNode(arr[mid]);
  let temp = node;
  while(start < end){
    if(temp.val > arr[mid+1]){

    }else{

    }
  }

  return  node;
};

const nums1 = [-10, -3, 0, 5, 9];

const nums2 = [1, 3];

// console.log("line 74 ~ sortedArrayToBST", sortedArrayToBST(nums1));
// console.log("line 75 ~ sortedArrayToBST", sortedArrayToBST(nums2));
