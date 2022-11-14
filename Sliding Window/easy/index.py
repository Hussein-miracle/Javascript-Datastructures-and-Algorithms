# from math import max
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


print(findMaxSumSubarray(3,[2,1,5,1,3,2]))


