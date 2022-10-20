"use strict";


// EASY

//O(N+S+M)

const same1 = function(array1,array2){
    if(array1.length !== array2.length) return false;
    let arr1 = array1.sort((a,b) => a-b);
    
    let arr2 = array2.sort((a,b) => a-b);

    for(let i = 0;i< array1.length;i++){
        
        if(arr1[i]**2 !== arr2[i]){
            return false
        }
    }

    return true;
    
}


const same = function(array1,array2){
    if(array1.length !== array2.length)  return false;
    let frequencyResult1 = {};
    let frequencyResult2 = {};
    if(array1.length !== array2.length) return false;

    for(const item of array1){
        frequencyResult1[item] = frequencyResult1[item] ? frequencyResult1[item] += 1 : 1;
    }


    for(const item of array2){
        frequencyResult2[ item] = frequencyResult2[item] ? frequencyResult2[item] += 1 : 1;
    }

    // console.log(frequencyResult2);

    for(const item in frequencyResult1){
        if(!(item**2 in frequencyResult2) ){
            return false;
        }

        if(frequencyResult1[item] !== frequencyResult2[item**2]){
            return false;
        }
    }


    return true;
}


console.log(same([1,2,3],[4,1,9])); //true
console.log(same([1,2,3],[1,9])); // false
console.log(same([1,2,1],[4,4,1])); //false



//O(N+S+M)
const validAnagram = function(arr1,arr2){
    let frequencyResult1 = {};
    let frequencyResult2 = {};

    if(arr1.length !== arr2.length) return false;

    for(const item of arr1){
        frequencyResult1[item] = frequencyResult1[item] ? frequencyResult1[item]+=1 : 1
    }

    for(const item of arr2){
        frequencyResult2[item] = frequencyResult2[item] ? frequencyResult2[item]+=1 : 1
    }



    for(const i in frequencyResult1){
        if(frequencyResult1[i] !== frequencyResult2[i]){
            return false;
        }
    }


    return true;
}

// console.log(validAnagram("","")) //true
// console.log(validAnagram("aaz","zza")) //false
// console.log(validAnagram("anagram","nagaram")) //true
// console.log(validAnagram("rat","car")) //false
// console.log(validAnagram("awesome","awesom" ) ) //false
// console.log(validAnagram("qwerty", "qeywrt")) //true
// console.log(validAnagram("texttwisttime","timetwisttext")) //true








// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

//O(N*2)
const uniqueNumberOfOccurence = function(arr){
    let frequency = {};
    for(const item of arr){
        frequency[item] = frequency[item] ? frequency[item]+=1 : 1;
    }

    // console.log(frequency);
    let counts = [];
    for(const item in frequency){
        counts.push(frequency[item]);
    }
    // console.log(counts);

    for(let i = 0;i < counts.length ; i++){
        for(let k = i+1 ; k < counts.length ; k++){

            if(counts[i] === counts[k]){
                return false;
            }
        }
        
    }

    return true;
}



// console.log(uniqueNumberOfOccurence([-3,0,1,-3,1,1,1,-3,10,0]))  //true
// console.log(uniqueNumberOfOccurence([1,2]))  //false
// console.log(uniqueNumberOfOccurence([1,2,2,1,1,3]))  //true
// console.log(uniqueNumberOfOccurence([26,2,16,16,5,5,26,2,5,20,20,5,2,20,2,2,20,2,16,20,16,17,16,2,16,20,26,16]))  //false
// console.log(uniqueNumberOfOccurence([1,2,2,1,1,3]))  //true

// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
// words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2

const countWords = function(words1, words2) {
    let arr = [];
    let frequencyResult1 = {};
    let frequencyResult2 = {};

    

    for(const item of words1){
        frequencyResult1[item] = frequencyResult1[item] ? frequencyResult1[item]+=1 : 1
    }

    for(const item of words2){
        frequencyResult2[item] = frequencyResult2[item] ? frequencyResult2[item]+=1 : 1
    }

    for(const item in frequencyResult1){
        if(frequencyResult1[item] === frequencyResult2[item] && frequencyResult1[item] === 1){
            arr.push(item);
        }
    }

    return arr.length;
}


// console.log(countWords(["leetcode","is","amazing","as","is"],  ["amazing","leetcode","is"]) )