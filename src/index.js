module.exports = function reverse (n) {
    let b = Math.abs(n)
  return b.toString().split('').reverse().join('')
}
