const deepClone = require('../src')

test('deepClone是一个函数', () => {
  expect(deepClone instanceof Function).toBeTruthy()
})

test('能够复制基本类型', () => {
  const n = 1
  expect(deepClone(n) === n).toBeTruthy()
  const s = 'abc'
  expect(deepClone(s) === s).toBeTruthy()
  const bool = true
  expect(deepClone(bool) === bool).toBeTruthy()
  const u = undefined
  expect(deepClone(u) === u).toBeTruthy()
  const empty = null
  expect(deepClone(empty) === empty).toBeTruthy()
  const sym = Symbol()
  expect(deepClone(sym) === sym).toBeTruthy()
  const bigInt = BigInt(1)
  expect(deepClone(bigInt) === bigInt).toBeTruthy()
})

test('能够复制普通对象', () => {
  const obj = { name: 'aa', child: { name: 'bb' } }
  const obj2 = deepClone(obj)
  expect(obj !== obj2).toBeTruthy()
  expect(obj.name === obj2.name).toBeTruthy()
  expect(obj.child !== obj2.child).toBeTruthy()
  expect(obj.child.name === obj2.child.name).toBeTruthy()
})

test('能够复制数组对象', () => {
  const arr = [1, { name: 'aa', list: [1, 2, 3] }]
  const arr2 = deepClone(arr)
  expect(arr !== arr2).toBeTruthy()
  expect(arr[0] === arr2[0]).toBeTruthy()
  expect(arr[1] !== arr2[1]).toBeTruthy()
  expect(arr[1].name === arr2[1].name).toBeTruthy()
  expect(arr[1].list !== arr2[1].list).toBeTruthy()
  expect(arr[1].list[2] === arr2[1].list[2]).toBeTruthy()
})

test('能够复制Symbol类型的key', () => {
  const obj = {}
  const sym = Symbol()
  obj[sym] = 'test'
  const obj2 = deepClone(obj)
  expect(obj !== obj2).toBeTruthy()
  expect(obj[sym] === obj2[sym]).toBeTruthy()
})

test('跳过原型属性', () => {
  const obj = Object.create({ name: 'aa' })
  obj.a = { b: { c: 1 } }
  const obj2 = deepClone(obj)
  expect(obj !== obj2).toBeTruthy()
  expect('name' in obj2).toBeFalsy()
  expect(obj.a !== obj2.a).toBeTruthy()
  expect(obj.a.b !== obj2.a.b).toBeTruthy()
  expect(obj.a.b.c === obj2.a.b.c).toBeTruthy()
})

test('能够复制日期', () => {
  const date = new Date()
  const date2 = deepClone(date)
  expect(date !== date2).toBeTruthy()
  expect(date.getTime() === date2.getTime()).toBeTruthy()
})

test('能够复制正则', () => {
  const reg = new RegExp('test', 'g')
  const reg2 = deepClone(reg)
  expect(reg !== reg2).toBeTruthy()
  expect(reg.source === reg2.source).toBeTruthy()
  expect(reg.flags === reg2.flags).toBeTruthy()
})

test('能够复制set', () => {
  const set = new Set()
  set.add(1)
  const set2 = deepClone(set)
  expect(set !== set2).toBeTruthy()
  expect(set.has(1) === set2.has(1)).toBeTruthy()
  expect(set.size === set2.size).toBeTruthy()
})

test('能够复制map', () => {
  const map = new Map()
  const key = { test: 'test' }
  const value = { id: 1 }
  map.set(key, value)
  const map2 = deepClone(map)
  expect(map !== map2).toBeTruthy()
  expect(map.get(key) === map2.get(key)).toBeTruthy()
  expect(map.size === map2.size).toBeTruthy()
})

test('环也可以复制', () => {
  const obj = { a: 1 }
  obj.self = obj
  obj.b = 2
  const obj2 = deepClone(obj)
  expect(obj !== obj2).toBeTruthy()
  expect(obj.a === obj2.a).toBeTruthy()
  expect(obj.b === obj2.b).toBeTruthy()
  expect(obj.self !== obj2.self).toBeTruthy()
})
