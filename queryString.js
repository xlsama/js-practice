const queryString = str => {
  const obj = {}
  new URL(str).searchParams.forEach((v, k) => (obj[k] = v))
  return obj
}

console.log(queryString('https://baidu.com?a=1&b=2'))
