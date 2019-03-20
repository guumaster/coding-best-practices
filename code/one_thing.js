// Bad:
const createFile = (name, temp) => {
  if (temp) {
    fs.create(`./temp/${name}`)
  } else {
    fs.create(name)
  }
}

// Good: 
const createFile = (name) => fs.create(name)

const createTempFile = (name) => createFile(`./temp/${name}`)
