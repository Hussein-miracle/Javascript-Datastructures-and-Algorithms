// 2089. Find Target Indices After Sorting Array

const targetIndices = function(nums,target){
    if(nums.length < 1 || nums.length > 100 || target < 1 || target > 100) return nums;
    let res = [];
    nums.sort((a,b) => a-b);
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === target && !(nums[i] < 1 || nums[i] > 100) ) {
            res.push(i)
        }
    }


    return res;
}


// console.log(targetIndices([1,2,5,2,3],2)) //[1,2]
// console.log(targetIndices([1,2,5,2,3], 3)) //[3]
// console.log(targetIndices([1,2,5,2,3],5))//[4]



// 1608. Special Array With X Elements Greater Than or Equal X

// You are given an array nums of non-negative integers. 

// nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

// Notice that x does not have to be an element in nums.

// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

 

// Example 1:

// Input: nums = [3,5]
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
// Example 2:

// Input: nums = [0,0]
// Output: -1
// Explanation: No numbers fit the criteria for x.
// If x = 0, there should be 0 numbers >= x, but there are 2.
// If x = 1, there should be 1 number >= x, but there are 0.
// If x = 2, there should be 2 numbers >= x, but there are 0.
// x cannot be greater since there are only 2 numbers in nums.
// Example 3:

// Input: nums = [0,4,3,0,4]
// Output: 3
// Explanation: There are 3 values that are greater than or equal to 3.
const SpecialArr = function(nums){
    if(nums.length < 1 || nums.length > 100) return nums;

    let left = 0;
    let right = nums.length - 1;
    let count = 0;
    let len = nums.length;
    
    

    while(left <= right){
        if(nums[left] === 0){
            nums.splice(left,1);
            left = left;
        }else{
            left++;
        }

    }
    
    len = nums.length;
    let start = 0;
    let end = nums.length - 1;

    while(start <= end){
        
        if(nums[start] >= len  && len !== 0){
            count++;
        }
        start++;
    }


    if(count > 0){
        return count;
    }else{
        return -1;
    }

}

console.log(SpecialArr([0,4,3,0,4]))  // 3
console.log(SpecialArr([0,0,1,5,2] )) // -1
console.log(SpecialArr([3,5]) )      // 2


// Constraints:
// 0 <= nums[i] <= 1000




// 1351. Count Negative Numbers in a Sorted Matrix

const countNegative = function(grid){
    if( grid.length < 1) return grid;
    let count = 0;
    let arr = grid.flat();

    let array = arr.sort((a,b) => a-b);

    let end = array.length-1;
    let  start = 0;
    while(start <= end){

        if(array[start] < 0){
            count++;
        }
        start++;
    }

    

    return count;
}


// console.log(countNegative([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])) //8
// console.log(countNegative([[3,2],[1,0]])) //0


