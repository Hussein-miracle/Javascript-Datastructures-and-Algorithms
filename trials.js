const getTwoSum = (n) => {
    let numArr = [];
    let result = [];

    for(let i = 1 ; i < n+1 ; i++){

            numArr.push(i);

    }


    for(let j = 0; j < numArr.length ; j++){
        for(let k = j+1 ; k < numArr.length ; k++){
            if(numArr[j] + numArr[k] === n && !(numArr[j] % 10 === 0) && !(numArr[k] % 10 === 0)){
                result.push([numArr[j] ,numArr[k] ] )
                
                
                // return result;

                
            }
        }
    }

    return result[Math.floor(Math.random() * result.length) + 1];
}

// console.log(getTwoSum(12));
// console.log(getTwoSum(104));

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
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
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
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
    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}
//  [1,0,1]


 const list = new SinglyLinkedList();
        // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
 let arr = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
 for(let i = 0;i < arr.length;i++ ){
     list.push(arr[i])
 }
//  list.push(1)
//  list.push(0)
//  list.push(1)
// console.log(list)

 
var getDecimalValue = function(head) {
    let node = head;
    let newNode = head;
    let count = 0;
    let result = 0;
    let res = 0;
    
    while(node.next){
        count++;
        node = node.next;
    }
    
    // console.log(count)

    
    let index = 0;

    while(newNode){


        result+= newNode.val * (2**(count - index));

        index++;

        newNode = newNode.next;
    }
    
    return result;
};

console.log(getDecimalValue(list.head))

