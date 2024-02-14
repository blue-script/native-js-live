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

console.log(u1.name)
u1.name = 'Igor'
console.log(u1.name)