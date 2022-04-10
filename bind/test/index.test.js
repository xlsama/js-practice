const bind = require('../src')

Function.prototype.bind = bind

function a(a, b) {
  return a + b
}

const a_bind = a.bind({ name: 'lee' }, 2, 3)

console.log('a:', a(1, 2))
console.log('a_bind:', a_bind(4, 6))
