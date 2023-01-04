class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}


class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      this.tail = this.head;
    }else{

    }


    this.length++;

    return this;
  }


  prepend(value){
    
  }


}