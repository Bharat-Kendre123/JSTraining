let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, arguments); // (**)
//let result = func.call(this, arguments[0],arguments[1]); // (**)

    cache.set(key, result);
    return result;
  };    
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // works
console.log( "Again " + worker.slow(3, 5) ); // same (cached)

// Called with 3,5
// 8
// Again 8

// **********************************************************************************
//One of the most important uses of apply is passing the call to another function, like this:
let wrapper = function() {
  return anotherFunction.apply(this, arguments);
};

// That’s called call forwarding    