// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }

//     return "undefined";
// }

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));     
// console.log(sumZero([-3,-2,-1,0,1,2,3]));     
// console.log(sumZero([2,0,1,3]));     
// console.log(sumZero([-1,2,3]));  

function countUniqueValues1(arr){
    let freq = {}

    for(const item of arr){
        if(!(freq[item])){
            freq[item] = 1
        }else{
            freq[item]++;
        }
    }

    return Object.keys(freq).length;
}


function countUniqueValues(arr){
    let uniqueCounts = 0;
    left = 0;
    right = 1;
    while(left < right  && !(right > arr.length) ){
        if(arr[left] === arr[right]){
            right++;
        }
        
        if(arr[left] !== arr[right]){
            uniqueCounts++;
            left = right;
            right++;
        }

        
    }

    return uniqueCounts;
}
function countUniqueValues2(arr){
    // let uniqueCounts = 0;
    // console.log(arr);
    if(arr.length <= 0) return 0;
    left = 0;
    right = 1;
    while(right < arr.length){
        if(arr[left] === arr[right]){
            right++;
        }
        
        if(arr[left] !== arr[right]){
            left++;
            arr[left] = arr[right];
            right++;
            
        }

        
    }

    return left+1;
}

console.log( countUniqueValues2([1,1,1,1,1,2,]) ) //2
console.log( countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]) ) //7
console.log( countUniqueValues2([]) ) //0
console.log( countUniqueValues2([-2,-1,-1,0,1]) )//4
console.log( countUniqueValues2([1,2,2,5,7,7,99]) )//5

