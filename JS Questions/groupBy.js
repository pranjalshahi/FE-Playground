// Question Breakdown (in your roadmap and image):
// "Write a function groupBy that takes an array of objects and a property name (as a string), and returns an object where the keys are the unique values of the specified property, and the values are arrays of objects that have that property value."

// Key requirements:
// The function should group array items by the value of a given property (key).
// The result should be an object:
// Keys: the different values for that property.
// Values: arrays of objects that share that property value.
// Edge-cases:
// If the input array is empty, it should return an empty object.
// Keys will be treated as strings in the returned object.
// Only group by the provided property (not by a function, in this version).
// Example:
// groupBy([
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 25 }
// ], 'age');
// Should give:

// {
//   '25': [ {name:'Alice', age:25 }, {name:'Charlie', age:25 } ],
//   '30': [ {name:'Bob', age:30 } ]
// }



function groupBy(arr, key) {
    let obj1 = {}
    let obj2 = arr.reduce((arr, crr)=>{
        if(crr[key].toString() in arr){
            arr[crr[key]].push(crr);
        }
        else{
             arr[crr[key]] = [crr];
        }
        return arr;
    }, obj1)
    console.log(obj2);
    return obj2
}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');
module.exports = groupBy;