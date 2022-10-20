class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.first=null;

        this.last=null;

        this.size=0;
    }

    pop(){

        if(!this.first || this.size === 0) return null;

        let node = this.first;

        if(this.first === this.last){
            this.last = null;
        }

        this.first = node.next;

        node.next = null;

        this.size--;

        return node.val;
    }


    push(value){
        let node = new Node(value);

        if(!this.first){

            this.first=node;

            this.last=node;
        }else{
            let temp = this.first;

            node.next = this.first;

            this.first = node; 
        }


        return ++this.size;
    }



    print(){
        let arr = [];
        let start = this.first;

        if(!start){
            return undefined;
        }

        while(start){
            arr.push(start.val);
            start=start.next;
        }

        return arr;
    }
}


const stack = new Stack();

stack.push("hi")
stack.push("badass")
stack.push("js")
stack.push("dev")

// console.log(stack)



class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }

    enqueue(val){
        let node = new Node(val);
        if(!this.first){
            this.first = node;
            this.last = this.first;
        }else{
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;

    }

    dequeue(){
        if(!this.first) return null;

        let node = this.first;
        if(this.first === this.last){
            this.last=null;
        }

        this.first = this.first.next;

        node.next = null;

        this.size--;
        return node.val;

    }

    print(){
        let arr = [];
        let start = this.first;

        if(!start){
            return "items don finished here o";
        }

        while(start){
            arr.push(start.val);
            start=start.next;
        }

        return arr;
    }
}


const queue = new Queue();

const arr = ["dera",22,10,"ade","ola"];

for(const item of arr){
    // console.log(item)
    console.log(queue.enqueue(item));
    // console.log(queue);
}

console.log(queue);
console.log(queue.print());

for(const item of arr){
    // console.log(item)
    console.log(queue.dequeue());
    // console.log(queue);
}

console.log(queue);

console.log(queue.print());

