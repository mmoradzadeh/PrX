function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        const segment = s.slice(i, i + m);
        const sum = segment.reduce((a, b) => a + b, 0);
        if (sum === d) count++;
    }
    return count;
}

// Sample test
console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // Output: 2

