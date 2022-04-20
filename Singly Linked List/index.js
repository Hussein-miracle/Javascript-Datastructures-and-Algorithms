class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class SLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;


            this.tail = newNode
        }

        this.length++;

        return this;
    }


    pop(){
        if(!this.head && this.length <= 0) return undefined;
        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        


        return current;
    }



    shift(){
        if(!this.head)return undefined;

        let current = this.head;
        let newHead = current.next;
        this.head = newHead;

        this.length--;
        if(this.length === 0 || this.head === null){
            this.tail = null;
        }
        return current;
    }

    unshift(val){
        let newHead = new Node(val);
        if(!this.head){
            this.head = newHead;
            this.tail = this.head;
        }

        let currentHead = this.head;
        newHead.next = currentHead;
        this.head = newHead;

        this.length++;

        return this;
    }

    get(index){
        let idCount  = 0;
        let res = []
        if(!this.head || index>=this.length || this.length < 0) return null;
        let current = this.head;

        while(idCount !== index){
            current = current.next;
            idCount++;
        }

        // res.push(current.val);

        return current;
    }

    set(index,value){
        // let idCount  = 0;

        if(!this.head || index >= this.length || index < 0 ) return undefined;

        let foundNode = this.get(index);

        if(foundNode){
            foundNode.val = value;
            return true
        }

        return false;

    }

    insert(index,value){
        if(index > this.length || index < 0 ) return false;

        if(index === this.length) return !!this.push(value);

        if(index === 0)return !!this.unshift(value);

        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        // let nodeBefore = this.get(index - 1);
        // newNode.next = nodeBefore.next;
        // nodeBefore.next = newNode;
    

        this.length++;

        return true;

    }


    remove(index){

        if(index >= this.length || index < 0) return false;

        if(index === 0) return this.unshift();

        if(index === this.length - 1) return this.pop();
        

        let previousNode = this.get(index - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;

        // let prevNode = this.get(index - 1);

        // let node = this.get(index);

        // prevNode.next = node.next;



        this.length--;

        return true;
    }

    reverse1(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }

    reverse(){
        if(!this.head) return false;
        if(!this.head.next) return this.head;
        let len = this.length - 1;


        // '1k' -> 1000  -> 'p' -> 456 -> 32 -> '2k' ->  null; 
        let node = this.head;
        [this.head,this.tail] = [this.tail , this.head]

        let nextNode  = null;
        let prevNode = null;

        



        while(len >= 0 ){
            //copy before overwriting
            nextNode =  node.next;  //1000  p

            //reverse
            node.next = prevNode;   //null  1k


            //step forward
            prevNode = node;  // 1k  1000


            node = nextNode; // 1000  

            len-=1;             
        
        }

        // this.head = prevNode;

        return this; 
    }


    traverse(){
        let valueArr = []
        let current = this.head;


        while(current){
            // console.log(current)
            valueArr.push(current.val)
            current = current.next;
        }

        if(valueArr.length <= 0){
            return undefined;
        }

        console.log(valueArr);
    }
}

const sll = new SLL();

sll.push("p")
sll.push(456)
sll.push(32)
sll.push("awe")
// console.log(sll.traverse());

sll.unshift(1000);

// console.log(sll.traverse());

sll.unshift("1k");

// console.log(sll.traverse());
// console.log(sll.get(2));
// console.log(sll.get(4));
sll.set(5,"2k");
// console.log(sll.traverse());
// sll.set(2,"6k");
// (sll.insert(6,"trial"));
// // console.log("tryCatch Start")

// // console.log(sll.traverse());
// sll.insert(3,"tryCatch");
// console.log(sll.traverse());

// console.log("tryCatch End");

// console.log(sll.remove(sll.length - 1));
// console.log(sll.next)
sll.traverse();

// console.log(sll.reverse());
sll.reverse()

sll.traverse();



