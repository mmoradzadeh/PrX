var argumentsLength = function(...args) {
    return args.length;
};

// Sample tests
console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength());       // Output: 0
console.log(argumentsLength(42));     // Output: 1