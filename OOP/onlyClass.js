class User {
  #name = '' //- инкапсуляция
  constructor(name, site, db) {
    // this._name = name - инкапсуляция
    this.#name = name // - инкапсуляция
    this.site = site
    this.dateOfBirth = db
    this.counter = 0
  }

  get name() {
    return this.#name + '!!!!!!'
  }

  set name(value) {
    if (value === 'Igor') throw new Error('this name is not allowed')
    this.#name = value
  }

  hello() {
    debugger
    this.counter++
    console.log(`I'm ${this.name} from ${this.site}`)
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
}

const c1 = new Coder('Great racoon', 'it-incubator.by', new Date(1998, 10, 11), 'c#')
c1.code()