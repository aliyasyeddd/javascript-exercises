const leapYears = function(year) {
  let divisibleByFour = year % 4 === 0;
  let divisibleByHundred = year % 100 === 0;
  let divisibleByFourHundred = year % 400 === 0;
  if (divisibleByFour && (!divisibleByHundred || divisibleByFourHundred ) ) {
    return true;
  } else  {
    return false;
  }

};

// Do not edit below this line
module.exports = leapYears;
