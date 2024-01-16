// await заускается только в ассинхронной фунуции
async function run () {
  let user = await findUserInDB(1)
  console.log(user.name)
  let friend1 = await findUserInDB(user.friend)
  console.log(friend1.name);
  let friend2 = await findUserInDB(friend1.friend)
  console.log(friend2.name);
}

run()