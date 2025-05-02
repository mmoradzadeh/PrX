function sockMerchant(n, ar) {
    const colorCount = {};
    let pairs = 0;

    for (let color of ar) {
        colorCount[color] = (colorCount[color] || 0) + 1;
        if (colorCount[color] % 2 === 0) {
            pairs++;
        }
    }

    return pairs;
}

// Sample test
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // Output: 3
