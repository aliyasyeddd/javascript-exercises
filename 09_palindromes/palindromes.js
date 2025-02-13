const palindromes = function (string) {
  let alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  let cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphaNumeric.includes(character))
    .join("");
  let reversedString = cleanedString.split("").reverse().join("")
  return cleanedString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
