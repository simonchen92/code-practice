// How to Remove Duplicates in an Array

// Solution 1
const a = [1, 2, 5, 2, 1, 8]
const b = []
const len = a.length

for (let i = 0; i < len; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i])
  }
}

console.log(b)

// Solution 2 using for of loop
const c = [1, 2, 5, 2, 1, 8]
const obj = {}

for (const i of c) {
  obj[i] = true
}

const d = Object.keys(obj)
console.log(d)

// Solution 3 using ES6 method called Set which is a built in function from JS to find unique values

const someArray = [1, 2, 5, 2, 1, 8]
console.log([...new Set(someArray)]) // Set normally returns an object so we use spread operator to make it display in an array
