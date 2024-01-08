// publisher/subscriber pattern (Издатель — подписчик)

button.addEventListener('click', function subscriber(){})
setTimeout(function subscriber(){}, 1000)
store.subscriber(function subscriber(){})
app.post('/user', function subscriber(){})

// const timeOutId = setTimeout(function subscriber(){}, 10000)
// clearTimeout(timeOutId)

// subscriber === handler === observer === watcher === listener

const button = {
  subscribers: {
    'click': [], // [subscriber1]
    'focus': [],
    'doubleClick': [], // [subscriber2, subscriber3]
  },
  addEventListener(event, subscriber) {
    this.subscribers[event].push(subscriber)
  },
  click() {
    this.subscribers['click'].forEach(sub=> sub())
  },
  doubleClick() {
    this.subscribers['doubleClick'].forEach(sub=> sub())
  },
  removeAddEventListener(event, subscriber) {
    this.subscribers[event] = this.subscribers[event].filter(sub => sub !== subscriber)
  }
}

button.addEventListener('click', function subscriber1(){})
button.addEventListener('doubleClick', function subscriber2(){})
button.addEventListener('doubleClick', function subscriber3(){})

const sub=() => {
  console.log('click')
}
button.addEventListener('click', sub)
button.removeAddEventListener('click', sub)

