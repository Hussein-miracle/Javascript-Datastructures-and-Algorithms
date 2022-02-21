// 326. Power of Three
// Easy

// 770

// 98

// Add to List

// Share
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
var isPowerOfThree = function(n) {
    if(n <= 0) return !true;
     let i = 0
        while(i < n){
            if(3**i < n){
                i += 1
            }else if(3**i == n){
                return true
            }else{
                return false}
        }
};

// Constraints:

// -231 <= n <= 231 - 1



// 342. Power of Four
// Easy

// 1337

// 280

// Add to List

// Share
// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
var isPowerOfFour = function(n) {

    if(n <= 0) return !true;
        let i = 0
        while(i < n){
            if(4**i < n){
                i += 1
            }else if(4**i === n){
                return true
            }else{
                return false}
        }

};

// Constraints:

// -231 <= n <= 231 - 1
// 509. Fibonacci Number
// Easy

// 2941

// 254

// Add to List

// Share
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

var fib = function(n) {
    if(n===0) return 0;
    if(n === 1) return 1;
    
    return fib(n - 1) + fib(n-2);
};