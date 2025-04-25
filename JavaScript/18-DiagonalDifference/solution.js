function diagonalDifference(arr) {
    let primarySum = 0;
    let secondarySum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];
        secondarySum += arr[i][n - i - 1];
    }

    return Math.abs(primarySum - secondarySum);
}

// Sample test
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];
console.log(diagonalDifference(arr)); // Output: 15
