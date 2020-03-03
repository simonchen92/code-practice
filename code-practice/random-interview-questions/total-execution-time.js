/*
Write a function that receives an array 'arr' of processable non-unique integers and a cooldown 'c'.
This function returns the total execution time for the array.

Each unique integer has a cooldown of 'c' seconds before another integer of the same value can be processed.
Each integer requires 1 second for processing.

Facebook Interview Question
 */

function getTotalExecutionTime (arr, c) {
  const result = {}
  let time = 0
  let current

  for (let i = 0; i < arr.length; i++) {
    current = arr[i]
    if (!result[current] || result[current] + c < time) {
      result[current] = time += 1
    } else {
      time = result[current] += c + 1
    }
  }
  return time
}

// input [1, 2, 1, 1, 2, 2, 2], 2
// output: 14

console.log(getTotalExecutionTime([1, 2, 1, 1, 2, 2, 2], 2))
