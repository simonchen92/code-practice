'use strict'
// Write a script to check if something is a palindrome
// Palindrome is if a word is the same if we reverse it

const isPalindrome = (string) => {
  const strLen = string.length // deconstruct to make it easier to read for the for loop
  string = string.toLocaleLowerCase() // coverts to string to lower case in according to the case mapping; is not much different than .toLowerCase()
  for (let i = 0; i < strLen / 2; i++) {
    if (string[i] !== string[strLen - i - 1]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('mom'))
console.log(isPalindrome('pizza'))
console.log(isPalindrome('level'))
console.log(isPalindrome('odor'))
console.log(isPalindrome('kayak'))
