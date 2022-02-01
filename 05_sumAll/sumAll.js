const sumAll = function (start, end) {
  let sum = [];
  if (
    start < 0 ||
    end < 0 ||
    typeof start !== 'number' ||
    typeof end !== 'number'
  ) {
    return 'ERROR';
  } else if (start > end) {
    [start, end] = [end, start];
  }

  for (let i = start; i <= end; i++) {
    let num = i;
    sum.push(num);
  }

  let total = sum.reduce((total, amount) => total + amount);
  return total;
};

// Do not edit below this line
module.exports = sumAll;
