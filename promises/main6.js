// findUserInDB(1).then(user => {
// 	console.log(user.name)
// })

// function getNumber() {
// 	const promise = new Promise((resolve, reject) => {
// 		//reject('some error')
// 		setTimeout(() => {
// 			resolve(Math.random())
// 		}, 2000)
// 	})
// 	return promise
// }
// getNumber().then(n => console.log(n))
// getNumber().then(n => console.log(n))

const repo = {
	save(data) {
		try {
			localStorage.setItem('some-key', JSON.stringify(data))
		} catch (err) {
			return false
		}
		return true
	},
	read(key) {
		const data = localStorage.getItem(key)
		return !data ? null : JSON.parse(data)
	},
	saveAsync(data) {
		const promise = new Promise((resolve, reject) => {
			try {
				localStorage.setItem('some-key', JSON.stringify(data))
				resolve()
			} catch (err) {
				reject(err)
			}
		})
		return promise
	},
	readAsync(key) {
		return new Promise((res, _) => {
			const data = localStorage.getItem(key)
			!data ? res(null) : res(JSON.parse(data))
		})
	},
}

const result = repo.save({ name: 'IT-KAMASUTRA' })
result ? console.log('saved') : console.warn('not saved')
const data = repo.read('some-key')
data ? console.log(data) : console.warn('not data')

// repo.saveAsync({ name: 'IT-KAMASUTRA' })
// 	.then(() => console.log('saved'))
// 	.catch(err => console.warn('not saved: ' + err))

const run = async () => {
	await repo.saveAsync({ name: 'IT-KAMASUTRA' })
	console.log('saved')
	const data = await repo.readAsync('some-key')
	console.log(data)
}
run()
