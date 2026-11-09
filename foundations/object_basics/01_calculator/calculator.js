const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let total = 0
  for(let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
};

const multiply = function(numbers) {
  let total = 1
  for(let i = 0; i < numbers.length; i++) {
    total = total * numbers[i];
  }
  return total;
};

const power = function(base, exponent) {
	let total = 1
  for(let i = 0; i < exponent; i++) {
    total = total * base;
  }
  return total;
};

const factorial = function(number) {
	total = 1
  for(let i = 1; i <= number; i++) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
