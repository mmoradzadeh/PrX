function plusMinus(arr) {
    const n = arr.length;
    let positive = 0, negative = 0, zero = 0;

    for (const num of arr) {
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zero++;
    }

    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zero / n).toFixed(6));
}

// Sample test
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);