const convertToCelsius = function(F) {
  const C = 5 / 9 * (F - 32);
  const rounded = Math.round (C * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function() {
  const F = (C * 9/5) + 32;
  const rounder = Math.round(F * 10) / 10;
  return rounder;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
