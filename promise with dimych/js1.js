// let axios = {
//   get() {
//     return new Promise((resolve, reject)=> {
//       setTimeout(()=>{resolve('YoYoYo')}, 3000)
//     })
//   }
// }

// axios.get()
//   .then(data=> console.log(data))
//   .catch(data=> console.error(data))

//------------------------------------------

// let a = {
//   sum(a,b) {
//     console.log(a+b)
//     return this
//   }
// }
// a.sum(1, 2).sum(3,4).sum(5,5)

//-------------------------------------

let axios = {
  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          asf: 1,
          sdf: 2,
          data: 'YoYoYo'
        })
      }, 3000)
    })
  }
}

axios.get()
  .then(data => data.data)
  .then(data => console.log(data))