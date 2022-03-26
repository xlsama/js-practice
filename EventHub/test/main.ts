import EventHub from '../src/main'

type TestCase = (message: string) => void

const test1: TestCase = message => {
  const eventHub = new EventHub()
  console.assert(eventHub instanceof Object)
  console.log(message)
}

const test2: TestCase = message => {
  const eventHub = new EventHub()
  let called = false
  let params = 'hello'
  eventHub.on('a', data => {
    called = true
    console.assert(data === params)
  })
  eventHub.emit('a', params)
  console.assert(called)
  console.log(message)
}

const test3: TestCase = message => {
  const eventHub = new EventHub()
  let called = false
  const fn = () => {
    called = true
  }
  eventHub.on('b', fn)
  eventHub.off('b', fn)
  eventHub.emit('b')
  console.assert(!called)
  console.log(message)
}

test1('EventHub 可以创建对象')
test2('.on添加后 .emit触发')
test3('.off 有用')
