// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// const list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' }
// ]
// your function should return the following object (associative array in PHP):
// { C: 2, JavaScript: 1, Ruby: 1 }

// Notes:
// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

// Direct Link to Codewar Challenge
// https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages/train/javascript

// Test Use
const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' }
]

// Solution 1 using for loop

function countLanguages (list) {
  const countLanguage = {}
  for (let i = 0; i < list.length; i++) {
    const currLanguage = list[i].language
    if (countLanguage[currLanguage]) {
      countLanguage[currLanguage]++
    } else {
      countLanguage[currLanguage] = 1
    }
  }
  return countLanguage
}

console.log(countLanguages(list1))

// Solution 2 using forEach

function countLanguages1 (list) {
  const count = {}
  list.forEach(code => (count[code.language] = (count[code.language] || 0) + 1))
  return count
}

console.log(countLanguages1(list1))
