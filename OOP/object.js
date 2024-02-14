// на основе class делается instance (экземляр)

// const deleteUser = (userId) => {
//   const action = {
//     type: 'DELETE-USER',
//     payload: {
//       userId: userId
//     }
//   }
//   return action
// }
//
// const action1 = deleteUser(123123)
// const action2 = deleteUser(444444)
//
// console.log(action1)
// console.log(action2)

// -----------------------------------

function commonHello() {
  console.log(`I'm ${this.name} from ${this.site}`)
}
const userFabric = (name) => {
  const user = {
    name: name,
    site: 'it-incubator.by',
    dateBirthday: new Date(1998, 10, 11),
    hello: commonHello
  }
  return user
}

const u1 = userFabric('Dimych')
const u2 = userFabric('Artem')

console.log(u1)
console.log(u2)
u2.hello()