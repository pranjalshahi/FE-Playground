// Remove all falsy values (false, 0, '', null, undefined, NaN) from an array.

// Focus: Array, filter, Boolean
function filterVal(cv){
if(cv)
    return cv;
}

function removeFalse(arr){
return arr.filter((cv) => filterVal(cv));
}

const arr = [0, 1, false, 2, '', 3, null, undefined, 4, NaN, 5, 'hello', true];
console.log(removeFalse(arr));