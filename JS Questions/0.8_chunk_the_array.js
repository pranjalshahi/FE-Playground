// Chunk an Array
// Question:
// Split an array into chunks of N length.

// Send as argument:
// The array, and a chunk size (number).

function chunkArray(arr, n){

    let ar1= [];
    let count = 0;
    for(let i = 0 ; i<arr.length; i+=n){
        ar1.push(arr.slice(i, i+3));
    }
    return ar1;
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9,10,11], 3));