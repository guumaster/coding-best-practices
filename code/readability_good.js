function countLetterOccurence(word, letter) {
  const letters = word.split("")
    
  return letters.reduce((total, actual) => {
      if (stack[actual] === letter) {
        total += 1
      }
      return total
    }, 0)
}
