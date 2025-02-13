const fibonacci = function(n) {
  if (n < 0) return "OOPS"
  if (n == 0) return 0;
    let a = 0;
    let b = 1;
    while (n > 1) {
      sum = a + b;
      a = b;
      b = sum;
      n--;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
