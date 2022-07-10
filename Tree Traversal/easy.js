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

const increasingBST = function (root) {
  if (root.val === null) return null;
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
  const result = DFSInOrder(root);
  // console.log(result);
  const beginner = result[0];
  // console.log(beginner)
  const len = result.length;
  // console.log(len)
  const temp = new TreeNode(beginner);
  let res = temp;

  for (let i = 1; i < len; i++) {
    res.right = new TreeNode(result[i]);
    res = res.right;
  }
  return temp;
};

// console.log(increasingBST(tree.root), "increasingBST");
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
const sortedArrToBST = function (nums) {
  let arr = [...nums];
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  let node = new TreeNode(arr[mid]);
  let temp = node;
  while (start < mid) {
    let b = new TreeNode(arr[start]);
    if(b.val > temp.val){
      temp.right = b;
      temp = temp.right;
    }else {
      temp.left = b;
      temp = temp.left;
    }
    start+=1;

  }

  temp = node;
  // mid = mid + 1;
  while (mid <= end) {
    let b = new TreeNode(arr[mid]);
    if(b.val > temp.val){
      temp.right = b;
      temp = temp.right;
    }else {
      temp.left = b;
      temp = temp.left;
    }
    mid+=1;

  }




  return node;
};

const sortedArrayToBST =  function(nums, start = 0, end = nums.length - 1){
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);
  let node = new TreeNode(nums[mid]);

  node.right =  sortedArrayToBST(nums,mid+1,end);
  node.left =  sortedArrayToBST(nums,start,mid-1);

  return node;
};
const nums1 = [-10, -3, 0, 5, 9];

const nums2 = [1, 3];

const nums3 = [0,1,2,3,4,5];

// console.log("line 74 ~ sortedArrayToBST", sortedArrayToBST(nums1));
// console.log("line 74 ~ sortedArrayToBST", sortedArrayToBST(nums2));
console.log("line 74 ~ sortedArrayToBST", sortedArrayToBST(nums3));
console.log("line 74 ~ sortedArrayToBST", sortedArrToBST(nums3));
// console.log("line 194 ~ sABST", sABST(nums1));
// console.log("line 75 ~ sortedArrayToBST", sortedArrayToBST(nums2));
