const mergeSortedArray = (arr1, arr2) => {
  const merged = [...arr1,...arr2].sort((a,b) => a - b);
  return merged;
};

console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]));


const mergeSortedArrayIter = (arr1, arr2) => {
  const merged = [];

  
  return merged;
};

console.log(mergeSortedArrayIter([0, 3, 4, 31], [4, 6, 30]));
