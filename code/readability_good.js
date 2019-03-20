function countOccurence(stack, hey) {
  const total = stack.split("")
    .reduce((total, actual) => {
      if (stack[actual] === hey) {
        total += 1
      }
      return total
    }, 0)
  
  return total
}
