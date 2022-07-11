class QueueNode {
  constructor(val,priority){
    this.priority = priority;
    this.val = val;
  }
}


class PriorityQueue{
  constructor(){
    this.values = [];
  }


  enqueue(val,priority){
    const node = new QueueNode(val,priority);
    this.values.push(node);
    this.bubbleUp();
    // console.log(this.values)
    // console.log(this)/\
    // return this.values;
  }


  bubbleUp(){
    let index = this.values.length - 1;
    const element = this.values[index];

    while(index > 0){
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if(element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;

    }

    
  }


  dequeue(){

  }

  sinkDown(){
    
  }
}



const ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
ER.enqueue("multiple gunshot",0)

console.log(ER.values)