// Concept:
// Transform a function that takes multiple arguments into a sequence of functions that each take a single (or partial) argument.

// Focus Areas: Higher-order functions, closures, recursion

// Expect:
// Both curriedAdd(2)(3) and curriedAdd(2, 3) return the same result as add(2, 3) — in this case, 5.


function add(a, b)
{
    return a+b;
}

function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }
        else{
            return function(...nextargs)
            {
                return curried(...args, ...nextargs);
            }
        }
    }
}

const curriedAdd = curry(add);
console.log(curriedAdd(9)(3));
console.log(curriedAdd(2, 3));

