class User {
  // #name = '' //- инкапсуляция
  _name = '' //- инкапсуляция
  constructor(name, site, db) {
    // this._name = name - инкапсуляция
    // this.#name = name // - инкапсуляция
    this._name = name // - инкапсуляция
    this.site = site
    this.dateOfBirth = db
    this.counter = 0
  }

  get name() {
    return this._name + '!!!!!!'
  }

  set name(value) {
    if (value === 'Igor') throw new Error('this name is not allowed')
    this._name = value
  }

  hello() {
    debugger
    this.counter++
    console.log(`I'm ${this._name} from ${this.site}`)
  }
}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1998, 10, 11))
const u2 = new User('Artem', 'it-incubator.by', new Date(1998, 10, 11))

u1.name = 'Racoon'
let users = [u1, u2]
users.forEach(u=>u.hello())

class Coder extends User {
  constructor(name, site, db, tech) {
    super(name, site, db)
    this.tech = tech
  }

  code() {
    console.log(`${this.name} my ${this.tech} code is: const sum = (a,b) => a+b`)
  }

  hello() {
    super.hello()
    console.log('Go away')
  }
}

class Hacker extends Coder {
  constructor(a,b,c,d) {
    super()
    this.tech = 'XXX'
    this.name = 'hacker'
  }

  code() {
    console.log("I'll hack everything")
  }
}

const c1 = new Coder('Great racoon', 'it-incubator.by', new Date(1998, 10, 11), 'c#')
c1.code()
c1.hello()

const hacker = new Hacker('Great racoon', 'it-incubator.by', new Date(1998, 10, 11), 'c#')
hacker.code()
hacker.hello()

// полиморфизм
let usersPlus = [u1, u2, c1, hacker]
usersPlus.forEach(u=>u.hello())