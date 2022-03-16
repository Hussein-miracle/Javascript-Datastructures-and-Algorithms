const insertionSort1 = function(nums){
    // let result = [...nums];
    // console.log(nums)
    for(let i = 1;i < nums.length ;i++){
        let currentValue = nums[i];
        // console.log(currentValue,"[currentValue]");
        // [2,1,9,76,4]
        for(var j = i-1 ; (!(j < 0 ) || j>=0 ) && nums[j] > currentValue ; j--){

            nums[j+1] = nums[j];

        }

        
        nums[j+1] = currentValue;
    }

    return nums;
} 


//INSERTION SORT BY FREECODECAMP
function insertionSort2(arr){
    const swap = (arr,i,j) =>{
        [ arr[i] , arr[j] ] = [ arr[j] , arr[i] ]
    }

    // [2,1,9,76,4]
    // [1,2,9,76,4]
    // [1,2,9,76,4]
    // [1,2,9,4,76]
    // [1,2,4,9,76]

    for(let i = 1 ; i < arr.length ; i++){
    
        for(let j = i ; j > 0   ;j--){

            if(arr[j] < arr[j-1]){

                swap(arr,j,j-1);

            }else{
                break;
            }
        }

    }


    return arr;

};
// console.log(insertionSort([1,2,4,9,76]))


// console.log(insertionSort([2,1,3,7,6,4,8,0]))
// console.log(insertionSort1([2,1,9,76,4]))
console.log(insertionSort2([2,1,9,76,4]))
//[2,2]



































function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

// insertionSort([2,1,9,76,4])