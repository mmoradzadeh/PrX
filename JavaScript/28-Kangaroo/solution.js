function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    }

    const n = (x2 - x1) / (v1 - v2);
    return (n >= 0 && Number.isInteger(n)) ? "YES" : "NO";
}

// Sample tests
console.log(kangaroo(0, 3, 4, 2)); // YES
console.log(kangaroo(0, 2, 5, 3)); // NO
