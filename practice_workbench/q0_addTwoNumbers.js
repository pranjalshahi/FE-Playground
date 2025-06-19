function addNumbers(a, b){
    return a+b
}

module.exports = addNumbers;

if(require.main === module){
    console.log(addNumbers(5,9))
}
