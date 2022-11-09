
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i ++){
        temp = 0;

        for (let j = 0; j < num; j++){
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }

        // console.log(temp,max)
    }
    return max; 
}

const slidingWindowMaxSubarraySum = (arr,num) => {
    if(arr.length < num) return 0;
    const len = arr.length - num + 1;
    let max = Number.MIN_SAFE_INTEGER;
    console.log(max , 'initial')
    for(let i = 0; i < len ;i++){
        let sum = 0;
        for(let j = i; j < i + num ; j++){
            sum += arr[j];
        }

        max = Math.max(sum,max);
        console.log(max,`: is max after ${i+1} time`)
    }

    return max;
}




// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));
// console.log(slidingWindowMaxSubarraySum([2,6,9,2,1,8,5,6,3],3));







function maxSubarraySum2(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {

        tempSum = tempSum - arr[i - num] + arr[i];

        maxSum = Math.max(maxSum, tempSum); 
    }


    return maxSum;
}

// console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3));
// console.log(slidingWindowMaxSubarraySum([2,6,9,2,1,8,5,6,3],3));

function maxSubarraySum3(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;


    for (let i = 0; i < arr.length ; i++) {
        tempSum += arr[i];
        // console.log(arr[i])
        // console.log(maxSum, tempSum);
        if( i > num - 1){

            tempSum = tempSum - arr[i - num];

            maxSum = Math.max(maxSum, tempSum); 
            // console.log(tempSum ,arr[i]);
        }

        

        
    }


    return maxSum;
}

// console.log(maxSubarraySum3( [2,6,9,2,1,8,5,6,3] , 3 ));
// console.log(slidingWindowMaxSubarraySum( [2,6,9,2,1,8,5,6,3] , 3 ));


const slidingWindow = (k,arr) => {
    const result  = [];
    const len = arr.length - k + 1;

    for(let i = 0; i < len;i++){
        console.log(arr[i])
        let sum = 0;

        for(let j = i; j < i + k ;j++){
            sum += arr[j];
        }

        result[i] = sum / k ;
    }


    return result;

}


// console.log(slidingWindow(5,[1,3,2,6,-1,4,1,8,2]))