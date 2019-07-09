
const obj1 = [{
  food: 'pizza',
  car: 'ford',
  weapon: 'axe',
  juice: 'orange',
  house: 'colonial'
}]

const obj2 = [{
  animal: 'dog',
  car: 'ford',
  house: 'condo',
  weapon: 'sword',
  juice: 'orange',
  food: 'burger'
}]

const obj3 = []

obj1.filter((item, i) => {
  obj3.push(Object.assign({}, item, obj2[i]))
})

// Another solution
const mergeByStuff = (a1, a2) =>
  a1.map(item => ({
    ...a2.find(stuff => stuff),
    ...item
  }))

module.exports = mergeByStuff
