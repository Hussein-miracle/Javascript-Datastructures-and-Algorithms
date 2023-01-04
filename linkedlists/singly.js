class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      const temp = this.tail;
      temp.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      const current = this.head;
      node.next = current;

      this.head = node;
    }

    this.length++;

    return this;
  }

  insert(index, value) {
    const node = new Node(value);
    let count = 0;
    let current = this.head;

    if(index >= this.length){
      return this.append(value);
    }


    if (index > 0) {
      while (count !== index - 1) {
        current = current.next;
        count++;
      }

      const next = current?.next;

      node.next = next || null;

      current.next = node;
      this.length++;
    }else{
      this.append(value);
    }

    return this;
  }


  insertByAndrei(index,value){
    const node = new Node(value);

    if(index >= this.length){
      return this.append(value);
    }

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    node.next = holdingPointer;
    leader.next = node;


    this.length++;
    return this;
  }

  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  printList(){
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }


  remove(index){
    if(index >= this.length || index < 0){
      return false;
    }
    const leader = this.traverseToIndex(index - 1);
    const followers = leader.next.next;
    leader.next = followers;
    this.length--;
    return this;
  }
}

const list = new LinkedList();

console.log(list.append(12));
console.log(list.append(133));
console.log(list.append("2233"));
console.log(list.append(+"334"));
console.log(list.append("pool"));
console.log(list.prepend("fly"));

console.log(list.insertByAndrei(1, "king"));


console.log(list.printList());
console.log(list.remove(1));
console.log(list.printList());
