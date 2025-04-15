var createCounter = function(init) {
    let currentValue = init;
    return {
        increment: () => {
            return ++currentValue;
        },
        decrement: () => {
            return --currentValue;
        },
        reset: () => {
            currentValue = init;
            return currentValue;
        } 
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */