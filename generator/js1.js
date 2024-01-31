// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3;
//   // return 3;
// }
//
// let generator = generateSequence();
//
// let one = generator.next();
// console.log(one)
// let two = generator.next();
// console.log(two)
// let three = generator.next();
// console.log(three)
// let four = generator.next();
// console.log(four)
//-------------------------------------

// let range = {
//   from: 1,
//   to: 5
// }
//
// range[Symbol.iterator] = function () {
//
//   return {
//     current: this.from,
//     last: this.to,
//
//     next() {
//       if (this.current <= this.last) {
//         return {done: false, value: this.current++}
//       } else {
//         return {done: true}
//       }
//     }
//   }
// }
//
// let arr = Array.from(range, num => num * num)
// console.log(arr) // 1,2,3,4,5 (преобразование массива через toString работает)

//-----------------------------------------

function* pseudoRandom(num) {
  let value = num

  while (true) {
    value = value * 16807 % 2147483647
    yield value
  }

}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073