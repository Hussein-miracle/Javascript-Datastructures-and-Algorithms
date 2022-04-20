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
dll.push("24")
dll.push("lateefun!")
dll.push(456)

console.log(dll.traverse());
console.log(dll.pop())
console.log(dll.traverse());
