function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applesOnHouse = apples.map(d => a + d).filter(p => p >= s && p <= t).length;
    const orangesOnHouse = oranges.map(d => b + d).filter(p => p >= s && p <= t).length;

    console.log(applesOnHouse);
    console.log(orangesOnHouse);
}

// Sample test
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
// Output:
// 1
// 1
