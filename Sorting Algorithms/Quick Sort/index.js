// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])




function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
} 
        
// quickSort([100,-3,2,4,6,9,1,2,5,3,23]) 




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1



function quickSort1(arr){
  if(arr.length <=1) return arr;

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [],same = [],more = [];

  for(let i = 0; i< arr.length ; i++){
    if(arr[i] === pivot){
      same.push(arr[i])
    }else if(arr[i] > pivot){
      more.push(arr[i])
    }else{
      less.push(arr[i]);
    }
  }

  return quickSort1(less).concat(same,quickSort1(more));
}




