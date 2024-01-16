import { findUserInDB } from './global.js'

// findUserInDB(1)
// 	.then(user => {
// 		console.log(user)
// 		return user.friend
// 	})
// 	.then(friendId => findUserInDB(friendId))
//   .catch(err=>{
//     console.log(err)
//     return {name: 'Friend Bot', friend: 3}
//   })
// 	.then(friend1 => {
// 		console.log(friend1)
// 		return friend1.friend
// 	})
// 	.then(friendId => findUserInDB(friendId))
// 	.then(friend2 => console.log(friend2.name))
//   .catch(error=>alert(error))

async function run() {
	try {
		let user = await findUserInDB(1)
		console.log(user.name)
    let friend1
		try {
			friend1 = await findUserInDB(user.friend)
		} catch {
			frined1 = { name: 'Friend Bot', friend: 3 }
		}
		console.log(friend1.name)
		let friend2 = await findUserInDB(friend1.friend)
		console.log(friend2.name)
	} catch (error) {
		alert(error)
	}
}

run()
