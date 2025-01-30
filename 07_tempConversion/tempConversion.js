const convertToCelsius = function(celsiusNum) {
  let conversionNumberC = (celsiusNum - 32) * 5/9;
  let roundDecimalC = Math.round(conversionNumberC * 10) / 10
  return roundDecimalC;
};

const convertToFahrenheit = function(fahrenheitNum) {
  let conversionNumberF = (fahrenheitNum * 9 / 5) + 32;
  let roundDecimalF = Math.round(conversionNumberF * 10) / 10
  return roundDecimalF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
