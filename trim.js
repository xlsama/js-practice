function trim(str) {
  return str.replace(/^(\s)+|(\s)+$/g, '')
}

// function trim(str) {
//   let start
//   let end
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ') {
//       start = i
//       break
//     }
//   }
//   for (let i = str.length; i > 0; i--) {
//     if (str[i] !== ' ') {
//       end = i
//       break
//     }
//   }

//   return str.substring(start, end)
// }

console.log(trim('   a  b c '))
