const fibonacci = function(number) {
number = Number(number);
if (number < 0) {
    return "OOPS";
} else if (number    === 0) {
    return 0;
} else {
    let a = 1;
    let b = 1;
    if (number === 1 || number === 2) {
        return 1;
    } else {
        for (let i = 3; i <= number; i++) {
            let next = a + b;
            a = b;
            b = next;
        }
        return b;
    }
}
};

// Do not edit below this line
module.exports = fibonacci;
