var memoize = function(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

// Sample test
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 3)); // 5
console.log(memoizedSum(2, 3)); // 5 (from cache)
console.log(memoizedSum(1, 2)); // 3