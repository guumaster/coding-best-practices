function countLetterOccurence(word, letter) {
  const letters = word.split("")
    
  return letters.reduce((total, current) => {
    if (current === letter) {
      total += 1
    }
    return total
  }, 0)
}
