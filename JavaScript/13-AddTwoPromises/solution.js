var addTwoPromises = async function(promise1, promise2) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
};

// Sample test
const promise1 = Promise.resolve(2);
const promise2 = Promise.resolve(5);

addTwoPromises(promise1, promise2).then(console.log); // Output: 7