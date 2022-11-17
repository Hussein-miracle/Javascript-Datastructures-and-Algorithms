import math


def slidingWindowCountGoodSubstrings(s):
  count = 0

def findMaxSumSubarray(k,arr):
  maxSum = 0
  windowStart = 0
  sum = 0

  for i in range(len(arr)):
    sum += arr[i]

    if(i >= k-1):
      maxSum = max(maxSum,sum)
      sum -= arr[windowStart]
      windowStart+=1

  return maxSum


#print(findMaxSumSubarray(3,[2,1,5,1,3,2]))

def slidingWindowMinimumDifference(nums, k):
  length = len(nums)
  nums.sort()
  min_diff = math.inf

  window_start = 0

  for i in range(length):
    current_end = nums[i]

    if(i >= k -1):
      current_start = nums[window_start]
      diff = current_end - current_start
      min_diff = min(diff,min_diff)
      window_start+=1
  

  return min_diff



print(slidingWindowMinimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6))
