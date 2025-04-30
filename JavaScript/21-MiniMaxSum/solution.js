function miniMaxSum(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(`${total - max} ${total - min}`);
}

// Sample test
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); // Output: 10 14
