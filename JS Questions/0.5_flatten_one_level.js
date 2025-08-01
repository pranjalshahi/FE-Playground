// ### **Flatten One Level**

// Flatten an array one level deep.
// Example: **`[1, [2, 3], 4]`** → **`[1, 2, 3, 4]`**

// - *Focus:* Array, .flat or loops

function flatten1(arr){
 return arr.flat();
}

function flatten2(arr){
let ar1=[];
if(arr.length){
for (let i=0 ; i<arr.length; i++){
    if(!Array.isArray(arr[i]))
    {
        ar1.push(arr[i]);
    }
    else
    {
        for (let j=0 ; j < arr[i].length; j++){
            ar1.push(arr[i][j]);
        }
    }
}
}
return ar1;
}

let arr = [1, [2, 3], 4];
console.log(flatten1(arr));
console.log(flatten2(arr));


