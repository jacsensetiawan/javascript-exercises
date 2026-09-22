const sumAll = function(a, b) {
const result = (Array.from({lenght: b - a + 1}, (_, index) => index + a));
const total = result.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)
};

// Do not edit below this line
module.exports = sumAll;
