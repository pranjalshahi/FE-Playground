// Capitalize the first letter of every word in a given sentence.

// Focus: String, split, map, join

function cap(cv , idx , arr){
    if(idx === 0 || arr[idx-1] === ' ')
        return cv.toUpperCase();
    else 
        return cv;
}

function capitalizeFirst(str){
    let arr = str.split("");
    let arr1 = arr.map((cv, idx , arr) => cap(cv , idx , arr));
    const result = arr1.join('');
    return result;
}
let str = "Capitalize the first letter of every word in a given sentence.";
console.log(capitalizeFirst(str));
