var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++){
        let value = fn(arr[i],i);
        if (value)
            filteredArr.push(arr[i]);
    }
    return filteredArr;
};

console.log(filter([0, 10, 20, 30], greaterThan10)); // Output: [20, 30]