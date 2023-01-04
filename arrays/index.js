const mergeSortedArrayFn = (arr1, arr2) => {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  return merged;
};

// console.log(mergeSortedArrayFn([0, 3, 4, 31], [4, 6, 30]));

const mergeSortedArrayIter = (arr1, arr2) => {
  const merged = [];
  let [i, j] = [0, 0];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else if (arr1[i] === arr2[j]) {
      merged.push(arr1[i]);
      merged.push(arr2[j]);
      j++;
      i++;
    }
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  return merged;
};

// console.log(mergeSortedArrayIter([0, 3, 4, 31], [4, 6, 30]));
// console.log(mergeSortedArrayIter( [0, 3, 4, 31,55,78], [4, 6,8,9,22, 30]));
// console.log(mergeSortedArrayIter([0, 3, 4, 31], [4, 6, 30]));

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function (nums, target) {

//   if(nums.length < 2){
//     return nums[0];
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const num1 = nums[i];
//     for (let j = 1; j < nums.length; j++) {
//       const num2 = nums[j];

//       if (num1 + num2 === target) {
//         return [i, j];
//       }
//     }
//   }
// };

const twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    // if(!hash[diff]){
    //   // hash[diff] = i;
    // }
    
    // else{

    //   return [hash[num],i];
    // }
  }


};

console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9)));  // ? [0,1]
console.log(twoSum((nums = [3, 2, 4]), (target = 6))); // ? [1,2]
console.log(twoSum(nums = [3,3], target = 6)); // ? [0,1]
