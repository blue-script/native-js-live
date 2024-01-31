function doAfter(t) {
  return new Promise((res,rej)=> {
    setTimeout(() => {
      res()
    }, t * 1000)
  })
}