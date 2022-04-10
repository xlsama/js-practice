const stack = new Map()
function deepClone(source) {
  if (!(source instanceof Object) || source instanceof Function) {
    return source
  }

  if (stack.has(source)) {
    return stack.get(source)
  }

  const dist = getDist(source)

  stack.set(source, dist)

  for (const k of Reflect.ownKeys(source)) {
    dist[k] = deepClone(source[k])
  }

  return dist
}

function getDist(source) {
  switch (Object.prototype.toString.call(source)) {
    case '[object Object]':
      return {}
    case '[object Array]':
      return []
    case '[object Date]':
      return new Date(source)
    case '[object RegExp]':
      return new RegExp(source.source, source.flags)
    case '[object Set]':
      return new Set(source.values())
    case '[object Map]':
      return new Map(source)
  }
}

module.exports = deepClone
