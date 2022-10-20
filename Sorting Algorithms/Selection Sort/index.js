function selectionSort(nums){

    const swap = function(arr,i,j){
        [arr[i] , arr[j] ] = [arr[j] , arr[i]];
    }

    for(let i = 0;i < nums.length;i++){
        let min = i;
        

        for(let j = i+1;j < nums.length;j++){
            if(nums[min] > nums[j]){
                min = j;
            }
        }

        if(min !== i) swap(nums,i,min);
    }


    return nums;
}


// console.log(selectionSort([5,9,7,3,1,23,467,2,4,3,6]))




function reSelectionSort(arr){
    const swap = function(Arr,i,j){
        [Arr[i] , Arr[j]] = [Arr[j] ,Arr[i]]
    }

    for(let i = 0; i< arr.length;i++){
        let min = i;

        for(let j = i+1 ;j < arr.length;j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }

        if(min !== i) swap(arr,i,min);
    }
}


console.log(reSelectionSort([5,9,7,3,1,23,467,2,4,3,6]))