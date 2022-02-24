const binarySearch= function(arr,val){
    let start = 0;
    let end = arr.length -1;
    let mid =  Math.floor((start+end) / 2);

    while(start <=end){
        if(arr[mid] === val){
            return mid;
        }else if(arr[mid] > val){
            end--;
        }else{
            start++;
        }

        mid =  Math.floor((start+end) / 2);
    }


    return -1;
}
const binarySearch2 = function(arr,val){
    let start = 0;
    let end = arr.length -1;
    let mid =  Math.floor((start+end) / 2);

    while(arr[mid] !== val){
        
        if(arr[mid] > val){
            end--;
        }else{
            start++;
        }

        mid =  Math.floor((start+end) / 2);
    }

    if(arr[mid] === val){
        return mid;
    }

    return -1;
}

console.log(binarySearch2([2,5,6,7,8,9],7));