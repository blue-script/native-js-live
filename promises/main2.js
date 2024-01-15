const resolvedPromise = Promise.resolve(100)
console.log(resolvedPromise)

const rejectedPromise = Promise.reject({ message: 'some error' })
console.log(rejectedPromise)

rejectedPromise.then(data => console.log(data)).catch(err => console.log(err))

const usersAPI = {
	getAllUsers() {
		return Promise.resolve([{ name: 'D' }, { name: 'N' }])
	},
}

const pr = usersAPI.getAllUsers()
pr.then(users => console.log(users))
