// __proto__ prototype

// class Car {
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//         this.state = {}
//     }
//     startEngine() {
//         console.log(`${this.brand} is started`)
//     }
//     stopEngine = () => {
//         console.log(`${this.brand} is stopped`)
//     }
// }
//
// const car1 = new Car('bmw', 200)
// const car2 = new Car('kia', 250)

// __proto__ - это ссылка на prototype класса или функции конструктора с помощью которой был создан объект

// console.dir(Car)
// console.log(car1.__proto__)
// console.log(car1.__proto__ === Car.prototype)

// const str = new String('dsf')
// console.log(String.prototype)
// console.log(str.__proto__ === String.prototype)
//
// const str2 = 'sdfds'
// console.log(str2.__proto__ === String.prototype)

// const obj1 = {}
// const obj2 = {}
// const obj3 = new Object()

// class Car {
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//         this.state = {}
//     }
//     startEngine() {
//         console.log(`${this.brand} is started`)
//     }
//     stopEngine = () => {
//         console.log(`${this.brand} is stopped`)
//     }
// }
// const car1 = new Car('bmw', 200)
// const car2 = new Car('kia', 250)

// console.log(car2)
// console.log(Car.prototype)
// console.log(car1.__proto__)
// console.log(car1.__proto__ === Car.prototype)
// console.log(car1.__proto__.__proto__ )
// console.log(Car.prototype.__proto__)
// console.log(car1.__proto__.__proto__ === Car.prototype.__proto__)
// console.log(Object)
// console.log(Object.prototype)
// console.log(car1.__proto__.__proto__ === Object.prototype)
// console.log(car1.__proto__.__proto__.__proto__ === null)

// console.log(Car.__proto__ === Function.prototype)  // __proto__ для класса(функции, объекта) обращается к тому чем был создан данный класс
// prototype есть только у констукторов
// console.log(Function.prototype)
// console.dir(Car)


//  ---------------------------------------------------


function Car(brand, speed) {
    this.brand = brand
    this.speed = speed
}

Car.prototype.startEngine = function () {
    console.log(`${this.brand} is started`)
}
Car.compareCars = function (car1, car2) {
    car1.speed > car2.speed
        ? console.log(`${car1.brand} faster`)
        : console.log(`${car2.brand} faster`)
}

const car1 = new Car('superBmw', 300)
const car2 = new Car('superFarrari', 230)

Car.compareCars(car1, car2)
// car1..compareCars - error

function SuperCar(brand, speed, canFly) {
    this.brand = brand
    this.speed = speed
    this.canFly = canFly
}

SuperCar.prototype.fly = function () {
    console.log(`${this.brand} is flying`)
}

// SuperCar.prototype.__proto__ = Car.prototype  // это устарело (deprecated)
// SuperCar.__proto__ = Car  // это устарело (deprecated)
Object.setPrototypeOf(SuperCar.prototype, Car.prototype)
Object.setPrototypeOf(SuperCar, Car)

const superCar1 = new SuperCar('superBmw', 220, true)
const superCar2 = new SuperCar('superKia', 70, true)
superCar1.startEngine()
SuperCar.compareCars(superCar1, superCar2)
