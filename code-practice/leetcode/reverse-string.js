// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Solution
function reverseString (str) {
  // Step 1. Use the split() method to return a new array
  const splitString = str.split('') // let splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  const reverseArray = splitString.reverse() // let reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  const joinArray = reverseArray.join('') // let joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  // Step 4. Return the reversed string
  return joinArray // "olleh"
}

reverseString('hello')

// Short-hand solution for the above
const reverseString1 = function (str) {
  return str.split('').reverse().join('')
}

reverseString1('hello')

// Alternate 1-Liner using ES6 syntax
// const reverseString1 = str => str.split('').reverse().join('')

// reverseString1('hello')

// Reverse string recursively not using .reverse()
const reverseString2 = str => {
  if (str === '') {
    return ''
  } else {
    console.log(str)
    return reverseString2(str.substr(1)) + str.charAt(0)
  }
}

console.log(reverseString2('hello'))
