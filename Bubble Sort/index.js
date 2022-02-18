"use strict";

const bubbleSort1 = function(arr){

    const swap = (arr,i,j) => {
        [arr[i] , arr[j]] =[arr[j] , arr[i]];
    };

    // let noSwaps;
    for(let i = arr.length ;i > 0 ;i--){
        // noSwaps = true;
        for(let j = 0 ; j < i - 1 ; j++ ){
            
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
                // noSwaps=false;
            }

            
        }


        
        // if(noSwaps) break;


        
    }

    // console.log(arr);

    return arr;
}

// console.log(bubbleSort([3,5,6,3,4,2,1,3,8,9,34,10]))



function bubbleSort(arr){
    let swapIndex;
    const swap = (arr,i,j) =>{
        [ arr[i] , arr[j] ] = [ arr[j] , arr[i] ]
    }


    for(let i = arr.length ; i > 0 ;i--){

        swapIndex = 0;

        for(let k = 0;k < i -1;k++){
            if(arr[k] > arr[k+1]){
                swap(arr,k,k+1);
                swapIndex++;
            }
        }


        console.log(swapIndex);
    }


    


    return arr;
}


// console.log(bubbleSort([3,5,6,3,4,2,1,3,8,9,34,10]))