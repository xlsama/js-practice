const arr = [1, 3, [4, [5, [7]]], [{ id: 1 }, { id: 2 }]]

function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten(arr))
