// MEDIUM

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.


// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

// Follow up: Could you solve the problem in linear time and in O(1) space?

//O(n+m)
const majorityElement = function(arr){
    let elements = []
    let frequency = {} ;
    // if(arr.length <= 1) return arr;

    for(const item of arr){
        frequency[item] = frequency[item] ? frequency[item]+=1 : 1;
    }
    
    for(const item in frequency){
        if(frequency[item] > (arr.length / 3)){
            elements.push(item);
        }
    }



    return elements;
}

// console.log(majorityElement([1,2])) // [1,2]
// console.log(majorityElement([1])) // [1]
// console.log(majorityElement([3,2,3])) // [3]
// console.log(majorityElement([3,2,2,1,2,4,3,3,3,4,44,4,5,5,5,5,5,6])) // [3]



// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.


//O(N*2)
const frequencySort = function(s){
    let arr = [];
    const freq = {};
    let str = [];

    if(s.length > 1){
        arr = s.split("");
        for(const char of arr){
            freq[char] = freq[char] ? freq[char]+=1 : 1; 
        }
    }else{
        return s;
    }
    const pusher = function(b,times){
        const arr = Array(times).fill(b);
        return arr;    
    }

    const entriesSorter = function(arr){
        for(let i = arr.length; i > 0 ; i--){
            for(let j = 0; j < i - 1  ;j++){
                if(arr[j][1] < arr[j+1][1]){
                    [arr[j] , arr[j+1]] = [arr[j+1],arr[j]]
                }
            }
        }
    
        return arr;
    }

    const unSortedEntries = Object.entries(freq);
    const entries = entriesSorter(unSortedEntries);

    for(let i = 0; i < entries.length ; i++){
        str.push( ...pusher( entries[i][0],entries[i][1] )  );
    }

    return str.join("");
}


// console.log(frequencySort("Aabb")) //"bbAa" // "bbaA"
// console.log(frequencySort("cccaaa")) //"cccaaa" // "aaaccc"
// console.log(frequencySort("tree")) //"eert" // "eetr"
// console.log(frequencySort("Arama")) //"aaArm" // "aarmA" // "aamrA"
// console.log(frequencySort("olebody")) //"eert" // "eetr"




// console.log(entriesSorter(  [  ['g',5]  , ['e',2] ,['p',2] ,['f',1] ,['k',8] ,['z',6] ]   ))
// console.log(entriesSorter([['g',3],['a',5],['e',4],['p',4],['f',1]]))

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

//O(n*2)
function topKFrequent(arr,n){
    let freq = {}
    let items = [];
    if(arr.length <= 1) return arr;

    for(const word of arr){
        freq[word] = freq[word] ? freq[word]+=1 : 1; 
    }

    
    const entries = Object.entries(freq);
    const entriesSorter = function(arr){

        for(let i = arr.length; i > 0 ; i--){
            for(let j = 0; j < i - 1  ;j++){
                if(arr[j][1] < arr[j+1][1]){
                    [ arr[j] ,  arr[j+1]   ] = [ arr[j+1] , arr[j] ]
                }
            }
        }
    
        return arr;
    }
    const sortedEntries = entriesSorter(entries);
    const entriesSorterLexi = function(arr){

        for(let i = arr.length; i > 0 ; i--){
            for(let j = 0; j < i - 1  ;j++){
                if(arr[j][1] === arr[j+1][1] && arr[j][0] > arr[j+1][0]){
                    [ arr[j] ,  arr[j+1]   ] = [ arr[j+1] , arr[j] ]
                }
            }
        }
    
        return arr;
    }

    const sortedEntriesLexi = entriesSorterLexi(sortedEntries);
    for(let i = 0;i < sortedEntriesLexi.length ; i++){
        if(items.length < n){
            items.push(sortedEntriesLexi[i][0])
        }else{break}
    }
    
    return items;
}

const words4 = ["i","love","leetcode","i","love","coding"]
; const k4 = 3
const words1 = ["i","love","leetcode","i","love","coding"]; const k1 = 2;
const words2 = ["the","day","is","sunny","the","the","the","sunny","is","is"]; const k2 = 4
const words3 = ["the","lolo","day","lmao","is","sunny","lmao","the","lmao","the","the","lmao","sunny","is","lmao","lolo","is","lolo"]; const k3 = 5


console.log(topKFrequent(words1,k1)) //["i","love"]
// console.log(topKFrequent(words2 , k2)) // ["the","is","sunny","day"]
// console.log(topKFrequent(words3 , k3)) 
console.log(topKFrequent(words4 , k4)) // ["i","love","coding"]
