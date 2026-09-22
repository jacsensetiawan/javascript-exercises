const sumAll = function(a, b) {
if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
}

if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
}

if (a < 0 || b < 0){
    return "ERROR"
}

let max;
let min;

if (a < b) {
    max = b;
    min = a;
} else {
    max = a;
    min = b;
};

const result = (Array.from({length: max - min + 1}, (_, index) => index + min));
const total = result.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

return total;
};

// Do not edit below this line
module.exports = sumAll;
