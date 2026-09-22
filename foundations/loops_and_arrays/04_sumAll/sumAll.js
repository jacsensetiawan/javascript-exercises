const sumAll = function(a, b) {
let max;
let min;

if (a < b) {
    max = b;
    min = a;
} else {
    max = a;
    min = b;
};

const result = (Array.from({length: b - a + 1}, (_, index) => index + a));
const total = result.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

return total;
};

// Do not edit below this line
module.exports = sumAll;
