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

/**
 * 1)
tree.insert(2);
tree.insert(1);
tree.insert(3);
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
 * @return {boolean}
 */

const isValidBST = function (root) {
  if (root === null) return null;
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
  let len = result.length;
  for (let i = 0; i < len; i++) {
    if (result[i] > result[i + 1]) {
      return false;
    }
  }

  return true;
};

// console.log(isValidBST(tree.root));

/**
 * Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * 
 * Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
 * }
Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]


 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

const tree1 = new BinarySearchTree();
const tree2 = new BinarySearchTree();

const nums = [4, 2, 7, 1, 3];
const arr = [40, 20, 60, 10, 30, 50, 70];

for (const item of nums) {
  tree1.insert(item);
}

for (const item of arr) {
  tree2.insert(item);
}
const insertIntoBST = function (root, val) {

  const BFS = (treeRoot) => {
    let data = [];
    let queue = [treeRoot];

    while(queue.length){
      const node = queue.shift();
      data.push(node.val)
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    return data;
  }

  const result = BFS(root);
  // result.push(val);
  console.log(result);
  let tree = new TreeNode(val);
  let start = 0;
  let end = result.length;
  let temp = tree;
  while(start < end){
    const branch = new TreeNode(result[start]);

    if(branch.val > temp.val){
      temp.right = branch;
      temp = temp.right;
    }else{
      temp.left = branch;
      temp = temp.left;
    }
    start+=1;
  }


  return tree;
};
// console.log(insertIntoBST(tree1.root, 5));
// console.log(insertIntoBST(tree2.root, 25));


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

class BST{
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


var bstFromPreorder = function(preorder) {
    const tree = new BST();
    let nums = [...preorder];
    let start = 0;
    let end = preorder.length;
    
    for(const item of nums){
        tree.insert(item);
    }
    
    return tree.root;
};


// console.log(bstFromPreorder([8,5,1,7,10,12]))
// console.log(bstFromPreorder([1,3]))