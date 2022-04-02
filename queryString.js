// output  {a:2,b:2}
// https://bytedance.feishu.cn/docx/doxcnwtQMB6t5UY?a=2&b=2;

// const getParams = url => {
//   const str = url.slice(url.indexOf('?') + 1)
//   const params = {}
//   str.split('&').forEach(item => {
//     const arr = item.split('=')
//     params[arr[0]] = arr[1]
//   })

//   return params
// }

const queryString = str => {
  const obj = {}
  str.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (obj[k] = v))
  return obj
}

console.log(queryString('https://bytedance.feishu.cn/docx/doxcnwtQMB6t5UY?a=2&b=2'))
