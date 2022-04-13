function throttle(fn, delay) {
  let previous = 0

  return function (...args) {
    let now = +new Date()
    if (now - delay > previous) {
      fn.apply(this, ...args)
      previous = now
    }
  }
}

function a() {
  console.log(1)
}

const b = throttle(a, 3000)

const timer = setInterval(() => {
  b()
}, 1000)
