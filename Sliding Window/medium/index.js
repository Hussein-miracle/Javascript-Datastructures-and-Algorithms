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

var lengthOfLongestSubstring = function(s) {
    if(s.length <=0) return s;
    let string = "";
    let tempStr = "";
    let len = 0;
    let str = [];
    let start = 0;
    let scout = 1;
    let end = s.length ;
    while(start<end && scout < end){
        // "pwwkew"
        // if(s[start] !== s[scout]  && s[start] !==  )){
        //     string+=s[start];
        //     start = scout;
            
            
        // }else{
        //     tempStr = string;
        //     start=scout+1;
        //     string="";
            
        // }
        scout++;
        // len = Math.max(string.length,tempStr.length);
    }
    // for(let i =0;i<s.length;i++){
    //     if(!str.includes(s[i])){
    //         str.push(s[i]);
    //     }
    // }
    console.log(tempStr);

    return len;
};
// console.log(lengthOfLongestSubstring("abcabcbb"))//3
// console.log(lengthOfLongestSubstring("bbbbb"))//1
// console.log(lengthOfLongestSubstring("pwwkew"))//
// Constraints:

// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.





// Q2
`
438. Find All Anagrams in a String
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
const findAnagrams = function(s, p) {
    let indexArr = [];
    let string = s.split("");
    let len = p.split("").length;
    for(let i= 0;i < string.length - len + 1;i++){
        let str = string.slice(i,i+len).join("");
        // "abab" , "äb"
        console.log(str, p)
        // for(let j = i;j < len;j++){
        //     if(p.includes(str[j])){
        //         indexArr.push(j);
        //     }else{
        //         break;
        //     }

        // }
        if(str === p || str.includes(p)){
            indexArr.push(i);
        }else if(str === p.split("").reverse().join("")){
            // indexArr.push(i);
        }else if(str.split("").reverse().join("") === p){
            // indexArr.push(i)
        }

    }

    return indexArr;
};

// Constraints:

// 1 <= s.length, p.length <= 3 * 10^4
// s and p consist of lowercase English letters.
// console.log(findAnagrams("abab", "ab"))//[0,1,2]
// console.log(findAnagrams("cbaebabacd", "abc"))//[0,6]


//Q3 // 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold // SOLVED

const numOfSubarrays1 = function(arr, k, threshold) {
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



const numOfSubarrays = function(arr, k, threshold) {
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
