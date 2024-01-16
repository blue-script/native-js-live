function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

var axios = {
	_fake(url, data) {
		return new Promise((res, rej) => {
			setTimeout(() => {
				let responseData = {
					text: `${url} loves you`,
				}
				if (url.indexOf('it-kamasutra') > 0) {
					responseData = {
						requesteCoun: data.count,
						message: 'we will prepare students for you',
					}
				} else if (url.indexOf('google') > 0) {
					responseData = {
						vacancies: 12,
					}
				} else if (url.indexOf('microsoft') > 0) {
					responseData = {
						vacancies: 21,
					}
				}
				res({
					request: {},
					status: 200,
					headers: {},
					config: {},
					data: responseData,
				})
			}, randomIntFromInterval(1, 5) * 1000)
		})
	},
	post(url, data) {
		return this._fake(url, data)
	},
	get(url, data) {
		return this._fake(url, data)
	},
}

var findUserInDb = id => {
	const users = [
		{ id: 1, name: 'Dimych', friend: 3 },
		{ id: 2, name: 'Sveta', friend: 3 },
		{ id: 3, name: 'Valera', friend: 3 },
	]
	return new Promise((res, rej) => {
		setTimeout(() => {
			let user = users.find(u => u.id === id)
			!user ? rej('not found this id') : res(user)
		}, randomIntFromInterval(500, 1500))
	})
}
