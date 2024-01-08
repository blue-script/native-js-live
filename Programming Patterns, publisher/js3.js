const smallDiv = document.querySelector('#small')
const mediumDiv = document.querySelector('#divGreen')
const bigDiv = document.querySelector('#divRed')

function handler(event) {
  event.stopPropagation()
  console.log('click', event.currentTarget.id);  
}
smallDiv.addEventListener('click', handler)
mediumDiv.addEventListener('click', handler)
bigDiv.addEventListener('click', handler)
// bigDiv.addEventListener('click', handler, {capture:true})

document.querySelector('#linkId').addEventListener('click', buttonHandler)

function buttonHandler(event) {
  console.log('google');
  event.preventDefault()
}
