/*
Write a function that given an array a consisting of n integers noting the number of apples on each apple tree in the row,
and integers k and l denoting, respectively the number of trees that alice and bob can choose when collecting,
returns the maximum number of apples that can be collected by them or -1 if there are no such intervals javascript
*/

// Test
// const test1 = ([6, 1, 4, 6, 3, 2, 7, 4], 3, 2) // 24
// const test2 = ([10, 19, 15], 2, 2) // -1

// Solution 1 // Doesn't return correct solution
// function solution (A, K, L) {
//   if (A.length < K + L) {
//     return -1
//   }
//   // total apples
//   let total = 0

//   // K set of apples
//   for (let i = 0; i + K < A.length; i++) {
//     // Get K set of apples
//     const kApples = A.slice(i, i + K).reduce((a, c) => a + c)
//     // set L variable
//     let lApples = 0

//     // get L set of apples
//     for (let j = 0; j + L < A.length; j++) {
//     // avoid overlapping sets
//       if (i >= j + L || i + K <= j) {
//         // get count of current L set
//         const curr = A.slice(j, j + L).reduce((a, c) => a + c)
//         if (curr > lApples) lApples = curr
//       }
//     }
//     // get total and save it if better than previous best total
//     if (kApples + lApples > total) {
//       total = kApples + lApples
//     }
//   }
//   return total
// }

// Solution 2
const solution = function (A, K, L) {
  if (A.length < K + L) {
    return -1
  }
  const arr = [0]
  for (const a of A) {
    arr.push(arr[arr.length - 1] + a)
  }
  let total = 0
  for (let i = 0; i < arr.length - K; i++) {
    const kApples = arr[i + K] - arr[i]
    let curr = i - 1
    while (curr - L >= 0) {
      const currApple = arr[curr] - arr[curr - L]
      total = Math.max(total, currApple + kApples)
      curr--
    }
    curr = i + K
    while (curr + L < arr.length) {
      const currApple = arr[curr + L] - arr[curr]
      total = Math.max(total, currApple + kApples)
      curr++
    }
  }
  return total
}

// // Solution 3
// // Python code similar to this
// const solution = function (A, K, L) {
//   if (A.length < K + L) {
//     return -1
//   }
//   const len = A.length
//   for (let i = 1; i < len; i++) {
//     A[i] += A[i - 1]
//   }

//   let KMax = A[K - 1]
//   let LMax = A[L - 1]
//   let total = A[L + K - 1]
//   for (let i = L + K; i < len; i++) {
//     // update KMax to i - M;
//     KMax = Math.max(KMax, A[i - L] - A[i - L - K])
//     LMax = Math.max(LMax, A[i - K] - A[i - L - K])
//     total = Math.max(total,
//       KMax + A[i] - A[i - L],
//       LMax + A[i] - A[i - K]
//     )
//   }
//   return total
// }

console.log(solution([6, 1, 4, 6, 3, 2, 7, 4], 3, 2)) // 24
console.log(solution([10, 19, 15], 2, 2)) // -1
