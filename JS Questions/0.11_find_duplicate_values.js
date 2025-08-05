// Find Duplicate Values
// Concept:
// Identify elements in an array that appear more than once, but ensure no duplicates in the final result.

// Focus Areas: Array, Set, Object/Map for counting


function findDuplicates(arr){
    let ar1 = new Array();
    let mp = new Object();
    for(let i=0; i<arr.length; i++){
        if(arr[i] in mp ){
            mp[arr[i]]++;
        }
        else{
            mp[arr[i]] = 1;
        }
    }
    for(const[key, value] of Object.entries(mp))
    {
        if(value> 1)
            ar1.push(key);
    }
    return ar1;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1, 5]));