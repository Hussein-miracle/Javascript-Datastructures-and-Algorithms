// MEDIUM

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.


// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

// Follow up: Could you solve the problem in linear time and in O(1) space?


const majorityElement = function(arr){
    let elements = []
    let frequency = {} ;
    // if(arr.length <= 1) return arr;

    for(const item of arr){
        frequency[item] = frequency[item] ? frequency[item]+=1 : 1;
    }

    console.log(frequency ,arr.length , (arr.length/3))
    for(const item in frequency){
        if(frequency[item] > (arr.length / 3)){
            elements.push(item);
        }
    }



    return elements;
}

// console.log(majorityElement([1,2])) // [1,2]
console.log(majorityElement([1])) // [1]
// console.log(majorityElement([3,2,3])) // [3]
// console.log(majorityElement([3,2,2,1,2,4,3,3,3,4,44,4,5,5,5,5,5,6])) // [3]



// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

 

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
 

// Constraints:

// 1 <= s.length <= 5 * 105
// s consists of uppercase and lowercase English letters and digits.






// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 

// Constraints:

// 1 <= words.length <= 500
// 1 <= words[i] <= 10
// words[i] consists of lowercase English letters.
// k is in the range [1, The number of unique words[i]]
 

// Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?