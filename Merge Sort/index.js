

// const mergeSort = function(arr){
//     if(arr.length <= 1) return arr;
//     const merge = function(arr1,arr2){
//         let result = [];
//         let i = 0;
//         let j = 0;
//         while(j < arr2.length && i < arr1.length){
//             if(arr1[i] > arr2[j]){
//                 result.push(arr2[j])
//                 j++;
//             }else{
//                 result.push(arr1[i]);
//                 i++;
//             }
//         }
    
//         while(i < arr1.length){
//             result.push(arr1[i]);
//             i++;
//         }
//         while(j < arr2.length){
//             result.push(arr2[j]);
//             j++;
//         }
    
    
//         return result;
//     }


//     let start = 0;
//     // let end = arr.length - 1;
//     let mid = Math.floor( (arr.length) / 2)
//     let left = mergeSort(arr.slice(start,mid)); 
//     let right = mergeSort(arr.slice(mid));
//     // console.log(mid);

    

//     return merge(left,right);

// }

// console.log( mergeSort([1,2,6,5,2,3,4,5,7,0]))
// console.log( mergeSort("dmkamjsfnjqasd"))
// console.log( mergeSort([34,23,55,43,112,11,34,567,88,456,23455,321,234]))
// console.log( mergeSort([1,2,6,5,2,3,4,5,7,0]))


// [1,2,3,4,4,6] [2,4,5,8,9]


// console.log(merge([1,2,3,4,4,6],[2,4,5,8,9]))


const mergeSort = function(arr){
    if(arr.length <= 1)return arr;

    const merge = function(arr1,arr2){
        let result = [];
        let [i,j] = [0,0];
    
        while(i < arr1.length && j < arr2.length){
    
            if(arr1[i] > arr2[j]){
                result.push(arr2[j]);
                j++;
            }else{
                result.push(arr1[i]);
                i++;
            }
        }
    
        while(i < arr1.length){
            result.push(arr1[i] );
            i++;
        }
        while(j < arr2.length){
            result.push(arr2[j] );
            j++;
        }
    
    
        return result;
    }


    // let start = 0
    let mid = Math.floor(arr.length / 2);
    let start = mergeSort(arr.slice(0,mid))
    let end = mergeSort(arr.slice(mid))



    return merge(start,end);
}


// console.log( mergeSort([1,2,6,5,2,3,4,5,7,0]))
// console.log( mergeSort("dmkamjsfnjqasd"))
// console.log( mergeSort([34,23,55,43,112,11,34,567,88,456,23455,321,234]))

var merge = function(nums1, m, nums2, n) {
    let [i,j] = [0,0];
    let result = [];
    nums1 = nums1.slice(0,m);
    while(i < m && j < n){
        if(nums1[i] > nums2[j]){
            result.push(nums2[j])
            j++;
        }else{
            result.push(nums1[i])
            i++;
        }
    }
    
    while(i < m){
        result.push(nums1[i]);
        i++;
    }
    
    while(j < n){
        result.push(nums2[j]);
        j++;
    }
    nums1 = [...result];
    
    return nums1;
}
console.log(merge([1,2,3,0,0,0],
    3,
    [2,5,6],
    3))