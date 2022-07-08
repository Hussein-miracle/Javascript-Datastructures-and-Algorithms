class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 0;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    node.count = 1;
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;

    while (true) {
      if (current.value > val) {
        if (current.left === null) {
          current.left = node;
          return this;
        }

        current = current.left;
      } else if (current.value < val) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        current.count += 1;
        return this;
      }
    }
  }


  find(val){
    if(this.root === null) return false;
      let current = this.root;
      let found = false;


      while(current && !found){
          if(current.value === val){
              found = true;
            //   current.count -= 1;
          }else if(current.value > val){
              current = current.left
          }else{
              current = current.right;
          }
      }

      if(!found) return undefined;
      return current;
  }

  contains(val){
      if(this.root === null) return false;

      let current = this.root;


      let found = false;

      while(current && !found){
          if(current.value === val){
              found = true;
              return true;
          }else if(current.value > val){
              current = current.left;
          }else if(current.value < val){
              current = current.right;
          }
      }


      return false;

  }
}

const tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(11));
console.log(tree.insert(13));
console.log(tree.insert(16));
console.log(tree.insert(19));
console.log(tree.insert(11));
console.log(tree.insert(13));
console.log(tree.contains(11));
// console.log(tree, "BST tree");
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)

// console.log(tree);

// console.log(tree.find(7));
// console.log(tree.contains(5));
