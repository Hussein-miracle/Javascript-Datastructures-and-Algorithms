// 2024. Maximize the Confusion of an Exam

// A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).

// You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:

// Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
// Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.

 

// Example 1:

// Input: answerKey = "TTFF", k = 2
// Output: 4
// Explanation: We can replace both the 'F's with 'T's to make answerKey = "TTTT".
// There are four consecutive 'T's.
// Example 2:

// Input: answerKey = "TFFT", k = 1
// Output: 3
// Explanation: We can replace the first 'T' with an 'F' to make answerKey = "FFFT".
// Alternatively, we can replace the second 'T' with an 'F' to make answerKey = "TFFF".
// In both cases, there are three consecutive 'F's.
// Example 3:

// Input: answerKey = "TTFTTFTT", k = 1
// Output: 5
// Explanation: We can r
// eplace the first 'F' to make answerKey = "TTTTTFTT"
// Alternatively, we can replace the second 'F' to make answerKey = "TTFTTTTT". 
// In both cases, there are five consecutive 'T's.

const maximizeConfusion = function(answerKey,k){
    if(answerKey.length < 0 || answerKey > 10**5) return null;
    let hash = {};
    let len = answerKey.length;
    let max = 0;
    let whatToReplace = "";
    let constantChar = "";
    let answers = answerKey.split("");
    let lIdx = 0;
    let rIdx = len - 1; 

    for(const char of answerKey){
        if(hash[char]){
            hash[char]+=1
        }else{
            hash[char] = 1
        }
    }

    if(hash["T"] === hash["F"]){
        max = hash["T"]
        whatToReplace ="F"
        constantChar = "T"
    }else if(hash["T"] > hash["F"]){
        max = hash["T"];
        whatToReplace ="F";
        constantChar = "T"
    }else{
        max = hash["F"];
        whatToReplace ="T";
        constantChar = "F";
    }

    while(lIdx <= rIdx && k > 0){
        if(answerKey[lIdx] !== whatToReplace){
            // console.log(whatToReplace)
            lIdx++;
        }else{

                // console.log(lIdx )
                // console.log(answers[lIdx])
                // console.log(constantChar)
                answers[lIdx] = constantChar ;
                // console.log(answers);

            lIdx++;
            k--;
        }
    }
console.log(answers);
    let [counter,countsArr] = [0,[]];

    for(let m = 0; m < answers.length ; m++){
        if(answers[m] === constantChar){
            counter++;
            countsArr.push(counter);
        }else{
            counter = 0
        }
    }

    countsArr.sort((s,b) => b - s)

    return countsArr[0];
}
// console.log(maximizeConfusion("TTFF",2)) //4
// console.log(maximizeConfusion("TFFT",1)) //3/
// console.log(maximizeConfusion("TTFTTFTT",1)) // 5
// Constraints:

// n == answerKey.length
// 1 <= n <= 5 * 104
// answerKey[i] is either 'T' or 'F'
// 1 <= k <= n



// 1760. Minimum Limit of Balls in a Bag

// You are given an integer array nums where the ith bag contains nums[i] balls. You are also given an integer maxOperations.

// You can perform the following operation at most maxOperations times:

// Take any bag of balls and divide it into two new bags with a positive number of balls.
// For example, a bag of 5 balls can become two new bags of 1 and 4 balls, or two new bags of 2 and 3 balls.
// Your penalty is the maximum number of balls in a bag. You want to minimize your penalty after the operations.

// Return the minimum possible penalty after performing the operations.

 

// Example 1:

// Input: nums = [9], maxOperations = 2
// Output: 3
// Explanation: 
// - Divide the bag with 9 balls into two bags of sizes 6 and 3. [9] -> [6,3].
// - Divide the bag with 6 balls into two bags of sizes 3 and 3. [6,3] -> [3,3,3].
// The bag with the most number of balls has 3 balls, so your penalty is 3 and you should return 3.
// Example 2:

// Input: nums = [2,4,8,2], maxOperations = 4
// Output: 2
// Explanation:
// - Divide the bag with 8 balls into two bags of sizes 4 and 4. [2,4,8,2] -> [2,4,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,4,4,4,2] -> [2,2,2,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,4,4,2] -> [2,2,2,2,2,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,2,2,4,2] -> [2,2,2,2,2,2,2,2].
// The bag with the most number of balls has 2 balls, so your penalty is 2 an you should return 2.
// Example 3:

// Input: nums = [7,17], maxOperations = 2
// Output: 7
 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= maxOperations, nums[i] <= 109


// 1004. Max Consecutive Ones III
// Medium

// 3955

// 54

// Add to List

// Share
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length