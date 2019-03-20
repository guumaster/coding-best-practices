function count(l) {
  let s = 0
  for let f=0; f < l.length; f++ {
    if (l[f] === 'a') {
      s += 1
    }
  }
  return s
}
