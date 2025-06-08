async function sleep(millis) {
    return new Promise((resolve) => setTimeout(() => {
        resolve();
    }, millis));
}

// Sample test
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // Output: ~100 ms
