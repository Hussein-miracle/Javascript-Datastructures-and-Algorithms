// function countDown(num){
//     if(num<=0 ) return "All done!" ;
//     console.log(num);

//     return countDown(num - 1); 
// }


// // console.log(countDown(5))


// function sumRange (num){
//     if(num === 1) return 1;

//     return num + sumRange(num - 1);
// }


// // console.log(sumRange(4))
// // console.log(sumRange(3))
// // console.log(sumRange(5))


// function factorial(num){
//     if(num === 1) return 1;

//     return num * factorial(num - 1);
// }

// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))


function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    console.log(arr);
    console.log(newArr)
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

// console.log(collectOddValues([1,2,3,4,5]))

