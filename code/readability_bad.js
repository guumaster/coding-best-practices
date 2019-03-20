function count(l) {
  let s = 0
  for let f=0; f < l.length; f++ {
    if (l[f] === '3') {
      s += 1
    }
  }
  return s
}
