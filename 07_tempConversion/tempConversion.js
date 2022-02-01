const ftoc = function (f) {
  let minus32 = f - 32;
  let fraction = 5 / 9;
  let celcius = minus32 * fraction;
  celcius = Math.round(celcius * 10) / 10;
  return celcius;
};

const ctof = function (c) {
  let fraction = 9 / 5;
  let fahrenheit = c * fraction + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
