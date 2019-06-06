function slow(x) {
console.log("Slow function called");
    x *= x;
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) { // if the result is in the map
            return cache.get(x); // return it
        }

        let result = func(x); // otherwise call func

        cache.set(x, result); // and cache (remember) the result
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached
console.log("Again: " + slow(1)); // the same

//************************************************************************************** */

