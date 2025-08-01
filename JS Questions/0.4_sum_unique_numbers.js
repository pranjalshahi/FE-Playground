// Sum of Unique Numbers**
// Return the sum of unique numbers in an array (ignore duplicates).

// - *Focus:* Array, Set, reduce

function uniqueSum(arr){
    let st1 = new Set();
    for (let i=0 ; i<arr.length; i++){
        st1.add(arr[i]);
    }
    let s=0;
    console.log("Set : ", st1);
    for (j of st1){
        s += j;
    }
    return s
}

let arr = [1,2,2,3,5,6,5,4,2];
console.log(uniqueSum(arr));