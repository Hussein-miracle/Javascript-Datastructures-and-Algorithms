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
    const min = this.values[0];
    const end = this.values.pop();
    const len = this.values.length;

    if(len > 0){
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[index];


    while(true){
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      let leftChild = undefined;
      let rightChild = undefined;
      let swapIndex = null;

      if(leftChildIndex < length){
        leftChild = this.values[leftChildIndex];

        if(leftChild.priority < element.priority){
          swapIndex = leftChildIndex;
        }
      }

      if(rightChildIndex < length){
        rightChild = this.values[rightChildIndex];

        if((swapIndex === null && rightChild.priority < leftChild.priority) || (swapIndex!== null && rightChild.priority < leftChild.priority)) swapIndex = rightChildIndex;
      }


      if(swapIndex === null) break;

      index = swapIndex;
    }
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