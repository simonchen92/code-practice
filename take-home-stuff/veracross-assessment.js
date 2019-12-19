// Create a function that takes in a range of EVEN numbers from 20 to 60
// There should be a display of all the numbers from that range
// After every fifth number there should be a total of all the past numbers
// There should be a running total of each fifth number that appears thereafter

function range (start, stop, step) {
  const arr = [start]
  let startingNum = start
  while (startingNum < stop) {
    arr.push(startingNum += step || 1)
  }
  return arr
}

const arr = range(20, 60, 2)
// console.log(arr)

let total = 0
for (let i = 0; i < arr.length; i++) {
  if (i % 5 === 0 && i !== 0) {
    arr[i] += total
    // console.log('arr[i] is', arr[i])
    // console.log('total is', total)
    // console.log('i is', i)
  }
  total = arr[i]
  console.log(total)
}
