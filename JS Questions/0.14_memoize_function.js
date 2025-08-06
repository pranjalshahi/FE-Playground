// Concept:
// Store results of function calls based on arguments so repeated calls with the same arguments return the cached result instead of recalculating.

// Focus Areas: Closures, caching, Map or Object for storing results

// Expect:
// The first call computes the result.
// Subsequent calls with the same arguments return the cached value.

function memoize(fn){

    let mp = {};
    return function(...args){
        let keys = JSON.stringify(...args);
        if(mp[keys] !== undefined)
        {return mp[keys]}
        else
        {mp[keys] = fn(...args)
            return mp[keys];
        }
    }
}

function add(a,b){
    return a+b;
}
const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
