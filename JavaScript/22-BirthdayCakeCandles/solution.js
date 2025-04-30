function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    return candles.filter(c => c === max).length;
}

// Sample test
const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles)); // Output: 2
