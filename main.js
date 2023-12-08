const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    score: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    score: 89,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    score: 120,
  },
  {
    name: "John",
    age: 21,
    isMarried: false,
    score: 100,
  },
]

const names = ['Bob', 'Alex', 'Nick', 'John']

const getMappedArray = (array, mapFunc) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = mapFunc(array[i])
  }
  return result
}

console.log(getMappedArray(students, (el) => el.name))
console.log(getMappedArray(students, (el) => ({...el, isStudent: true})))
console.log(getMappedArray(students, el => ({...el, isMarried: true})))

// const myPush = (array, el) => {
//     array[array.length] = el
//     return array.length
// }

const getFilteredArray = (arr, filterFunc) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (filterFunc(arr[i])) myPush(result, arr[i])
  }
  return result
}

console.log(getFilteredArray(students, el => el.score > 100))

function myPush(el) {
  this[this.length] = el
  return this.length
}

Array.prototype.myPush = myPush

names.myPush('Chack')

console.log(names)

students.myPush({})
console.log(students)