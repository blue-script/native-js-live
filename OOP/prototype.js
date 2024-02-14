// function DeleteUserAction(userId) {
//   // this = {}
//   this.type = 'DELETE-USER'
//   this.payload = {
//     userId: userId
//   }
//   // return this
// }
//
// const action1 = new DeleteUserAction(123123)
// const action2 = new DeleteUserAction(444444)
//
// console.log(action1)
// console.log(action2)

// ----------------------------------------------


function User(name, site, db) {
  this.name = name
  this.site = site
  this.dateOfBirth = db
}

User.prototype.hello = function() {
  console.log(`I'm ${this.name} from ${this.site}`)
}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1998, 10, 11))
const u2 = new User('Artem', 'it-incubator.by', new Date(1998, 10, 11))

console.log(u1)
console.log(u2)

u1.hello()