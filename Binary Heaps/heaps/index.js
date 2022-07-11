class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    // console.log("MaxBinaryHeap ~ bubbleUp ~ idx", idx);
    const el = this.values[idx];

    while (idx > 0) {
      // console.log(this.values, "values before insert");
      let parentIndex = Math.floor((idx - 1) / 2);
      // console.log("MaxBinaryHeap ~ bubbleUp ~ parentIndex", parentIndex);
      let parent = this.values[parentIndex];
      // console.log("MaxBinaryHeap ~ bubbleUp ~ parent", parent);
      if (el <= parent) break;
      this.values[parentIndex] = el;
      this.values[idx] = parent;
      // console.log(this.values, "values afta insert");
      idx = parentIndex;
      // console.log("MaxBinaryHeap ~ bubbleUp ~ idx", idx);
    }
  }
}

// const maxheap = new MaxBinaryHeap();

// maxheap.insert(39);
// maxheap.insert(41);
// maxheap.insert(55);
// maxheap.insert(41);
// maxheap.insert(39);
// maxheap.insert(33);
// maxheap.insert(34);
// maxheap.insert(18);
// maxheap.insert(27);
// maxheap.insert(12);
// maxheap.insert(55);
// maxheap.insert(79);

// console.log(maxheap.values);



class MinBinaryHeap{
  constructor(){
    this.values = [];
  }


  insert(val){
    this.values.push(val);
    this.bubbleUp();
  }


  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while(idx > 0){
      let parentIndex = Math.floor((idx - 1) / 2);

      let parent = this.values[parentIndex];

      if(element >= parent) break;

      this.values[parentIndex] = element;
      this.values[idx] = parent;

      idx = parentIndex; 
    }
  }
}


const minheap = new MinBinaryHeap();

minheap.insert(39);
minheap.insert(41);
minheap.insert(55);
minheap.insert(41);
minheap.insert(39);
minheap.insert(33);
minheap.insert(34);
minheap.insert(18);
minheap.insert(27);
minheap.insert(12);
minheap.insert(55);
minheap.insert(79);

// console.log(minheap.values);