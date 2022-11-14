def slidingWindow(k,arr):
  result = []
  for i in range(len(arr) - k + 1):
    print(i)
    sum = 0

    for j in range(i,i+k):
      sum += arr[j]

    result.append(sum / k)
    # result.append(sum / k)
  return result



# print(slidingWindow(5,[1,3,2,6,-1,4,1,8,2]))


def slidingWindowImproved(k,arr):
  windowStart = 0
  windowSum = 0
  result = []

  for i in range(len(arr)):
    windowSum += arr[i]

    if(i >= k-1):
      result.append(windowSum / k)
      windowSum -= arr[windowStart]
      windowStart+=1

  return result


print(slidingWindowImproved(5,[1,3,2,6,-1,4,1,8,2]))