//Q1 // 1876. Substrings of Size Three with Distinct Characters //SOLVED

const countGoodSubstrings1 = function (s) {
  if (!(s.length > 1)) return null;
  const str = s.split("");

  // console.log(str);

  let tempStr = "";

  for (let j = 0; j < str.length - 2; j++) {
    if (
      str[j] !== str[j + 1] &&
      str[j] !== str[j + 2] &&
      str[j + 1] !== str[j + 2]
    ) {
      tempStr += str[j];
    }
  }

  return tempStr.length;
};
// console.log(countGoodSubstrings("xyzabc")) //output:4
// console.log(countGoodSubstrings1("xyzzaz")) //output:1
// console.log(countGoodSubstrings("zzaz")) //output:0
// console.log(countGoodSubstrings1("aababcabc")) //output:4

const countGoodSubstrings = function (s) {
  // SLOW BUT READABLE
  if (!(s.length > 1)) return null;
  let count = 0;
  for (let j = 0; j < s.length - 2; j++) {
    const sub = s.substring(j, j + 3);

    let set = new Set();

    for (let i = 0; i < sub.length; i++) {
      set.add(sub[i]);
    }
    // console.log(sub)
    // console.log(set);
    if (set.size === 3) {
      count++;
    }
  }

  return count;
};

// console.log(countGoodSubstrings("xyzzaz")) //output:1
// console.log(countGoodSubstrings("xyzabc")) //output:4
// console.log(countGoodSubstrings("zzaz")) //output:0
// console.log(countGoodSubstrings("aababcabc")) //output:4
// // Constraints:

// // Constraints:

//Q2:// 485. Max Consecutive Ones  //SOLVED

const findMaxConsecutiveOnes = function (nums) {
  // OPTIMAL .FAST
  if (nums.length > 10 ** 5 || nums.length < 1) return null;

  let maxOnes = 0;

  let tempOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      tempOnes++;
    } else {
      tempOnes = 0;
    }

    maxOnes = Math.max(maxOnes, tempOnes);
  }

  return maxOnes;
};

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])) // Output: 3))
// console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))  // Output: 2
// console.log(findMaxConsecutiveOnes([1,0,1,1,0,1,1,1,1]))  // Output: 4
// console.log(findMaxConsecutiveOnes([1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1]))  // Output: 5

//Q3
`1984. Minimum Difference Between Highest and Lowest of K Scores

You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

Return the minimum possible difference.


Example 1:

Input: nums = [90], k = 1
Output: 0
Explanation: There is one way to pick score(s) of one student:
- [90]. The difference between the highest and lowest score is 90 - 90 = 0.
The minimum possible difference is 0.
Example 2:

Input: nums = [9,4,1,7], k = 2 //[9,7,4,1]
Output: 2
Explanation: There are six ways to pick score(s) of two students:
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
- [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
The minimum possible difference is 2.`;

const minimumDifference = function (nums, k) {
  /// NOT YET SOLVED /PROBLEM NOT CLEAR
  if (nums.length < 1) return null;
  if (nums.length === 1) return 0;

  const sorted = nums.sort((a, b) => b - a);
  console.log(sorted);
  let minDif = Infinity || Number.MAX_SAFE_INTEGER;
  //   console.log(minDif, "minDiff");
  // let tempDif = 0;
  // [9,4,1,7],  2
  // [9,7,4,1],  2
  // console.log(sorted[0])
  for (let i = 0; i < sorted.length + k - 1; i++) {
    console.log(sorted[i], "sorted[i]");
    // console.log(sorted[k+i] , "sorted[k+i]");
    console.log(sorted[k + i - 1], "sorted[k+i-1]");
    // const tempDif = sorted[i] - sorted[k + i];
    // console.log(tempDif, "tempDiff");

    // minDif = Math.min(minDif,tempDif);
  }

  // return minDif;
};

// Constraints:

// 1 <= k <= nums.length <= 1000
// 0 <= nums[i] <= 10^5

// console.log(minimumDifference([90],  1) ); //output:0
// console.log(minimumDifference([9, 4, 1, 7], 2)); //output:2
// console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918],6) ); //output:74560
// console.log(minimumDifference([9,4,1,7],  2) ); //output:2
// console.log(minimumDifference([9,4,1,7],  3) ); //output:2

const minimumDifference2 = (nums, k) => {
    if (nums.length <= 1) return 0;

    const arr = [...nums].sort((a, b) => b - a);
  //   console.log(arr)

    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length - k + 1; i++) {
    //   const temp =  nums[i] - nums[i + k - 1]; // 9 - 7 = 2
    //   const temp =  nums[i] - nums[i + k - 1]; // 7 - 4 = 3 
      const temp =  arr[i] - arr[i + k - 1]; // 4 - 1 = 3 
      minDiff = Math.min(minDiff, temp);

    }

    return minDiff;

};

// console.log(minimumDifference2([90],  1) ); //output:0
console.log(minimumDifference2([9, 4, 1, 7], 2)); //output:2
console.log(
  minimumDifference2([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6)
); //output:74560
// console.log(minimumDifference([9,4,1,7],  2) ); //output:2
// console.log(minimumDifference([9,4,1,7],  3) ); //output:2
