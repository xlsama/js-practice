function hailstone(n) {
  let length = 1
  while (n > 1 && (n % 2 ? (n = 3 * n + 1) : (n = n / 2))) {
    length++
  }
  return length
}

// console.log(hailstone(4))
// console.log(hailstone(42))
console.log(hailstone(27))
