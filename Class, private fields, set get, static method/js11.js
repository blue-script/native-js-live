// class

// фабричный метод паттерн
// function carCreator(brand, color) {
//     const obj = {
//         brand: brand,
//         color: color,
//         startEngine() {
//             console.log(`${this.brand} is started`)
//         }
//     }
//     return obj
// }
//
// const car1 = carCreator('bmw', 'black')
// const car2 = carCreator('ferrari', 'red')
//
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()

// -------------------------------------------

// function CarCreator(brand, color) {
//     // {}
//     this.brand = brand
//     this.color = color
//     // так каждый раз создаем функцию(для каждого объекта)
//     // this.startEngine = function() {
//     //     console.log(`${this.brand} is started`)
//     // }
// }

// CarCreator.prototype.startEngine = function() {
//         console.log(`${this.brand} is started`)
//     }
//
// const car1 = new CarCreator('bmw', 'black')
// const car2 = new CarCreator('ferrari', 'red')
//
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()

// --------------------------------------------------------

// class Car {
//     #brand // private
//     constructor(brand, color) {
//         this.#brand = brand
//         this.color = color
//     }
//     startEngine() {
//         console.log(`${this.#brand} is started`)
//     }
// showColor = function() {
//     console.log(`${this.color} is started`)
// }
//     getBrand() {
//         return this.#brand
//     }
//     setBrand(newBrand) {
//         if (newBrand.length < 3) {
//             throw new Error("to short")
//         }
//         this.#brand = newBrand
//     }
// }

// const car1 = new Car('bmw', 'black')
// const car2 = new Car('ferrari', 'red')
// console.log(car1)
// car1.startEngine()
// console.log(car1.startEngine === car2.startEngine) // true
// console.log(car1.showColor === car2.showColor) // false
// car1.#brand - not

// console.log(car1.getBrand())
// car1.setBrand('au')
// console.log(car1.getBrand())

// -----------------------------------

// class Car {
//     #brand // private
//     constructor(brand, color) {
//         this.#brand = brand
//         this.color = color
//     }
//     startEngine() {
//         console.log(`${this.#brand} is started`)
//     }
//
//     get brand() {
//         return this.#brand
//     }
//     set brand(newBrand) {
//         if (newBrand.length < 3) {
//             throw new Error("to short")
//         }
//         this.#brand = newBrand
//     }
// }
//
// const car1 = new Car('bmw', 'black')
// const car2 = new Car('ferrari', 'red')
//
// console.log(car1.brand)
// car1.brand = 'awaw'
// console.log(car1.brand)


// ---------------------------------

// class Car {
//     #brand // private
//     #speed
//     constructor(brand, color, speed) {
//         this.#brand = brand
//         this.color = color
//         this.#speed = speed
//     }
//     startEngine() {
//         console.log(`${this.#brand} is started`)
//     }
//     get brand() {
//         return this.#brand
//     }
//     set brand(newBrand) {
//         if (newBrand.length < 3) {
//             throw new Error("to short")
//         }
//         this.#brand = newBrand
//     }
//     get speed() {
//         return this.#speed
//     }
//     static compareCars(car1, car2) {
//         car1.speed > car2.speed
//         ? console.log(`${car1.brand} faster`)
//         : console.log(`${car2.brand} faster`)
//     }
// }
//
// const bmw = new Car('bmw', 'black', 133)
// const ferrari = new Car('ferrari', 'red', 120)
//
// Car.compareCars(bmw,ferrari)

// -------------------------------

class Car {
    #brand // private
    constructor(brand, color, speed) {
        this.#brand = brand
        this.color = color
        this.speed = speed
    }

    startEngine() {
        console.log(`${this.#brand} is started`)
    }

    get brand() {
        return this.#brand
    }

    static compareCars(car1, car2) {
        car1.speed > car2.speed
            ? console.log(`${car1.brand} faster`)
            : console.log(`${car2.brand} faster`)
    }
}

class SuperCar extends Car {
    constructor(brandForSuperCar, color, speed, canFly) {
        super(brandForSuperCar, color, speed)
        this.canFly = canFly
        this.brandForSuperCar = brandForSuperCar
    }
    fly() {
        console.log(`${this.brandForSuperCar} is flying`)
    }
    startEngine() {
        // super.startEngine();
        console.log('extends')
    }
}

const superBmw = new SuperCar('bmw', 'black', 200, true)
const superFerrari = new SuperCar('Ferrari', 'red', 300, true)
superBmw.startEngine()
superBmw.fly()
SuperCar.compareCars(superBmw, superFerrari)
superBmw.startEngine()