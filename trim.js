function trim(str) {
  return str.replace(/^(\s)+|(\s)+$/g, '')
}

console.log(trim('   a  b c ')) // 'a  b c'
