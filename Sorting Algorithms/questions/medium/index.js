// 2191. Sort the Jumbled Numbers

// You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled decimal system. mapping[i] = j means digit i should be mapped to digit j in this system.

// The mapped value of an integer is the new integer obtained by replacing each occurrence of digit i in the integer with mapping[i] for all 0 <= i <= 9.

// You are also given another integer array nums. Return the array nums sorted in non-decreasing order based on the mapped values of its elements.

// Notes:

// Elements with the same mapped values should appear in the same relative order as in the input.
// The elements of nums should only be sorted based on their mapped values and not be replaced by them.
 
// console.log("medium sort")
// Example 1:
                //   0|1|2|3|4|5|6|7|8|9
// Input: mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]
// Output: [338,38,991]
// Explanation: 
// Map the number 991 as follows:
// 1. mapping[9] = 6, so all occurrences of the digit 9 will become 6.
// 2. mapping[1] = 9, so all occurrences of the digit 1 will become 9.
// Therefore, the mapped value of 991 is 669.
// 338 maps to 007, or 7 after removing the leading zeros.
// 38 maps to 07, which is also 7 after removing leading zeros.
// Since 338 and 38 share the same mapped value, they should remain in the same relative order, so 338 comes before 38.
// Thus, the sorted array is [338,38,991].
// Example 2:
                 //  0|1|2|3|4|5|6|7|8|9
// Input: mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]
// Output: [123,456,789]
// Explanation: 789 maps to 789, 456 maps to 456, and 123 maps to 123. Thus, the sorted array is [123,456,789].

const sortJumbled = function(mapping, nums) {
    const newNums = [...nums];
    
    const swap = (arr,i,j) => {
        [arr[i] , arr[j]] =[arr[j] , arr[i]];
    };
    let stringedNums = nums.map( num => num.toString())
    let results1  = [];
    let hash = new Map();
    
// mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]))
    for(let i = 0; i < nums.length ;i++){
        let stringedArr = stringedNums[i];

        let tempRes = [];

        for(let j = 0;j < stringedArr.length ;j++){
            tempRes.push(mapping[+stringedArr[j]])
        }

        results1.push(+tempRes.join(""));
        // hash[+tempRes.join("")] = nums[i];
    }
    // let results2  = Array(results1.length);
    // console.log(nums)
    // console.log(results1)
    // console.log(hash)
    // console.log(results2)

};

// console.log(sortJumbled(mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]))
// console.log(sortJumbled( mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]))
// Constraints:

// mapping.length == 10
// 0 <= mapping[i] <= 9
// All the values of mapping[i] are unique.
// 1 <= nums.length <= 3 * 104
// 0 <= nums[i] < 109







// 1630. Arithmetic Subarrays

// A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same. More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.

// For example, these are arithmetic sequences:

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// The following sequence is not arithmetic:

// 1, 1, 2, 5, 7
// You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries, where the ith query is the range [l[i], r[i]]. All the arrays are 0-indexed.

// Return a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form an arithmetic sequence, and false otherwise.

// Example 1:

// Input: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]
// Output: [true,false,true]
// Explanation:
// In the 0th query, the subarray is [4,6,5]. This can be rearranged as [6,5,4], which is an arithmetic sequence.
// In the 1st query, the subarray is [4,6,5,9]. This cannot be rearranged as an arithmetic sequence.
// In the 2nd query, the subarray is [5,9,3,7]. This can be rearranged as [3,5,7,9], which is an arithmetic sequence.
// Example 2:

// Input: nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]
// Output: [false,true,false,false,true,true]
const checkArithmeticSubarrays = function(nums, l, r) {
    
};
console.log(checkArithmeticSubarrays(nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]))
console.log(checkArithmeticSubarrays(nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]))

// Constraints:

// n == nums.length
// m == l.length
// m == r.length
// 2 <= n <= 500
// 1 <= m <= 500
// 0 <= l[i] < r[i] < n
// -105 <= nums[i] <= 105










// 1329. Sort the Matrix Diagonally

// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

// Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

// Example 1:
// Input: mat = [[3,3,1,1],
//              [2,2,1,2],
//             [1,1,1,2]]
// Output: [[1,1,1,1]
//         ,[1,2,2,2],
//         [1,2,3,3]]
// Example 2:
// Input: mat = [[11,25,66,1,69,7],
//              [23,55,17,45,15,52],
//              [75,31,36,44,58,8],
//              [22,27,33,25,68,4],
//              [84,28,14,11,5,50]]
// Output: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]
const diagonalSort = function(mat) {
    
};

// console.log(diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]]));

// console.log(diagonalSort([[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]));
// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// 1 <= mat[i][j] <= 100









// 791. Custom Sort String

// You are given two strings order and s. All the words of order are unique and were sorted in some custom order previously.

// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

// Return any permutation of s that satisfies this property.

 

// Example 1:

// Input: order = "cba", s = "abcd"
// Output: "cbad"
// Explanation: 
// "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
// Example 2:

// Input: order = "cbafg", s = "abcd"
// Output: "cbad"
 

// Constraints:

// 1 <= order.length <= 26
// 1 <= s.length <= 200
// order and s consist of lowercase English letters.
// All the characters of order are unique.













// 1387. Sort Integers by The Power Value
// The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:
// if x is even then x = x / 2

// if x is odd then x = 3 * x + 1

// For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).

// Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order.

// Return the kth integer in the range [lo, hi] sorted by the power value.

// Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in a 32-bit signed integer.

 

// Example 1:

// Input: lo = 12, hi = 15, k = 2
// Output: 13
// Explanation: The power of 12 is 9 (12 --> 6 --> 3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1)
// The power of 13 is 9
// The power of 14 is 17
// The power of 15 is 17
// The interval sorted by the power value [12,13,14,15]. For k = 2 answer is the second element which is 13.
// Notice that 12 and 13 have the same power value and we sorted them in ascending order. Same for 14 and 15.
// Example 2:

// Input: lo = 7, hi = 11, k = 4
// Output: 7
// Explanation: The power array corresponding to the interval [7, 8, 9, 10, 11] is [16, 3, 19, 6, 14].
// The interval sorted by power is [8, 10, 11, 7, 9].
// The fourth number in the sorted array is 7.
 

// Constraints:

// 1 <= lo <= hi <= 1000
// 1 <= k <= hi - lo + 1