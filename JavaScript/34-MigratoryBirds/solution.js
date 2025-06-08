function migratoryBirds(arr) {
    const count = {};

    for (let bird of arr) {
        count[bird] = (count[bird] || 0) + 1;
    }

    let maxFreq = 0;
    let minType = Infinity;

    for (let type in count) {
        if (count[type] > maxFreq || (count[type] === maxFreq && type < minType)) {
            maxFreq = count[type];
            minType = type;
        }
    }

    return Number(minType);
}

// Sample test
console.log(migratoryBirds([1, 1, 2, 2, 3, 3, 3, 4, 5])); // Output: 3
