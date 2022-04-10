function bind(bindThis, ...args) {
  const fn = this
  return function (...args2) {
    return fn.apply(bindThis, args.concat(args2))
  }
}

module.exports = bind
