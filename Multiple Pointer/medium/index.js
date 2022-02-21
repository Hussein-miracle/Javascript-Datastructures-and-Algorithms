// Q1

// 167. Two Sum II - Input Array Is Sorted

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.
const numsArray = [1,3,7,9,2];
const targetToFind = 11;

const findTwoSum = function(nums, target) {
  const numsMap = {};
  
  for(let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];//undefined
    console.log(numsMap);
    if(currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p]; // 11 - 1 ,11 - 3 ,11 - 7, 11 - 9,11 - 2;
      numsMap[numberToFind] = p; // "10":0 , "8":1, "4":2,"2":3,"9":4
    }
  }
  
  return null;
}

// console.log(findTwoSum(numsArray, targetToFind));

const twoSum = function(numbers, target) {
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;
    
    while(leftIndex <= rightIndex){
        if(numbers[leftIndex] + numbers[rightIndex] === target){
            return [leftIndex+1,rightIndex+1];
        }else if(numbers[leftIndex] + numbers[rightIndex] > target){
            rightIndex--;
        }else if(numbers[leftIndex] + numbers[rightIndex] < target){
            leftIndex++;
        }
    }
};

// console.log(twoSum([2,7,11,15], 9)) //[1,2]
// console.log(twoSum([2,3,4],6)) //[1,3]
// console.log(twoSum([-1,0],-1)) //[1,2]
// console.log(twoSum([5,25,75],100)) //[2,3]

// // Q2:
// 18. 4Sum

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Accepted
// 542,730
// Submissions
// 1,466,106

// Q3:


// 633. Sum of Square Numbers

// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.


const  judgeSquareSum = function(c) {
    left = 0;
    right = Math.floor(Math.sqrt(c));

    while(left <= right){
        if(left ** 2 + right **2 === c ){
            return true;
        }else if(left ** 2 + right **2 > c ){
            right--;
        }else if(left ** 2 + right **2  < c ){
            left++;
        }
    }


    return false;
};

console.log(judgeSquareSum(5)) //true
console.log(judgeSquareSum(3)) //false
console.log(judgeSquareSum(2)) //true;



// Q4:
// 923. 3Sum With Multiplicity
// Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.

// As the answer can be very large, return it modulo 109 + 7.

// Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// Output: 20
// Explanation: 
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.
// Example 2:

// Input: arr = [1,1,2,2,2,2], target = 5
// Output: 12
// Explanation: 
// arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
// We choose one 1 from [1,1] in 2 ways,
// and two 2s from [2,2,2,2] in 6 ways.
const threeSumMulti = function(arr, target) {
    
};

// Constraints:

// 3 <= arr.length <= 3000
// 0 <= arr[i] <= 100
// 0 <= target <= 300



// console.log(threeSumMulti([1,1,2,2,3,3,4,4,5,5], 8)); // Output: 20
// Explanation: 
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.


// console.log(threeSumMulti([1,1,2,2,2,2],5)); // Output: 12
// Explanation: 
// arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
// We choose one 1 from [1,1] in 2 ways,
// and two 2s from [2,2,2,2] in 6 ways.