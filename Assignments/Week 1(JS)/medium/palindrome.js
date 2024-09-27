/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert string to lowercase and convert it to an array of characters
  var filteredStr = Array.from(str.toLowerCase())
    .filter(function(char) {
      return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');  // Keep only alphanumeric characters
    });
  
  var start = 0;
  var end = filteredStr.length - 1;
  
  // Loop to check characters from both ends
  while (start <= end) {
    if (filteredStr[start] !== filteredStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  
  return true;  // It's a palindrome
}

module.exports = isPalindrome;
