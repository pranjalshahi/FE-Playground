// Write a function that returns the reverse of a given string.

// Focus: String, split, reverse, join


function reverseString(str){
    let arr = str.split("");
    arr.reverse();
    const result = arr.join();
    return result
}


let str = "Hello World";
console.log(reverseString(str));