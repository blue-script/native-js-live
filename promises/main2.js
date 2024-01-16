// const resolvedPromise = Promise.resolve(100)
// console.log(resolvedPromise)

// const rejectedPromise = Promise.reject({ message: 'some error' })
// console.log(rejectedPromise)

// rejectedPromise.then(data => console.log(data)).catch(err => console.log(err))

const usersAPI = {
	getAllUsers() {
		return Promise.resolve([{ name: 'D' }, { name: 'N' }])
	},
	login(login, password) {
		console.log(login !== '123' + '  ' + password !== '123');
		if (login !== '123' && password !== '123') {
			return Promise.reject({ message: 'Incorrect login and password' })
		} else {
			return Promise.resolve({ name: 'Dima', id: 12, avatarUrl: '' })
		}
	},
}

const pr = usersAPI.getAllUsers()
pr.then(users => console.log(users))

usersAPI
	.login('dbv', '1234')
	.then(data => {
		// make redirect
		console.log(data)
	})
	.catch(err => {
		// show error
		console.log(err)
	})
