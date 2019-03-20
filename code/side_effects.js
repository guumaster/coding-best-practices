// Bad:
let name = 'Rick Sanchez'
const splitName = () => name = name.split(" ")

splitName()
console.log(name) // ['Rick', 'Sanchez']

// Good:
const splitName = (name) => name = name.split(" ")

let name = 'Rick Sanchez'
let newName = splitName(name)
console.log(name) // ['Rick Sanchez']
console.log(newName) // ['Rick', 'Sanchez']
