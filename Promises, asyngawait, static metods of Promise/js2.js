import fetch from 'node-fetch'

// console.log('start')
// fetch('https://google.com/?query=js').then(data => console.log(data.url))
//
// console.log('end')
//
// const run = async () => {
//   await fetch('https://bing.com/?query=js')
// }

// статические методы промисов - методы которые не наследуются instance()
// all | any | allSettled | race


// all -------------------------------------------------------------
// const pr1 = fetch('https://google.com/?query=js')
// const pr2 = fetch('https://bing.com/?query=js')
// const pr3 = fetch('https://yahoo.com/?query=js')
//
// const bigPromise = Promise.all([pr1, pr2, pr3])
// bigPromise
// .then(res => console.log(res))
// .catch(err=> console.log(err))

// Promise.all([
//   fetch('https://google.com/?query=js'),
//   fetch('https://bing.com/?query=js'),
//   fetch('https://yahoo.com/?query=js')
// ])
//   .then(res => console.log(res))
//   .catch(err=> console.log(err))


// race -------------------------------------------------------------
// Promise.race([
//   fetch('https://google.com/?query=js'),
//   fetch('https://bing.com/?query=js'),
//   fetch('https://yahoo.com/?query=js')
// ])
//   .then(res => console.log(res.url))
//   .catch(err=> console.log(err))


// any -------------------------------------------------------------
// Promise.any([
//   fetch('https://google.com/?query=js'),
//   fetch('https://bing.com/?query=js'),
//   fetch('https://yahoo.com/?query=js')
// ])
//   .then(res => console.log(res.url))
//   .catch(err=> console.log(err))


// allSettled -------------------------------------------------------------
// Promise.allSettled([
//   fetch('https://google.com/?query=js'),
//   fetch('https://bing.com/?query=js'),
//   fetch('https://yahoo.com/?query=js')
// ])
//   .then(res => console.log(res.url))
