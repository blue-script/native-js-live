let pr = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve('hi')
    }, 1000)
})
console.log(pr)