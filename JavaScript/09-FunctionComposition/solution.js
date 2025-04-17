var compose = function(functions) {

    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--){
            const currFunc = functions[i];
            x = currFunc (x);
        
        }
        return x;
    }
};


// Sample test
const functions = [
    x => x + 1,
    x => x * x,
    x => 2 * x
];

const composed = compose(functions);
console.log(composed(4)); // Output: 65