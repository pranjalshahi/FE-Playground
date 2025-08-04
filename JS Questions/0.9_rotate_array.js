//  Rotate Array
// Question:
// Rotate array to the right by N steps.

// Send as argument:
// The array, and the number of steps to rotate by.

function rotateArray(arr, n){
    let t = arr.length;
    return arr.slice(-(n), t).concat(arr.slice(0, t-n));
}


console.log(rotateArray([10, 20, 30, 40, 50], 3));