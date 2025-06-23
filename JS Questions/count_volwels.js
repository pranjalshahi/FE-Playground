// Count_Vowels

function countVowels(str) {
    const regex = /[A,E,I,O,U]/gi;
    const arr = str.match(regex);
    const c = arr.length;
    return c
}

//For the purpose of user debugging.
countVowels("JavaScript");

module.exports = countVowels