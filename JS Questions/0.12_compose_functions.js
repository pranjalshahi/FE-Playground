//  Compose Functions
// Concept:
// Create a function that returns the result of applying one function to the result of another.
// Think: compose(f, g)(x) means f(g(x)).

// Focus Areas: Higher-order functions, function chaining

function compose( f, g ){
    return function(val){
        return f(g(val));
    }
}

function add(a){
    return(a + 10);
}

function multiply(a){
    return(a * 2);
}

let calc = compose(add,multiply)(5)
console.log(calc);