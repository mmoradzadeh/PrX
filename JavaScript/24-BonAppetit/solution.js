// ✅ Imperative approach - more verbose but readable
function bonAppetit1(bill, k, b) {
    let calculated = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) calculated += bill[i];
    }
    console.log(calculated / 2 === b ? "Bon Appetit" : b - calculated / 2);
}

// ✅ Functional approach using reduce - concise and elegant
function bonAppetit2(bill, k, b) {
    const calculated = bill.reduce((sum, val, idx) => idx !== k ? sum + val : sum, 0);
    console.log(calculated / 2 === b ? "Bon Appetit" : b - calculated / 2);
}

// Sample tests
bonAppetit1([3, 10, 2, 9], 1, 12); // Output: 5
bonAppetit2([3, 10, 2, 9], 1, 7);  // Output: Bon Appetit
