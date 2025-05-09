function breakingRecords(scores) {
    let max = scores[0], min = scores[0];
    let maxCount = 0, minCount = 0;

    for (let score of scores) {
        if (score > max) {
            max = score;
            maxCount++;
        } else if (score < min) {
            min = score;
            minCount++;
        }
    }

    return [maxCount, minCount];
}

// Sample test
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // Output: [2, 4]
