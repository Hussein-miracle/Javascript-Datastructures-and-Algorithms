"use strict";

import ascii from "../../ASCII/index.mjs";

console.log(ascii);

// Q1: 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


const merge = function(nums1, m, nums2, n) {

    for(let i = 0;i < nums1.length ;i++){
        
            if(nums1[i] > nums2[i]  && nums2[i] !== 0){
                [nums1[i],nums2[i]] = [nums2[i] , nums1[i]];
            }

            if(nums1[i] === 0){
                for (let index = i; index < nums1.slice(i).length; index++) {
                    [nums1[index],nums2[index]] = [nums2[index] , nums1[index]];
                    
                }
            }
        
    }

    let k = nums1.length-n;

    let u = 0;
    while(k < nums1.length){
        nums1[k] = nums2[u] ;
        u++;
        k++;
    }


    
    return nums1.sort((a,b) => a - b);
};



// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109'

// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3)) // output:[1,2,2,3,5,6]
// console.log(merge([2,3,4,6,0,0,0],4,[2,5,6,9],4)) // output:[2,2,3,4,5,6,6,9]
// console.log(merge([1],1,[],0)) // output: [1]
// console.log(merge([0],0,[1],1)) // output: [1]

// Q2: 125. Valid Palindrome


const validPalindrome = function(str){
    const trueString = str.toLowerCase().replace(/([`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ])/g, "").split("").join("");

    const reversedString = str.toLowerCase().replace(/([`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ])/g, "").split("").reverse().join("");

    if(trueString !== reversedString){
        return false;
    }


    return true;
}


const validPalindrome2 = function(str){
    const trueString = str.toLowerCase().replace(/([`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ])/g, "");

    const reversedString = str.toLowerCase().replace(/([`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ])/g, "");

    let left = 0;
    let right = trueString.length - 1;

    while(left <= right){
        if(trueString[left] !== reversedString[right]){
            return false;
        }
        left++;
        right--;
    }


    return true;
}



// console.log(validPalindrome2("A man, a plan, a canal: Panama")) //output:true //"amanaplanacanalpanama" is a palindrome.
// console.log(validPalindrome2("race a car")) // false
// // // Explanation: "raceacar" is not a palindrome.
// console.log(validPalindrome2("")) // // Output: true
// console.log(validPalindrome2("ab@a ")) // // Output: true
// console.log(validPalindrome2("Marge, let's \"[went].\" I await {news} telegram.")) // // Output: true



// Q3: 27. Remove Element

//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).


const removeElement = function(nums, val) {
    let arr = [...nums];
    
    let left= 0;
    let right = nums.length-1;

    while(right > left ){

        if(nums[left] === val){
            nums.splice(left,1);
        }else if(arr[right] === val){
            nums.splice(right,1);
        }else if(arr[left] !== val){
            left++;
        }else if(arr[right] !== val){
            right++;
        }
    }
    

    

    return nums.length;
};

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

// console.log(removeElement([3,2,2,3],3)) //output:[2,2,_,_]
// console.log(removeElement([0,1,2,2,3,0,4,2],2)) //output:[0,1,4,0,3,_,_,_]
// console.log(removeElement([0,1,2,2,3,0,4,2],2)) //output:[0,1,4,0,3,_,_,_]




// Q4:
// 349. Intersection of Two Arrays

const intersection = function(nums1, nums2) {
    let arr =[]
    for(let i = 0 ;i < nums1.length ;i++){
        for(let j = 0;j < nums2.length ;j++ ){
            if(nums1[i] === nums2[j] && !(arr.includes(nums1[i]))){
                arr.push(nums1[i]);
                
            }
        };
    }

    return arr;
}


// console.log(intersection([1,2,2,1],[2,2]) ) //[2]
// console.log(intersection([4,9,5],[9,4,9,8,4]) ) // [4,9]


//extra

// 350. Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
const intersection2 = function(nums1, nums2) {
    let arr =[]
    
    for(let i = 0 ;i < nums1.length ;i++){
        for(let j = 0;j < nums2.length ;j++ ){
            
            if(nums1[i] === nums2[j]){
                arr.push(nums1[i]);
                nums1.splice(nums1[i],1)
                nums2.splice(nums2[j],1)
            }

            
        };

        
    }

    return arr;
}


// console.log(intersection2([1,2,2,1],[2,2]) ) //[2]
// console.log(intersection2([4,9,5],[9,4,9,8,4]) ) // [4,9]

