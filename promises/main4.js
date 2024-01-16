findUserInBD(1)
	.then(user => user.name)
	.then(name => {
		console.log(name)
		return 100
	})
	.then(number => {
		console.log(number)
		return { value: number + 1 }
	})
	.then(obj => {
		console.log(obj.value)
		const pr = findUserInBD(2)
		return pr
	})
	.then(user => {
		console.log(user.name)
	})

console.log('finish')
