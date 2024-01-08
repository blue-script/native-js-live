// const users = ['Bob', 'Donald', 'Alex', 'Vasiliy', 'aLEX', 'Игорь', 'Юра']
// console.log(users.sort());

// const numbers = [2, 38, 1000, -45, 379, 9346]
// toSorted() метод работате только на новом ноде (nodeJS)
// const newNumbers = numbers.toSorted()

// const compareSort = (a, b) => a - b
// const compareSort2 = (a, b) => {
// if (a.toLowerCase() > b.toLowerCase()) return 1
// else return -1
// }
// users.sort(compareSort2)
// console.log(users)

// const students = [
// 	{
// 		id: 1,
// 		name: 'Bob',
// 		age: 22,
// 		isMarried: true,
// 		scores: 85,
// 	},
// 	{
// 		id: 2,
// 		name: 'Alex',
// 		age: 21,
// 		isMarried: true,
// 		scores: 90,
// 	},
// 	{
// 		id: 3,
// 		name: 'Nick',
// 		age: 20,
// 		isMarried: false,
// 		scores: 120,
// 	},
// 	{
// 		id: 4,
// 		name: 'John',
// 		age: 19,
// 		isMarried: false,
// 		scores: 100,
// 	},
// ]

// const compareFunc = (a, b) => {
//   if (a.scores > b.scores ) return -1
//   else return 1
// }

// students.sort(compareFunc)
// console.log(students);

// 1) константная сложность О(1)
// function getLastElement(array) {
// 	let count = 0
// 	if (array.length) {
// 		return { lastElement: array[array.length - 1], counter: ++count }
// 	}
// }
// const array = [1, 3, 4, 5]
// console.log(getLastElement(array))

// 2) линейная сложность O(n) - перебор элементоа в массиве
// function getSumArray(array) {
//   let sum = 0
//   let count = 0
//   for (let i = 0; i < array.length; i++) {
//     count++
//     sum+=array[i]
//   }
//   return count
// }
// const array = [1, 2, 3, 4, 5]
// console.log(getSumArray(array));

// 3) квадратична сложность O(n^2) - цикле в цикле
// сортировка пузырьком
// const numbers = [6, 78, 34, 55, 1, 7]
// function bubbleSort(array) {
// 	for (let i = 0; i < array.length - 1; i++) {
//     const isSorted = true
// 		for (let j = 0; j < array.length - 1 - i; j++) {
// 			if (array[j] > array[j + 1])
// 				[array[j], array[j + 1]] = [array[j + 1], array[j]]
//       isSorted = false
// 		}
//     if (isSorted) break
// 	}
// }
// bubbleSort(numbers)
// console.log(numbers)

// 4) экспоненциальная сложность О(2^n) - удваивается и увиличиваетсяколичество действий на каждой итерации()
// например числа Фибоначи
// ---------------------
// function calcArray(arr) {
//   let [sum, mult] = [0, 0]
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   for (let i = 0; i < arr.length; i++) {
//     mult *= arr[i]
//   }
//   return [sum, mult]
// }
// const arr = [1,2,3]
// console.log(calcArray(arr));

// O(n) + O(n) => O(2n) => O(N)
// O(n^2 + n) => O(n^2) 
// O(N^2 + m) => O(N^2 + m) поскольку m может быть больше чем N^2...
// O(log(n) + n) => O(n)

// --------------------------
// Бинарный поиск O(log n) для данного поиска массив должен быть отсартирован
let array = [-1, 0, 3, 5, 6, 7, 10]
let binarySearch = function (nums, target) {
	let left = 0
	let right = nums.length - 1
	let middle
	while (left <= right) {
		middle = Math.floor((left + right) / 2)
		if (nums[middle] === target) return middle
		else if (nums[middle] > target) right = middle - 1
		else left = middle + 1
	}
	return -1
}

console.log(binarySearch(array, 7))
