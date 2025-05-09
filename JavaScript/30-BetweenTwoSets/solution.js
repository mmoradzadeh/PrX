function getTotalX(a, b) {
    const lcm = (x, y) => x * y / gcd(x, y);
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);

    const lcmA = a.reduce((acc, val) => lcm(acc, val));
    const gcdB = b.reduce((acc, val) => gcd(acc, val));

    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0) count++;
    }
    return count;
}

// Sample test
console.log(getTotalX([2, 4], [16, 32, 96])); // Output: 3
