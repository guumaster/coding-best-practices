// Bad: What the heck is 86400000 for?
setTimeout(blastOff, 86400000)

// Good:
const MILLISECONDS_IN_A_DAY = 86400000
setTimeout(blastOff, MILLISECONDS_IN_A_DAY)
