const removeFromArray = function(arr, ...values) {
  return arr.filter(num => !values.includes(num));

};

// Do not edit below this line
module.exports = removeFromArray;
