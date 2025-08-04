// Find Missing Letter
// Question:
// Given a string of ordered letters with one missing, return the missing letter.

// Send as argument:
// A string with ordered (alphabetical) letters and a missing letter.

function findMissingLetter(str){
    let code = str.charCodeAt(0);
    for(i=1; i<str.length; i++)
    {
        if(str.charCodeAt(i) - code > 1){
            return (String.fromCharCode(code+1));
        }
        else code = str.charCodeAt(i);
    }
}

console.log(findMissingLetter('fghijl'));