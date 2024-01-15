const axios = {}
const findUserInDb = id => {}

// promise - это объект 3 состояниях
const promise1 = axios.get('https//google.com')
promise1.then(data => {
	console.log(data)
})

const promise2 = findUserInDB(1)
console.log('finish')

const otherPromise = Promise.all([promise1, promise2]) // выполнится then только когда зарезолвятся все промисы
const otherPromiseSettled = Promise.allSettled([promise1, promise2]) // выполнится then даже если какойто промис зареджектился
otherPromise
	.then(results => {
		const dataFromGoogle = results[0]
		const dataFromDB = results[1]
	})
	.catch(() => {
		console.log('initialization failed. Try later')
	})

otherPromiseSettled.then(results => {
	const dataFromGoogle =
		results[0].status === 'fulfilled'
			? results[0].value
			: { data: { vacancies: null } }
	const dataFromDB =
		results[1].status === 'fulfilled'
			? results[0].value
			: { name: results[0].reason }
})
