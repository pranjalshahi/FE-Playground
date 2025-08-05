// Concept:
// Create a function that delays execution of fn until a certain time has passed without any new calls.

// Focus Areas: setTimeout, clearTimeout, closures

function debounce(function1 , timeout){
    let statement 
    
    return function(){
        clearTimeout(statement);
    
    statement = setTimeout(() =>{
        function1()
        
    } , timeout)
}
    
}

function myFunction( ){
    console.log("Hi Guyzz , i am ready for the game");
}

const debouncedFn = debounce(myFunction, 300)
debouncedFn()
debouncedFn()
debouncedFn()
debouncedFn()
debouncedFn()
setTimeout(()=>{
    debouncedFn()
},3000)
debouncedFn()