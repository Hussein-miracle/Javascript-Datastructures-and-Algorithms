// Q1
// 3. Longest Substring Without Repeating Characters

`Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3

Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.`

var lengthOfLongestSubstring = function(s) {    /// GOT A BUG
    if(s.length <=0) return null;
    let string = [];
    let index = 0;
    let tempStr = [];
    let start = 0;
    let scout = 1;
    let current = {};

    // "pwwwkereetwerk"
    for(let i= 0; i < s.length ; i++ ){
        current[s[i]] =  (current[s[i]] || 0) + 1 ;
    }

    console.log(current);
    // while(index <= s.length){
    //     // console.log(string.length)
    //     if(!tempStr.includes(s[start]) ){
    //         tempStr.push(s[start]);
    //         start++;

    //         scout++;

    //     }else{
    //         tempStr = [];
    //         start = scout;
    //         scout++;
    //     }

    //     string.push(tempStr.length);
    //     index++;
    // }
    
    // let sortedStr = string.sort((a,b) => b - a);

    // return sortedStr[0];
};
// console.log(lengthOfLongestSubstring("abcabcbb"))//3
// new Array().
console.log(lengthOfLongestSubstring("bbbbb"))//1
// console.log(lengthOfLongestSubstring("pwwkew"))//3
// console.log(lengthOfLongestSubstring("pwwwkereetwerk"))//5
// Constraints:

// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.





// Q2
const q2 = `438. Find All Anagrams in a String
Medium
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".`

const findAnagrams = function(s, p) { /// NEED TO REFACTOR // TOO SLOW
    let indexArr = [];
    let  pHash = {};

    for(const char of p){
        pHash[char] = pHash[char] ? pHash[char]+=1 : 1
    }

    for(let i = 0;i < s.length - p.length + 1;i++){

        let count = 0;

        let str = s.substring(i,i+p.length);
        // console.log(str)
        let hash = {};
        //O(N(S+M))
        for(const char of str){
            hash[char] = hash[char] ? hash[char]+=1 : 1;
        }

        // console.log(hash,pHash)
        for(const char in hash){
            if(hash[char]  === pHash[char]  && !(hash[char] > 1)){
                count++;
            }else if(hash[char]  === pHash[char]  && (hash[char] > 1)){
                count += hash[char];
            }
            // console.log(hash , count)
        }


        if(count === p.length){
            indexArr.push(i)
        }
        
    }

    return indexArr;
};

// Constraints:

// 1 <= s.length, p.length <= 3 * 10^4
// s and p consist of lowercase English letters.
// console.log(findAnagrams("abab", "ab"))//[0,1,2]
// console.log(findAnagrams("cbaebabacd", "abc"))//[0,6]
// console.log(findAnagrams("baa","aa"))//[1]
// console.log(findAnagrams("baaaccc","ccc"))//[4]
// console.log(findAnagrams("baacaaa","aaa"))//[4]


//Q3 // 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold // SOLVED

const numOfSubarrays1 = function(arr, k, threshold) { /// WAY FUCKING SLOW
    if(arr.length < 1 || k < 1 ||  arr.length > 10**5 || threshold < 0) return null;
    let subArraysCounter = 0;



    const checkSumAvg = function(arr){
        avg = arr.reduce((acc,item) => acc+item,0)  / arr.length;
        
        return avg;    
    }

    


    for(let i = 0;i < arr.length - k + 1;i++){

        // if(arr[i] > 10**4) return null;
        let array = arr.slice(i,i+k) ;
        console.log(array)
        // let tempArray = ;
        let res = checkSumAvg(array);
        // arr.splice(i,1)
        // console.log(res);
        if(res >= threshold ){
            subArraysCounter++;
        }
    }


    return subArraysCounter;
};



const numOfSubarrays = function(arr, k, threshold) { // OPTIMAL SOLUTION
    if(arr.length < 1 || k < 1 ||  arr.length > 10**5 || threshold < 0) return null;
    let subArraysCounter = 0;
    let sum = 0;

    for(let j = 0;j < k ;j++){
        sum+=arr[j];
    }

    for(let i = k ;i < arr.length + 1;i++){

        if((sum / k)  >= threshold)subArraysCounter++;
        
        sum = sum + arr[i] - arr[i - k];
    }


    return subArraysCounter;
};



// console.log(numOfSubarrays([2,2,2,2,5,5,5,8],  3, 4))//3   [2,5,5],[5,5,5] and [5,5,8] 
// console.log(numOfSubarrays( [11,13,17,23,29,31,7,5,2,3],3,5))//6
// console.log(numOfSubarrays( [2852,5203,9375,3209,932,9529,4416,3525,2435,3131,3232,2047,2871,3550,5923,4553,2086,5990,4580,2948,8522,4850,3597,744,6963,8126,2153,258,1955,3169,3165,4334,791,5342,4348,5404,8531,1045,7767,9842],
//     17,
//     65))//24
