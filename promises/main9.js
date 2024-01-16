const api = {
  save() {
    
  },
  read() {
    return {name: 'it-kamasutra'}
  }
}

async function run() {
  await api.save()
  console.log('saved')
  let data = await api.read()
  console.log(data)
}

run()