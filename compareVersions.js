function compareVersions(a, b) {
  const compare = (x, y) => {
    x = +x
    y = +y
    if (x > y) {
      return '>'
    } else if (x < y) {
      return '<'
    } else if (x === y) {
      return '='
    }
  }

  const arr1 = a.split('.')
  const arr2 = b.split('.')

  //   for (let i = 0; i < arr1.length; i++) {
  //     if (compare(arr1[i], arr2[i]) === '=' && i + 1 < arr1.length) {
  //       continue
  //     }
  //     return compare(arr1[i], arr2[i])
  //   }

  if (compare(arr1[0], arr2[0] !== '=')) {
    return compare(arr1[0], arr2[0])
  }

  if (compare(arr1[1], arr2[1] !== '=')) {
    return compare(arr1[1], arr2[1])
  }

  if (compare(arr1[2], arr2[2] !== '=')) {
    return compare(arr1[2], arr2[2])
  }

  return '='
}

function compareVersions() {}
console.log(compareVersions('11.1.1', '10.0.0')) //  >
console.log(compareVersions('10.0.0', '10.0.0')) //  =
console.log(compareVersions('10.0.0', '11.1.1')) // <
