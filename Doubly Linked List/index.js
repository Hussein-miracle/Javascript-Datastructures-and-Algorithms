class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail= null;
        this.length = 0;
    }


    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            let cur = this.tail;
            this.tail.next = node;
            this.tail.next.prev = cur;
            // node.prev = cur;
            this.tail = node;
        }

        this.length++;

        return this;
    }

    pop(){
        if(!this.head || this.length === 0) return undefined;

        let currentTail = this.tail;

        if(this.length === 1){
            [this.head,this.tail] = [null,null];
        }else{
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }

        
        this.length--;
        return currentTail;
    }

    shift(){
        if(!this.head) return undefined;

        let currentHead = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.prev = null;
            currentHead.next = null;

        }
        
        this.length--;
        return currentHead;
    }

    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            // this.head.prev = node;
            node.next = this.head;
            this.head = node;
            
        }

        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index > this.length) return null;
        let count;
        let current;


        if(index <= this.length/2){
            count = 0;
            current = this.head;

            while(count < index){
                current = current.next;
                count++;
            }

        }else{
            count = this.length - 1;
            current = this.tail;

            while(count > index){
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index,value){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true;
        }


        return false;

    }

    insert(index,value){
        if(index < 0 || index > this.length) return false;

        if(index === 0) return !!this.unshift(value);

        if(index === this.length) return !!this.push(value);

        let node = new Node(value);

        let foundNodeBefore = this.get(index - 1);

        let tempNode = foundNodeBefore.next;

        foundNodeBefore.next = node;

        node.prev = foundNodeBefore;

        node.next = tempNode;

        tempNode.prev = node;

        this.length++;

        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        let nodeBefore = removedNode.prev;
        let nodeAfter = removedNode.next;

        nodeBefore.next = nodeAfter;
        nodeAfter.prev =  nodeBefore;
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;

        removedNode.prev = null;
        removedNode.next = null;

        // let foundNode = this.get(index - 1);
        // let nodeAfter = this.get(index+1);

        // nodeAfter.prev = foundNode;
        // foundNode.next = nodeAfter;
        this.length--;
        return removedNode;
    }

    traverse(){
        let arr = [];
        let cur = this.head;

        while(cur){
            arr.push(cur.val);
            cur = cur.next;
        }


        return arr;
    }
}

const dll = new DoublyLinkedList();

dll.push("44")
dll.push(24)
dll.push("lateefun!")
dll.push(456)
dll.unshift("blue")
dll.unshift("Harry Potter")
dll.push("Hermione")
dll.insert(0,"Ron")

// console.log(dll.traverse());
// console.log(dll.pop())
// console.log(dll.traverse());
// console.log(dll.get(dll.length - 1));
// console.log(dll.get(0));
console.log(dll.traverse());
