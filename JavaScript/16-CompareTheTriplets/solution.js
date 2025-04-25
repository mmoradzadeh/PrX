function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } else if (a[i] < b[i]) {
            bobScore++;
        }
    }

    return [aliceScore, bobScore];
}

// Sample test
const a = [5, 6, 7];
const b = [3, 6, 10];
console.log(compareTriplets(a, b)); // Output: [1, 1]
