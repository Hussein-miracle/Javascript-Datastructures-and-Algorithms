const linearSearch = function(arr,val){
    for(let i = 0;i<arr.length ;i++){
        if(arr[i] === val) return i;
    }



    return -1;
}


console.log(linearSearch([4,6,3,5,2],0))