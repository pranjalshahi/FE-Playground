// Currying Function Implementation
// Problem Statement
// Create a curry function that accepts a function fn and returns a curried version of it. The curried function should accept arguments one at a time (or in groups), and once all arguments are received (based on the original function's arity/number of parameters), the original function should be executed and its result returned. The curried function should allow any combination of arguments-per-call until the full set is received.

// Example Inputs & Outputs
// function sum(a, b, c) {
//   return a + b + c;
// }

// const curriedSum = curry(sum);

// curriedSum(1)(2)(3);    // → 6
// curriedSum(1, 2)(3);    // → 6
// curriedSum(1)(2, 3);    // → 6
// curriedSum(1, 2, 3);    // → 6
// Constraints & Edge Cases
// The input fn can have any number of parameters.
// The curried function must handle partial application (passing fewer args in one call).
// It should support chaining until all arguments are passed.
// If fn takes 0 arguments, it should immediately return the result of calling fn().



function curry(fn) {

    return function curried(...args){
        if(args.length >= fn.length)
        {return fn(...args);
        }
        else
        {
         return function (...next){
            return curried(...args, ...next)
         }
        }
    }
    return curried;
}

//For the purpose of user debugging.
//pass appropriate input in below function call
curry();
module.exports = curry