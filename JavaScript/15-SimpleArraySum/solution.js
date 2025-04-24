function simpleArraySum(ar) {
    return ar.reduce((acc, val) => acc + val, 0);
}

// Sample test
const ar = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(ar)); // Output: 31
