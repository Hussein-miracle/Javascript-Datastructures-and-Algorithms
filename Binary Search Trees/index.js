class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let node = new Node(val);

        if(this.root === null){
            this.root = node;
            return this;
        }

        let current = this.root;

        while(true){

            if(val > current.value){
                if(current.right  === null){
                    current.right = node;
                    return this;
                }

                current = current.right;

            }else if(val < current.value){
                if( current.left  === null){
                    current.left = node;
                }

                current = current.left;
            }else{
                return undefined;
            }
        }
    }

    find(val){
        let current = this.root;
        let found = false;

        while(current && !found){
            if(current.value === val){
                found = true;
            }else if(val > current.value){
                current = current.right;
            }else{
                current = current.left;
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

                return found;
            }else if(val > current.value){
                current = current.right;
            }else{
                current = current.left;
            }
        }



        return false;
    }
}



const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree.find(0));

console.log(tree.find(7));
console.log(tree.contains(5));