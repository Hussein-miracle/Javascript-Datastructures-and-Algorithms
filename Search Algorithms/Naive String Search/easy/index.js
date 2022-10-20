// 28. Implement strStr()

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0
const strStr2 = function(haystack,needle){
    if(haystack.length < 0 || needle.length < 0 || haystack.length > 5*(10**4) || needle.length > 5*(10**4)) return null;

    for(let i = 0;i <= haystack.length - needle.length ;i++){
        let sub = haystack.substring(i,i+needle.length);
        
        if(sub === needle && needle.startsWith(sub) && needle.endsWith(sub) && needle.includes(sub)){
            return i;
        }
    }


    return -1;
}


const strStr1 = function(haystack,needle){

    for(let i = 0;i <= haystack.length - needle.length ;i++){
        let count = 0;
        for(let k = 0;k < needle.length;k++){
            if(needle[k] === haystack[i+k]){
                count++;
            }
        }
        if(count === needle.length) return i;
    }


    return -1;
}

// console.log(strStr2( "hello",  "ll")) // 2
// console.log(strStr2( "aaaaa",  " bba")) // -1
// console.log(strStr2( "latteef",  "teef")) //3
// console.log(strStr2( "",  ""))//0
// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.


// 1668. Maximum Repeating Substring

// For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

// Given strings sequence and word, return the maximum k-repeating value of word in sequence.

 

// Example 1:

// Input: sequence = "ababc", word = "ab"
// Output: 2
// Explanation: "abab" is a substring in "ababc".
// Example 2:

// Input: sequence = "ababc", word = "ba"
// Output: 1
// Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".
// Example 3:

// Input: sequence = "ababc", word = "ac"
// Output: 0
// Explanation: "ac" is not a substring in "ababc". 
const maxRepeating = function(sequence, word) {
    if(sequence.length < 1 || word.length < 1 || sequence.length > 100 || word.length > 100) return null;
    let len = sequence.length;
    let count = 0;
    for(let i = 0;i < len ;i++){
        // let sub = sequence.substring(i,i+word.length);
        // sequence = sequence.slice(i)
        // if(sub === word){
        //     count++;
        // }
        
        // console.log(sequence);
        for(let j = 0; j <word.length;j++){
            if(word[j] !== sequence[i+j]){
                break;
            }

            if(j === word.length - 1) count++;
        }
    }

    return count;
};


// console.log(maxRepeating("ababc","ab")) //2
// console.log(maxRepeating("ababc", "ba")) //1

// console.log(maxRepeating("ababc","ac")) //0
// console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba","aaaba")) //5

// Constraints:

// 1 <= sequence.length <= 100
// 1 <= word.length <= 100
// sequence and word contains only lowercase English letters.


// 1408. String Matching in an Array
// Easy

// 483

// 70

// Add to List

// Share
// Given an array of string words. Return all strings in words which is substring of another word in any order. 

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

 

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
const stringMatch = function(words){
    let result = [];
    
    words.sort((a,b) => b.length - a.length);

    
    for(let i = 0 ; i < words.length;i++){

        let currentWord = words[i];


        for(let j = i+1 ; j < words.length;j++){


            if(currentWord.includes(words[j])){
                
                if(!result.includes(words[j])){
                    result.push(words[j])
                }
            }
        }
    }

    return result;
}
// console.log(stringMatch(["mass","as","hero","superhero"]))
console.log(stringMatch(["leetcode","et","code"]))
console.log(stringMatch(["blue","green","bu"]))
// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.