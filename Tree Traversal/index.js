const app = document.querySelector(".app");
// console.log("🚀 ~ file: index.js ~ line 2 ~ app", app)
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }


  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
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
  
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    // let node = this.root;
    let data = [];
    let queue = [this.root];

    // queue.push(node);

    while(queue.length){
      const node = queue.shift();
      data.push(node.value);      
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder(){
    const data = [];
    const traverse = node => {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }


    traverse(this.root);


    return data;
  }

  DFSInOrder(){
    const data = [];
    const traverse = node => {
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }


    traverse(this.root);


    return data;
  }

  DFSPostOrder(){
    const data = [];
    const traverse = node => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }


    traverse(this.root);


    return data;
  }

}

var tree = new BinarySearchTree();

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

const markup = `<p class="trial">${tree}</p>`;

app.insertAdjacentHTML("beforeend", markup);

console.log(tree, "BST");
console.log(tree.BFS(), "values gotten with BFS ");
console.log(tree.DFSInOrder(), "values gotten with DFSInOrder");
console.log(tree.DFSPreOrder(), "values gotten with DFSPreOrder");
console.log(tree.DFSPostOrder(), "values gotten with DFSPostOrder");
