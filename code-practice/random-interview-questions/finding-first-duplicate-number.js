// loop through the array
// find first reoccuring duplicate

const array = [3, 5, 6, 8, 5, 3] // =>  Answer should be 5

const firstDupe = array.find(n => {
  return array.indexOf(n)
})

console.log(firstDupe)
