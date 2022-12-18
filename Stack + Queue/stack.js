class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        const temp = this.first;
        
        if(this.first === this.last){
            this.last = null;
        }
        
        this.first = this.first.next;

        temp.next = null;

        this.size--;

        return temp.value;
    }

    print(){
        let arr = [];
        let start = this.first;
        if(!start){
            return undefined;
        }

        while(start){
            arr.push(start.value);
            start = start.next;
        }

        return arr;
    }
}



const stack = new Stack();
console.log(stack)
stack.push("hi")
stack.push("badass")
stack.push("js")
stack.push("dev")

// console.log(stack)
console.log(stack.print())
console.log(stack.pop())

// console.log(stack)
console.log(stack.print())
// console.log(stack)
console.log(stack.pop())

// console.log(stack)
console.log(stack.print())
// console.log(stack)
console.log(stack.pop())

// console.log(stack)
console.log(stack.print())

console.log(stack.pop())
console.log(stack.print())
console.log(stack.pop())