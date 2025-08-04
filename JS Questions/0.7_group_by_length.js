// Group By Length
// Question:
// Group an array of words by their length.

// Send as argument:
// An array of words (strings).

function groupByLength(arr){
    let obj = new Object();
    for(i =0 ; i< arr.length; i++){
        if(arr[i].length in obj){
            obj[arr[i].length].push(arr[i]);
        }
        else{
            obj[arr[i].length] = [arr[i]];
        }
    }
    return obj;
}

console.log(groupByLength(['cat', 'dog', 'mouse', 'bat']) );