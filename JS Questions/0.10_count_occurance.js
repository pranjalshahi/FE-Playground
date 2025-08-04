// Count Occurrences
// Question:
// Count how many times a value appears in an array.

// Send as argument:
// The array, and the value to count.

function countOccurrences(arr, num){
    let count =0;
    for (let i=0 ; i<arr.length; i++){
        if(arr[i] == num)
            count++;
    }
    return count;
}

console.log(countOccurrences([1,2,3,2,2,2,2,4,2], 2))