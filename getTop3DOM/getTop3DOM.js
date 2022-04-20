function getTop3DOM() {
  const html = document.querySelector('html')
  const obj = {}

  const scan = children => {
    for (let el of children) {
      obj[el.tagName] = obj[el.tagName] + 1 || 1
      scan(el.children)
    }
  }
  scan(html.children)

  const sortList = Object.entries(obj).sort((a, b) => b[1] - a[1])
  return sortList.slice(0, 3).map(item => item[0])
}

console.log(getTop3DOM())
