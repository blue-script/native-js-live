// 'use strict'

// this
// 1. Global scope
// 2. Function, methods (simple f & arrow f)
// 3. call, apply, bind
// 4. function constructor

// 1. Global scope -----------------------------------------------------------------
// console.log(this) // in browser - window, in node - global object

// 2. Function, methods (simple f & arrow f)  ---------------------------------------
// function bar() {
//   // this
//   const foo = () => {
//     console.log(this)
//   }
//   foo()
// }
// bar()
//
// var color = 'black'

// const car = {
//   color:'red',
//   showColor: () => {
//     console.log(this.color)
//   }
// }
// car.showColor() // undefined

// function foo() {
//   console.log(this)
// }
// foo()

// function bar() {
//   // this
//   const foo = () => {
//     console.log(this)
//   }
//   foo()
// }
// bar()

// const scooter = {
//   speed: 60
// }
// const bmw = {
//   speed: 200
// }
// function foo() {
//   console.log(this.speed)
// }
//
// scooter.showSpeed = foo
// bmw.showSpeed = foo
//
// scooter.showSpeed()
// bmw.showSpeed()

// 3. call, apply, bind переприсваивают контекст ----------------------------

// const scooter = {
//   speed: 60
// }
// const bmw = {
//   speed: 200,
//   showMaxSpeed(a, b) {
//     console.log(this.speed + a + b)
//   }
// }
// bmw.showMaxSpeed.call(scooter, 20, 30) // , ,
// bmw.showMaxSpeed.apply(scooter, [20, 30]) //array

// const scooter = {
//   speed: 60
// }
// const bmw = {
//   speed: 200,
//   showMaxSpeed(a,b, ...arg) {
//     console.log(this.speed, a)
//     console.log(arg)
//   }
// }
// // bmw.showMaxSpeed.bind(scooter)()
// const bindFunc = bmw.showMaxSpeed.bind(scooter, 20, 30, 70)
// bindFunc(40,50)


// 4. function constructor -------------------------------------------------------------
// function Car(brand) {
//   // {}
//   this.brand = brand
// //   return { brand: 'bmw'}
// }
//
// const car1 = new Car('bmw')
// const car2 = new Car('kia')
//
// console.log(car1)
// console.log(car2)


// const bmw = {
//   speed: 200,
//   showMaxSpeed() {
//     console.log(this.speed)
//   }
// }
//
// setTimeout(bmw.showMaxSpeed.bind(bmw), 1000)
// setTimeout(()=>{bmw.showMaxSpeed()}, 1000)


function foo() {
  const x = 10
  
  return {
    x: 20,
    bar: () => {
      console.log(this.x)
    },
    baz: function() {
      console.log(this.x)
    },
  }
}

const obj1 = foo()
obj1.bar()
obj1.baz()



function foo() {
  const x = 10
  return {
    x: 20,
    bar: () => {
      console.log(this.x)
    },
  }
}

const obj1 = foo()
obj1.bar()
